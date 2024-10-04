import React from "react";
import "./footer.scss";
import { GitHub, Star } from "@mui/icons-material";

const Footer = () => {
  const teamMembers = [
    { name: "Shyam", url: "https://github.com/shyam020" },
    { name: "Deepak", url: "https://github.com/deepak-mohanty-web" },
    { name: "Dhanashree", url: "https://github.com/Dhanashree1510" },
    { name: "Abir", url: "https://github.com/AbirDhar79" },
    { name: "Darth Vader", url: "https://github.com/harry713j" },
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
                {member.name === "Darth Vader" ? "Hari" : member.name}
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
