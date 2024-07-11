import React from "react";
import "./footer.scss";
import { GitHub, Star } from "@mui/icons-material";

const Footer = () => {
  const teamMembers = [
    { name: "Shyam", url: "https://github.com/Shyam" },
    { name: "Deepak", url: "https://github.com/Deepak" },
    { name: "Dhanashree", url: "https://github.com/Dhanashree" },
    { name: "Abhir", url: "https://github.com/Abhir" },
    { name: "Hari", url: "https://github.com/Hari" },
  ];
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-logo">ezyResume</h2>
        <p className="github-link">
          <a
            href="https://github.com/your-repo-url"
            target="_blank"
            rel="noopener noreferrer"
          >
            Drop a star <Star className="star-icon" /> on GitHub{" "}
            <GitHub className="github-icon" />
          </a>
        </p>
        <p className="team-info">
          Made with Passion By{" "}
          {teamMembers.map((member, index) => (
            <React.Fragment key={member.name}>
              <a href={member.url} target="_blank" rel="noopener noreferrer">
                {member.name}
              </a>
              {index < teamMembers.length - 1 && ", "}
              {index === teamMembers.length - 2 && "& "}
            </React.Fragment>
          ))}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
