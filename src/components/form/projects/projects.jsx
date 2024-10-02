import React from "react";
import "./projects.scss";
import { Input, Button, MultiSelect, TextArea, IconButton } from "../../index";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProjects } from "../../../store/slices/userDetailsSlice.js";
import { technologies } from "../../../constants/constants.js";
import { Add, DoubleArrow, Delete } from "@mui/icons-material";

function Projects() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      projects: [
        {
          projectName: "",
          projectLink: "",
          tools: [],
          projectSummary: "",
        },
      ],
    },
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "projects",
  });

  const projectsInfo = (data) => {
    console.log(data);
    dispatch(addProjects(data.projects));
    navigate("/user-details/achievements");
  };

  return (
    <div className="details__card">
      <span className="heading__container">
        <h1 className="card__heading">Projects</h1>
        <Button
          variant="text"
          endIcon={<DoubleArrow />}
          onClick={() => navigate("/user-details/achievements")}
        >
          Skip
        </Button>
      </span>
      <form onSubmit={handleSubmit(projectsInfo)} className="details__form">
        {fields.map((field, index) => (
          <section key={field.id} className="form__container">
            <div className="form__row">
              <Input
                label="Project Name"
                helperText={
                  errors.projects?.[index]?.projectName?.message || null
                }
                {...register(`projects.${index}.projectName`, {
                  required: "Project Name is required",
                })}
              />
              <Input
                label="Link to Project"
                helperText={
                  errors.projects?.[index]?.projectLink?.message || null
                }
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
              <Controller
                name={`projects.${index}.tools`}
                control={control}
                defaultValue={[]}
                render={({ field }) => {
                  return (
                    <MultiSelect
                      label="Tools and Tech Used"
                      items={technologies}
                      helperText={
                        errors.projects?.[index]?.tools?.message || null
                      }
                      {...field}
                    />
                  );
                }}
              />
            </div>
            <div className="form__row">
              <TextArea
                label="Project Summary"
                helperText={
                  errors.projects?.[index]?.projectSummary?.message || null
                }
                {...register(`projects.${index}.projectSummary`, {
                  required: "Project Summary is required",
                })}
              />
            </div>
            <div className="remove__button">
              <span>
                <IconButton
                  type="button"
                  color={"#ff3b30"}
                  Icon={Delete}
                  onClick={() => remove(index)}
                >
                  Remove
                </IconButton>
              </span>
            </div>
          </section>
        ))}

        <Button
          type="button"
          variant="text"
          startIcon={<Add />}
          onClick={() => {
            append({
              projectName: "",
              projectLink: "",
              tools: [],
              projectSummary: "",
            });
          }}
        >
          Add more projects
        </Button>
        <div className="form__buttons">
          {/* <span>
            <Button
              type="button"
              variant="outlined"
              onClick={() => navigate("/user-details/skills")}
            >
              Back
            </Button>
          </span> */}
          <span>
            <Button type="submit">Next</Button>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Projects;
