import React from "react";
import "./resume1.scss";
import { Email, GitHub, Language, LinkedIn, Phone } from "@mui/icons-material";

// This is where the style and data of the resume template - 1 will be written
function Resume1() {
  return (
    <div className="resume">
      <section className="id">
        <h1>Javier Villa</h1>
        <p>UI/UX Designer</p>
      </section>
      <section className="about__me">
        <div className="main__details">
          <span className="objective">
            <p>
              The error occurs because the file system you&apos;re using is
              case-sensitive for file paths, meaning it treats errorPage and
              ErrorPage as two different directories. This issue is common on
              case-sensitive file systems (like those on Linux) or when tools
              (such as TypeScript or Webpack) are configured to treat paths in a
              case-sensitive manner.
            </p>
          </span>
          <span className="work">
            <h4>Work experience</h4>
            <div className="work__detail">
              <span className="designation">
                <h5>UX Design Intern</h5>
                <p>@ABC company</p>
              </span>
              <p className="period">Jan 2023 - present</p>
              <span className="what__work">
                <p>
                  In JavaScript, a generator is a special type of function that
                  can pause its execution and later resume from where it paused.
                  It is defined using the function* syntax and works with the
                  yield keyword. Generators return an iterator object, which can
                  be used to iterate through values one at a time.
                </p>
              </span>
            </div>
            <div className="work__detail">
              <span className="designation">
                <h5>UX Design Intern</h5>
                <p>@ABC company</p>
              </span>
              <p className="period">Jan 2023 - present</p>
              <span className="what__work">
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
          <span className="education">
            <h4>Education</h4>
            <div className="education__detail">
              <span className="degree">
                <h5>Bsc</h5>
                <p>@University of design</p>
              </span>
              <p>Jan 2018 - July 2022</p>
            </div>
            <div className="education__detail">
              <span className="degree">
                <h5>Bsc</h5>
                <p>@University of design</p>
              </span>
              <p>Jan 2018 - July 2022</p>
            </div>
          </span>
        </div>
        <div className="side__details">
          <span className="contact">
            <h4>Contact</h4>
            <span className="all__contacts">
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
          <span className="skills">
            <h4>Skills</h4>
            <ul className="all__skills">
              <li>User Research</li>
              <li>Interaction design</li>
              <li>Visual Design</li>
              <li>User testing</li>
              <li>Communication and Collaboration</li>
            </ul>
          </span>
          <span className="achievements">
            <h4>Achievements</h4>
            <div className="achievement__details">
              <h5>Top 100 UI Designer</h5>
              <p>Sept 2023, XYZ org</p>
            </div>
            <div className="achievement__details">
              <h5>Top 100 UI Designer</h5>
              <p>Sept 2023, XYZ org</p>
            </div>
          </span>
        </div>
      </section>
    </div>
  );
}

export default Resume1;
