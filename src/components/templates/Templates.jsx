import React from "react";
import { TemplateCard } from "../index.js";
import "./templates.scss";
import Template1 from "/resumes/resume template-1.svg";
import Template2 from "/resumes/resume template-2.svg";
import Template3 from "/resumes/resume template-3.svg";
import Template4 from "/resumes/resume template-4.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Templates = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const templates = [
    { id: 1, name: "Template1", image: Template1 },
    { id: 2, name: "Template2", image: Template2 },
    { id: 3, name: "Template3", image: Template3 },
    { id: 4, name: "Template4", image: Template4 },
  ];
  return (
    <div>
      <div className="template-selection-page">
        <div className="templates-grid">
          {templates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              navigate={navigate}
              dispatch={dispatch}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Templates;
