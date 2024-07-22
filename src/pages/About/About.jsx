import "./About.scss";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
const About = () => {
  return (
    <div className="about">
      <div className="top">
        <h1 className="title">About ezyResume</h1>
        <p className="description">
          ezyResume is a collaborative project developed by a passionate team of
          friends with a mission to revolutionize the job-seeking process. We
          recognized the need for an innovative solution to connect job- seekers
          with recruiters efficiently and effectively. Our goal is to help you
          find your ideal job faster, without the hassle of traditional
          resume-building methods. We have carefully designed our resume
          templates to meet industry standards and gain acceptance from top HR
          departments, ensuring that your resume stands out in a competitive job
          market. With ezyResume, you can easily create an impressive resume
          that makes a memorable first impression, tailored to showcase your
          unique skills and experiences. Our user-friendly platform allows for
          quick edits and updates, keeping your resume current and relevant.
          Join us and take the first step towards landing your dream job with
          ezyResume.
        </p>
      </div>
      <div className="middle">
        <h1 className="title">Benefits Of Using Our Product</h1>
        <h3>Why Choose us?</h3>
        <div className="features">
          <div className="feature">
            <h2>Easy to use</h2>
            <div className="desc">
              <img
                src="../../../public/images/seated_man_wearing_headphones using laptop.png"
                alt="Easy to use icon"
              />
              <p>
                The process of writing a resume is substantially sped up and
                simplified by using our resume builder.
              </p>
            </div>
          </div>
          <div className="feature">
            <h2>Cool Templates</h2>
            <div className="desc">
              <img
                src="../../../public/images/template_design.png"
                alt="Cool templates icon"
              />
              <p>
                Our template designs help your resume stand out in a pool of
                others.
              </p>
            </div>
          </div>
          <div className="feature">
            <h2>Intelligent Design</h2>
            <div className="desc">
              <img
                src="../../../public/images/Design_Process.png"
                alt="Intelligent design icon"
              />
              <p>
                With us, you will not have to bother about the minute details of
                resume development, such as font choice, layout, etc.
              </p>
            </div>
          </div>
          <div className="feature">
            <h2>No Hidden Charges</h2>
            <div className="desc">
              <img
                src="../../../public/images/No_hidden_charges.png"
                alt="No hidden charges icon"
              />
              <p>
                We have got a free version and our premium pricing is clear. We
                notify you about any new charges in good time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <h1>Share with your friends</h1>
        <div className="social">
          <FaFacebook style={{ color: "blue" }} />
          <FaGithub style={{ color: "black" }} />
          <FaLinkedin style={{ color: "rgba(79, 150, 212, 0.974)" }} />
          <IoLogoInstagram style={{ color: "red" }} />
          <IoLogoWhatsapp style={{ color: "green" }} />
        </div>
      </div>
    </div>
  );
};

export default About;
