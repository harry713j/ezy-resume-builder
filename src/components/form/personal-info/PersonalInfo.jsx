import React from "react";
import "./personalInfo.scss";
import { Input, Button, TextArea } from "../../index";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPersonalInfo } from "../../../store/slices/userDetailsSlice.js";

function PersonalInfo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const personalInfo = (data) => {
    console.log(data);
    // handle the data coming from the form by dispatching them to store
    dispatch(addPersonalInfo(data));
    // then navigate it to next form
    navigate("education");
  };

  return (
    <div className="details__card">
      <span className="heading__container">
        <h1 className="card__heading">Personal Information</h1>
      </span>
      <form onSubmit={handleSubmit(personalInfo)} className="details__form">
        <div className="form__row">
          <Input
            label="first name"
            helperText={errors.firstName ? errors.firstName.message : null}
            {...register("firstName", { required: "first name is required" })}
          />

          <Input
            label="last name"
            helperText={errors.lastName ? errors.lastName.message : null}
            {...register("lastName", { required: "last name is required" })}
          />
        </div>
        <div className="form__row">
          <Input
            type="email"
            label="email"
            helperText={errors.email ? errors.email.message : null}
            {...register("email", {
              required: "email is required",
              validate: {
                matchPattern: (value) =>
                  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
                    value
                  ) || "Email address must be valid address",
              },
            })}
          />
          <Input
            type="tel"
            label="mobile"
            helperText={errors.mobile ? errors.mobile.message : null}
            {...register("mobile", {
              required: "mobile is required",
              validate: {
                matchPattern: (value) =>
                  /^\d{10}$/.test(value) || "mobile number must be valid",
              },
            })}
          />
        </div>
        <div className="form__row">
          <Input
            label="address"
            helperText={errors.address ? errors.address.message : null}
            {...register("address")}
          />
        </div>
        <div className="form__row">
          <Input
            label="city"
            helperText={errors.city ? errors.city.message : null}
            {...register("city")}
          />
          <Input
            label="state"
            helperText={errors.state ? errors.state.message : null}
            {...register("state")}
          />
          <Input
            label="zip code"
            helperText={errors.zipCode ? errors.zipCode.message : null}
            {...register("zipCode")}
          />
        </div>
        <div className="form__row">
          <Input
            label="job title"
            helperText={errors.jobTitle ? errors.jobTitle.message : null}
            {...register("jobTitle", { required: "Job title is required" })}
          />
          <Input
            label="linkedIn profile (optional)"
            helperText={errors.linkedIn ? errors.linkedIn.message : null}
            {...register("linkedIn", {
              validate: {
                matchPattern: (value) =>
                  /^(https?:\/\/)?([a-zA-Z0-9_-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[a-zA-Z0-9#?&=_-]*)*\/?$/.test(
                    value
                  ) || "Please provide a valid url",
              },
            })}
          />
        </div>
        <div className="form__row">
          <Input
            label="gitHub profile (optional)"
            helperText={errors.github ? errors.github.message : null}
            {...register("github", {
              validate: {
                matchPattern: (value) =>
                  /^(https?:\/\/)?([a-zA-Z0-9_-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[a-zA-Z0-9#?&=_-]*)*\/?$/.test(
                    value
                  ) || "Please provide a valid url",
              },
            })}
          />
          <Input
            label="personal website (optional)"
            helperText={errors.website ? errors.website.message : null}
            {...register("website", {
              validate: {
                matchPattern: (value) =>
                  /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(
                    value
                  ) || "Please provide a valid url",
              },
            })}
          />
        </div>
        <div className="form__row">
          <TextArea
            label="objective"
            helperText={errors.objective ? errors.objective.message : null}
            {...register("objective", { required: "Objective is required" })}
          />
        </div>

        <div className="form__buttons">
          <span>
            <Button type="submit">next</Button>
          </span>
        </div>
      </form>
    </div>
  );
}

export default PersonalInfo;
