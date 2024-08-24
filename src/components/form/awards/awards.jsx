import React from "react";
import "./awards.scss";
import { Input, Button, DatePicker, TextArea } from "../../index";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAchievement } from "../../../store/slices/userDetailsSlice.js";
import { Add, DoubleArrow } from "@mui/icons-material";

function Awards() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const awardsInfo = (data) => {
    console.log(data);
    dispatch(addAchievement(data));
    navigate("/preview");
  };

  return (
    <div className="details__card">
      <span className="heading__container">
        <h1 className="card__heading">Awards / Certification</h1>
        <Button
          variant="text"
          endIcon={<DoubleArrow />}
          onClick={() => navigate("/preview")}
        >
          Skip
        </Button>
      </span>
      <form onSubmit={handleSubmit(awardsInfo)} className="details__form">
        <div className="form__row">
          <Input
            label="Name of Organization"
            helperText={
              errors.organizationName ? errors.organizationName.message : null
            }
            {...register(`organizationName`, {
              required: "Name of Organization is required",
            })}
          />
        </div>
        <div className="form__row">
          <Input
            label="Award Title"
            helperText={errors.awardTitle ? errors.awardTitle.message : null}
            {...register(`awardTitle`, { required: "Award Title is required" })}
          />
          <DatePicker
            label="Date of Acquisition"
            helperText={
              errors.dateOfAcquisition ? errors.dateOfAcquisition.message : null
            }
            {...register(`dateOfAcquisition`, {
              required: "Date of Acquisition is required",
            })}
          />
        </div>
        <div className="form__row">
          <TextArea
            label="Description"
            helperText={errors.description ? errors.description.message : null}
            {...register(`description`, {
              required: "Description is required",
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
              onClick={() => navigate("/user-details/projects")}
            >
              Back
            </Button>
          </span>
          <span>
            <Button type="submit">Preview</Button>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Awards;
