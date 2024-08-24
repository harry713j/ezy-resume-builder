import React from "react";
import "./WorkExperience.scss";
import { Input, Button, DatePicker, TextArea } from "../../index"; 
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addWorkExperience } from "../../../store/slices/userDetailsSlice.js"; 

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
    navigate("skills"); 
  };

  return (
    <div className="details__card">
      <span className="heading__container">
        <h1 className="card__heading">Work Experience</h1>
        <button className="skip-button" onClick={() => navigate("skills")}>Skip</button>
      </span>
      <form onSubmit={handleSubmit(workExperience)} className="details__form">
        <div className="form__row">
          <Input
            className="half-width" 
            label="Job Title"
            helperText={errors.jobTitle ? errors.jobTitle.message : null}
            {...register("jobTitle", { required: "Job Title is required" })}
          />
          <Input
            className="half-width" 
            label="Organization Name"
            helperText={errors.organizationName ? errors.organizationName.message : null}
            {...register("organizationName", { required: "Organization Name is required" })}
          />
        </div>
        <div className="form__row">
          <DatePicker
            className="half-width" 
            label="Start Date"
            helperText={errors.startDate ? errors.startDate.message : null}
            {...register("startDate", { required: "Start Date is required" })}
          />
          <DatePicker
            className="half-width" 
            label="End Date"
            helperText={errors.endDate ? errors.endDate.message : null}
            {...register("endDate", { required: "End Date is required" })}
          />
        </div>
        <div className="form__row">
          <TextArea
            label="Job Responsibility"
            helperText={errors.jobResponsibility ? errors.jobResponsibility.message : null}
            {...register("jobResponsibility", { required: "Job Responsibility is required" })}
          />
        </div>
        <button type="button" className="add-experience-button">+ Add Experience</button>
        <div className="form__buttons">
          <Button
            type="button"
            className="back-button"
            onClick={() => navigate("education")}
          >Back</Button>
          <Button type="submit" className="next-button">
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}

export default WorkExperience;

