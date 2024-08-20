import React, { useEffect, useRef } from "react";
import { Button } from "../../components/index.js";
import resume4 from "/resumes/resume template-4.svg";
import resume1 from "/resumes/resume template-1.svg";
import resume2 from "/resumes/resume template-2.svg";
import resume3 from "/resumes/resume template-3.svg";
import illustration1 from "/images/home_page_image_1.png";
import illustration2 from "/images/home_page_image_2.png";
import illustration3 from "/images/home_page_image_3.png";
import illustration4 from "/images/home_page_image_4.png";
import { useNavigate } from "react-router-dom";
import "./LandingPage.scss";

const LandingPage = () => {
  const navigate = useNavigate();
  const imageOneRef = useRef(null);
  const imageThreeRef = useRef(null);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const container = imageContainerRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          imageOneRef.current.classList.add("animate__left");
          imageThreeRef.current.classList.add("animate__right");
        }
      });
    });

    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  return (
    <div className="landing__page">
      <section className="hero__section">
        <article className="text">
          <h1 className="hero__title">
            Stand out with a professionally designed resume
          </h1>
          <p className="hero__paragraph">
            Create awesome resumes with one of our template in just few seconds.
          </p>
          <span className="CTA__button">
            <Button onClick={() => navigate("/templates")}>
              create resume
            </Button>
          </span>
        </article>
        <article className="image">
          <img src={resume4} alt="resume" className="resume" />
        </article>
      </section>
      <section className="illustration__section">
        <h1 className="illustration__title">
          Build your <span>resume</span> in 3 easy steps
        </h1>
        <article className="row__one">
          <span className="illustration">
            <img src={illustration1} alt="illustration1" />
          </span>
          <span className="description">
            <span className="number">1.</span>
            <span>
              <h3>Pick a Template</h3>
              <p>Fill in the blanks and see results in real-time.</p>
            </span>
          </span>
          <span className="circle"></span>
        </article>
        <article className="row__two">
          <span className="square__3d">
            <span className="square"></span>
            <span className="square dotted"></span>
          </span>
          <span className="illustration">
            <img src={illustration2} alt="illustration2" />
          </span>
          <span className="description">
            <span className="number">2.</span>
            <span>
              <h3>Customize Your Layout</h3>
              <p>Give your document a professional and elegant look.</p>
            </span>
          </span>
        </article>
        <article className="row__three">
          <span className="illustration">
            <img src={illustration3} alt="illustration3" />
          </span>
          <span className="description">
            <span className="number">3.</span>
            <span>
              <h3>Hit &apos;Download!&apos;</h3>
              <p>Download your resume, apply, get more interviews.</p>
            </span>
          </span>
        </article>
      </section>
      <section className="description__section">
        <article className="first__desc">
          <div className="text__container">
            <h2 className="paragraph__title">
              You can always pick any template you like
            </h2>
            <p className="paragraph">
              Choose from one of our expertly prepared resume types below, by
              using pre-established parts that have been endorsed by recruiters
              internationally, you can begin creating your resume in under 5
              seconds, additionally, you can edit to fit your preferences and
              personality before clicking &quot;Download&quot;. Even if you have
              never created a resume before, it is that SIMPLE to use!
            </p>
          </div>
          <div className="image__container" ref={imageContainerRef}>
            <img
              src={resume1}
              alt="resume-1"
              className="image__one"
              ref={imageOneRef}
            />
            <img src={resume2} alt="resume-2" className="image__two" />
            <img
              src={resume3}
              alt="resume-3"
              className="image__three"
              ref={imageThreeRef}
            />
          </div>
        </article>
        <article className="second__desc">
          <div className="image__container">
            <img src={illustration4} alt="illustration4" />
          </div>
          <div className="text__container">
            <h2 className="paragraph__title">
              Save your Resume for future use
            </h2>
            <p className="paragraph">
              Create an account effortlessly using your Google account and save
              your fully prepared resume for future use. Edit it anytime,
              ensuring your resume is always up-to-date and ready for job
              applications. Our resume builder simplifies the process, allowing
              you to create and save professional resumes with ease. Tailor your
              resume to different job applications quickly, making your job hunt
              more efficient.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default LandingPage;
