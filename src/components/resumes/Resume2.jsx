import React from "react";
import "./resume2.scss";
import { Phone, Email, Language, LinkedIn, GitHub } from "@mui/icons-material";

function Resume2({ details }) {
  const {
    personalInfo,
    educationDetails,
    workExperience,
    skills,
    projects,
    achievements,
  } = details;
  return (
    <div className="resume__2">
      <section className="id__2">
        <h1>{`${personalInfo.firstName.charAt(0).toUpperCase() + personalInfo.firstName.slice(1).toLowerCase()} ${personalInfo.lastName.charAt(0).toUpperCase() + personalInfo.lastName.slice(1).toLowerCase()}`}</h1>
        <p>{personalInfo.jobTitle}</p>
      </section>
      <section className="about__me__2">
        <div className="main__details__2">
          <span className="objective__2">
            <p>{personalInfo.objective}</p>
          </span>
          <span className="work__2">
            <h4>Work experience</h4>
            {workExperience.length > 0
              ? workExperience.map((work, _) => (
                  <div className="work__detail__2" key={_}>
                    <span className="designation__2">
                      <h5>{work.jobTitle}</h5>
                      <p>{`@${work.organizationName}`}</p>
                    </span>
                    <p className="period__2">{`${new Date(work.startDate).toString().split(" ")[1]} ${new Date(work.startDate).toString().split(" ")[3]} - ${work.endDate ? new Date(work.endDate).toString().split(" ")[1] + " " + new Date(work.endDate).toString().split(" ")[3] : "Present"}`}</p>
                    <span className="what__work__2">
                      <p>{work.jobResponsibility}</p>
                    </span>
                  </div>
                ))
              : projects.map((project, _) => (
                  <div className="work__detail__2" key={_}>
                    <span className="designation__2">
                      <h5>{project.projectName}</h5>
                      <p>{` `}</p>
                    </span>
                    <p className="period__2">{project.projectLink}</p>
                    <span className="tools">
                      <p>{project.tools.join(", ")}</p>
                    </span>
                    <span className="what__work__2">
                      <p>{project.projectSummary}</p>
                    </span>
                  </div>
                ))}
          </span>
          <span className="education__2">
            <h4>Education</h4>
            <div className="education__detail__2">
              <span className="degree__2">
                <h5>{`${educationDetails.type} ${educationDetails.degree}`}</h5>
                <p>{`@${educationDetails.university}`}</p>
              </span>
              <p>{`${educationDetails.startYear} - ${educationDetails.endYear > new Date().getFullYear() ? "Present" : educationDetails.endYear}`}</p>
            </div>
          </span>
        </div>
        <div className="side__details__2">
          <span className="contact__2">
            <h4>Contact</h4>
            <span className="all__contacts__2">
              {personalInfo.website && (
                <span>
                  <span>
                    <Language />
                  </span>
                  <p>{personalInfo.website}</p>
                </span>
              )}
              <span>
                <span>
                  <Email />
                </span>
                <p>{personalInfo.email}</p>
              </span>
              <span>
                <span>
                  <Phone />
                </span>
                <p>{personalInfo.mobile}</p>
              </span>
              {personalInfo.linkedIn && (
                <span>
                  <span>
                    <LinkedIn />
                  </span>
                  <p>{personalInfo.linkedIn}</p>
                </span>
              )}
              {personalInfo.github && (
                <span>
                  <span>
                    <GitHub />
                  </span>
                  <p>{personalInfo.github}</p>
                </span>
              )}
            </span>
          </span>
          <span className="skills__2">
            <h4>Skills</h4>
            <ul className="all__skills__2">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </span>
          {achievements.length > 0 && (
            <span className="achievements__2">
              <h4>Achievements</h4>
              {achievements.map((award, index) => (
                <div className="achievement__details__2" key={index}>
                  <h5>{award.awardTitle}</h5>
                  <p>{`${new Date(award.dateOfAcquisition).toString().split(" ")[1]} ${new Date(award.dateOfAcquisition).toString().split(" ")[3]}, ${award.organizationName}`}</p>
                  <p className="achievement__description">
                    {award.description}
                  </p>
                </div>
              ))}
            </span>
          )}
        </div>
      </section>
    </div>
  );
}

export default Resume2;
