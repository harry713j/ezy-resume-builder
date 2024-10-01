import React from "react";
import { Resume1, Resume2, Resume3, Button } from "../../components";
import { Download } from "@mui/icons-material";
import "./preview.scss";

function PreviewPage() {
  return (
    <div className="preview__page">
      <section className="resume__container">
        <Resume1 />
      </section>
      <section className="button__group">
        <Button variant="outlined" className="edit__button">
          Edit
        </Button>
        <Button startIcon={<Download />} className="save__button">
          Save
        </Button>
      </section>
    </div>
  );
}

export default PreviewPage;
