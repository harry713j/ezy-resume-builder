import React from "react";
import "./educationInfo.scss";
import { Input, Button, Select } from "../../index";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addEducationDetails } from "../../../store/slices/userDetailsSlice.js";
import { years } from "../../../constants/constants.js";

function EducationInfo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const educationInfo = (data) => {
    console.log(data);

    dispatch(addEducationDetails(data));

    navigate("/user-details/experience");
  };

  return (
    <div className="details__card">
      <span className="heading__container">
        <h1 className="card__heading">Education Details</h1>
      </span>
      <form onSubmit={handleSubmit(educationInfo)} className="details__form">
        <div className="form__row">
          <Input
            label="Type"
            helperText={errors.type ? errors.type.message : null}
            {...register("type", { required: "Type is required" })}
          />
        </div>
        <div className="form__row">
          <Input
            label="University"
            helperText={errors.university ? errors.university.message : null}
            {...register("university", { required: "University is required" })}
          />

          <Input
            label="Degree"
            helperText={errors.degree ? errors.degree.message : null}
            {...register("degree", { required: "Degree is required" })}
          />
        </div>

        <div className="form__row">
          <Select
            items={years}
            label="Start Year"
            type="number"
            helperText={errors.startYear ? errors.startYear.message : null}
            {...register("startYear", { required: "Start Year is required" })}
          />
          <Select
            items={years}
            label="End Year"
            type="number"
            helperText={errors.endYear ? errors.endYear.message : null}
            {...register("endYear", { required: "End Year is required" })}
          />
        </div>
        <div className="form__buttons">
          <span>
            <Button
              type="button"
              variant="outlined"
              onClick={() => navigate("/user-details/personal-info")}
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

export default EducationInfo;
