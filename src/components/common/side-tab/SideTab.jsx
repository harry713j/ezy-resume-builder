import React from "react";
import "./side_tab.scss";
import {
  Person,
  School,
  Work,
  Construction,
  Engineering,
  EmojiEvents,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const tabSections = [
  {
    id: 1,
    label: "personal information",
    Icon: <Person />,
    route: "personal-info",
  },
  { id: 2, label: "education", Icon: <School />, route: "education" },
  { id: 3, label: "experience", Icon: <Work />, route: "experience" },
  { id: 4, label: "skills", Icon: <Construction />, route: "skills" },
  { id: 5, label: "projects", Icon: <Engineering />, route: "projects" },
  {
    id: 6,
    label: "award/certification",
    Icon: <EmojiEvents />,
    route: "achievements",
  },
];

function SideTab() {
  return (
    <section className="section__tabs">
      {tabSections.map((tab) => (
        <NavLink
          key={tab.id}
          to={tab.route}
          className={({ isActive }) => `${isActive ? "active" : "not__active"}`}
        >
          <div className="tab__item">
            <span className="tab__icon">{tab.Icon}</span>
            <span className="tab__label">{tab.label}</span>
          </div>
        </NavLink>
      ))}
    </section>
  );
}

export default SideTab;
