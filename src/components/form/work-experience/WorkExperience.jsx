import React from "react";
import "./WorkExperience.scss";
import { Input, Button, DatePicker, TextArea } from "../../index";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addWorkExperience } from "../../../store/slices/userDetailsSlice.js";
import { DoubleArrow, Add } from "@mui/icons-material";

function WorkExperience() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        <div className="form__row">
          <Input
            label="Job Title"
            helperText={errors.jobTitle ? errors.jobTitle.message : null}
            {...register("jobTitle", { required: "Job Title is required" })}
          />
          <Input
            label="Organization Name"
            helperText={
              errors.organizationName ? errors.organizationName.message : null
            }
            {...register("organizationName", {
              required: "Organization Name is required",
            })}
          />
        </div>
        <div className="form__row">
          <DatePicker
            label="Start Date"
            helperText={errors.startDate ? errors.startDate.message : null}
            {...register("startDate", { required: "Start Date is required" })}
          />
          <DatePicker
            label="End Date"
            helperText={errors.endDate ? errors.endDate.message : null}
            {...register("endDate", { required: "End Date is required" })}
          />
        </div>
        <div className="form__row">
          <TextArea
            label="Job Responsibility"
            helperText={
              errors.jobResponsibility ? errors.jobResponsibility.message : null
            }
            {...register("jobResponsibility", {
              required: "Job Responsibility is required",
            })}
          />
        </div>
        <Button type="button" variant="text" startIcon={<Add />}>
          Add Experience
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
