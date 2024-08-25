import React from "react";
import "./WorkExperience.scss";
import { Input, Button, DatePicker, TextArea, IconButton } from "../../index";
import { useForm, useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addWorkExperience } from "../../../store/slices/userDetailsSlice.js";
import { DoubleArrow, Add, Delete } from "@mui/icons-material";

function WorkExperience() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      experience: [
        {
          jobTitle: "",
          organizationName: "",
          startDate: null,
          endDate: null,
          jobResponsibility: "",
        },
      ],
    },
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience",
  });

  const workExperience = (data) => {
    console.log(data);
    dispatch(addWorkExperience(data));
    navigate("/user-details/skills");
  };

  return (
    <div className="details__card">
      <span className="heading__container">
        <h1 className="card__heading">Work Experience</h1>
        <Button
          variant="text"
          endIcon={<DoubleArrow />}
          onClick={() => navigate("/user-details/skills")}
        >
          Skip
        </Button>
      </span>
      <form onSubmit={handleSubmit(workExperience)} className="details__form">
        {fields.map((field, index) => (
          <section key={field.id} className="form__container">
            <div className="form__row">
              <Input
                label="Job Title"
                helperText={
                  errors.experience?.[index]?.jobTitle?.message || null
                }
                {...register(`experience.${index}.jobTitle`, {
                  required: "Job Title is required",
                })}
              />
              <Input
                label="Organization Name"
                helperText={
                  errors.experience?.[index]?.organizationName?.message || null
                }
                {...register(`experience.${index}.organizationName`, {
                  required: "Organization Name is required",
                })}
              />
            </div>
            <div className="form__row">
              <DatePicker
                label="Start Date"
                helperText={
                  errors.experience?.[index]?.startDate?.message || null
                }
                {...register(`experience.${index}.startDate`, {
                  required: "Start Date is required",
                })}
              />
              <DatePicker
                label="End Date"
                helperText={
                  errors.experience?.[index]?.endDate?.message || null
                }
                {...register(`experience.${index}.endDate`, {
                  required: "End Date is required",
                })}
              />
            </div>
            <div className="form__row">
              <TextArea
                label="Job Responsibility"
                helperText={
                  errors.experience?.[index]?.jobResponsibility?.message || null
                }
                {...register(`experience.${index}.jobResponsibility`, {
                  required: "Job Responsibility is required",
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
              jobTitle: "",
              organizationName: "",
              startDate: null,
              endDate: null,
              jobResponsibility: "",
            });
          }}
        >
          Add more Experience
        </Button>
        <div className="form__buttons">
          <span>
            <Button
              type="button"
              variant="outlined"
              onClick={() => navigate("/user-details/education")}
            >
              Back
            </Button>
          </span>
          <span>
            <Button type="submit">Next</Button>
          </span>
        </div>
      </form>
    </div>
  );
}

export default WorkExperience;