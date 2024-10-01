import React from "react";
import "./resume3.scss";
import { Phone, Email, Language, LinkedIn, GitHub } from "@mui/icons-material";

// This is where the style and data of the resume template - 3 will be written
function Resume3() {
  return (
    <div className="resume__3">
      <section className="id__3">
        <h1>Javier Villa</h1>
        <p>UI/UX Designer</p>
      </section>
      <section className="about__me__3">
        <div className="main__details__3">
          <span className="objective__3">
            <p>
              The error occurs because the file system you&apos;re using is
              case-sensitive for file paths, meaning it treats errorPage and
              ErrorPage as two different directories. This issue is common on
              case-sensitive file systems (like those on Linux) or when tools
              (such as TypeScript or Webpack) are configured to treat paths in a
              case-sensitive manner.
            </p>
          </span>
          <span className="work__3">
            <h4>Work experience</h4>
            <div className="work__detail__3">
              <span className="designation__3">
                <h5>UX Design Intern</h5>
                <p>@ABC company</p>
              </span>
              <p className="period__3">Jan 2023 - present</p>
              <span className="what__work__3">
                <p>
                  In JavaScript, a generator is a special type of function that
                  can pause its execution and later resume from where it paused.
                  It is defined using the function* syntax and works with the
                  yield keyword. Generators return an iterator object, which can
                  be used to iterate through values one at a time.
                </p>
              </span>
            </div>
            <div className="work__detail__3">
              <span className="designation__3">
                <h5>UX Design Intern</h5>
                <p>@ABC company</p>
              </span>
              <p className="period__3">Jan 2023 - present</p>
              <span className="what__work__3">
                <p>
                  In JavaScript, a generator is a special type of function that
                  can pause its execution and later resume from where it paused.
                  It is defined using the function* syntax and works with the
                  yield keyword. Generators return an iterator object, which can
                  be used to iterate through values one at a time.
                </p>
              </span>
            </div>
          </span>
          <span className="education__3">
            <h4>Education</h4>
            <div className="education__detail__3">
              <span className="degree__3">
                <h5>Bsc</h5>
                <p>@University of design</p>
              </span>
              <p>Jan 2018 - July 2022</p>
            </div>
            <div className="education__detail__3">
              <span className="degree__3">
                <h5>Bsc</h5>
                <p>@University of design</p>
              </span>
              <p>Jan 2018 - July 2022</p>
            </div>
          </span>
        </div>
        <div className="side__details__3">
          <span className="contact__3">
            <h4>Contact</h4>
            <span className="all__contacts__3">
              <span>
                <span>
                  <Language />
                </span>
                <p>ninapatel.design</p>
              </span>
              <span>
                <span>
                  <Email />
                </span>
                <p>ninapatel@gmail.com</p>
              </span>
              <span>
                <span>
                  <Phone />
                </span>
                <p>+91 7589389365</p>
              </span>
              <span>
                <span>
                  <LinkedIn />
                </span>
                <p>Nina Patel</p>
              </span>
              <span>
                <span>
                  <GitHub />
                </span>
                <p>little-nina</p>
              </span>
            </span>
          </span>
          <span className="skills__3">
            <h4>Skills</h4>
            <ul className="all__skills__3">
              <li>User Research</li>
              <li>Interaction design</li>
              <li>Visual Design</li>
              <li>User testing</li>
              <li>Communication and Collaboration</li>
            </ul>
          </span>
          <span className="achievements__3">
            <h4>Achievements</h4>
            <div className="achievement__details__3">
              <h5>Top 100 UI Designer</h5>
              <p>Sept 2023, XYZ org</p>
            </div>
            <div className="achievement__details__3">
              <h5>Top 100 UI Designer</h5>
              <p>Sept 2023, XYZ org</p>
            </div>
          </span>
        </div>
      </section>
    </div>
  );
}

export default Resume3;

/* https://medium.com/@laurenbethhess/how-to-create-a-pdf-in-react-d18818190b6

TODO: READ About --> HTML2canvasOption from jspdf,
                     html()  from jspdf

*/
