import React from "react";
import { Resume1, Resume2, Resume3, Button } from "../../components";
import { Download } from "@mui/icons-material";
import "./preview.scss";
import { useSelector } from "react-redux";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function PreviewPage() {
  const pdfRef = React.useRef(null);
  const userDetails = useSelector((state) => state.userDetails);
  const savePDF = () => {
    const pdfContent = pdfRef.current;

    html2canvas(pdfContent, {
      scale: 2,
      useCORS: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      const pdf = new jsPDF("p", "mm", [imgWidth, imgHeight]);

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save(
        `${userDetails.personalInfo.firstName}_${userDetails.personalInfo.lastName}_resume.pdf`
      );
    });
  };

  return (
    <div className="preview__page">
      <section className="resume__container" ref={pdfRef}>
        {userDetails.template === "Template1" ? (
          <Resume1 details={userDetails.details} />
        ) : userDetails.template === "Template2" ? (
          <Resume2 details={userDetails.details} />
        ) : (
          <Resume3 details={userDetails.details} />
        )}
        {/* <Resume1 /> */}
      </section>
      <section className="button__group">
        {/* <Button
          variant="outlined"
          className="edit__button"
          onClick={() => navigate("/user-details/personal-info")}
        >
          Edit
        </Button> */}
        <Button
          startIcon={<Download />}
          className="save__button"
          onClick={savePDF}
        >
          Save
        </Button>
      </section>
    </div>
  );
}

export default PreviewPage;
