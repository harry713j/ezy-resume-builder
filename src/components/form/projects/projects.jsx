import React from "react";
import "./projects.scss";
import { Input, Button, MultiSelect, TextArea } from "../../index"; 
import { useForm, useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProjects } from "../../../store/slices/userDetailsSlice.js";

function Projects() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { fields, append } = useFieldArray({
    control,
    name: "projects"
  });

  const projectsInfo = (data) => {
    console.log(data);
    dispatch(addProjects(data));
    navigate("award"); 
  };

  return (
    <div className="details__card">
      <span className="heading__container">
        <h1 className="card__heading">Projects</h1>
        <button className="skip-button" onClick={() => navigate("next-step")}>Skip</button>
      </span>
      <form onSubmit={handleSubmit(projectsInfo)} className="details__form">
        {fields.map((item, index) => (
          <div key={item.id}>
            <div className="form__row">
              <Input
                className="half-width" 
                label="Project Name"
                defaultValue={item.projectName}
                helperText={errors.projects?.[index]?.projectName ? errors.projects[index].projectName.message : null}
                {...register(`projects.${index}.projectName`, { required: "Project Name is required" })}
              />
              <Input
                className="half-width" 
                label="Link to Project"
                defaultValue={item.projectLink}
                helperText={errors.projects?.[index]?.projectLink ? errors.projects[index].projectLink.message : null}
                {...register(`projects.${index}.projectLink`, {
                  validate: {
                    matchPattern: (value) =>
                      /^(https?:\/\/)?([a-zA-Z0-9_-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[a-zA-Z0-9#?&=_-]*)*\/?$/.test(
                        value
                      ) || "Please provide a valid URL",
                  },
                })}
              />
            </div>
            <div className="form__row">
              <MultiSelect
                className="half-width"
                label="Tools and Tech Used"
                multiple
                options={["React", "JavaScript", "Node.js", "CSS", "HTML"]}
                defaultValue={item.tools}
                helperText={errors.projects?.[index]?.tools ? errors.projects[index].tools.message : null}
                {...register(`projects.${index}.tools`, { required: "Tools and Tech Used is required" })}
              />
            </div>
            <div className="form__row">
              <TextArea
                label="Project Summary"
                defaultValue={item.projectSummary}
                helperText={errors.projects?.[index]?.projectSummary ? errors.projects[index].projectSummary.message : null}
                {...register(`projects.${index}.projectSummary`, { required: "Project Summary is required" })}
              />
            </div>
          </div>
        ))}
        <button type="button" className="add-project-button" onClick={() => append({ projectName: "", projectLink: "", tools: [], projectSummary: "" })}>+ Add new</button>
        <div className="form__buttons">
          <Button
            type="button"
            className="back-button"
            onClick={() => navigate("skills")}
          >Back</Button>
          <Button type="submit" className="next-button">
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Projects;

