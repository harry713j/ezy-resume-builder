import React from "react";
import "./awards.scss";
import { Input, Button, DatePicker, TextArea } from "../../index"; 
import { useForm, useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAchievement } from "../../../store/slices/userDetailsSlice.js";

function Awards() {
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
    name: "awards"
  });

  const awardsInfo = (data) => {
    console.log(data);
    dispatch(addAchievement(data));
    // navigate("next-step");preview
  };

  return (
    <div className="details__card">
      <span className="heading__container">
        <h1 className="card__heading">Award/Certification</h1>
        <button className="skip-button" onClick={() => navigate("next-step")}>Skip</button>
      </span>
      <form onSubmit={handleSubmit(awardsInfo)} className="details__form">
        {fields.map((item, index) => (
          <div key={item.id}>
            <div className="form__row">
              <Input
                className="half-width" 
                label="Name of Organization"
                defaultValue={item.organizationName}
                helperText={errors.awards?.[index]?.organizationName ? errors.awards[index].organizationName.message : null}
                {...register(`awards.${index}.organizationName`, { required: "Name of Organization is required" })}
              />
            </div>
            <div className="form__row">
              <Input
                className="half-width" 
                label="Award Title"
                defaultValue={item.awardTitle}
                helperText={errors.awards?.[index]?.awardTitle ? errors.awards[index].awardTitle.message : null}
                {...register(`awards.${index}.awardTitle`, { required: "Award Title is required" })}
              />
              <DatePicker
                className="half-width" 
                label="Date of Acquisition"
                defaultValue={item.dateOfAcquisition}
                helperText={errors.awards?.[index]?.dateOfAcquisition ? errors.awards[index].dateOfAcquisition.message : null}
                {...register(`awards.${index}.dateOfAcquisition`, { required: "Date of Acquisition is required" })}
              />
            </div>
            <div className="form__row">
              <TextArea
                label="Description"
                defaultValue={item.description}
                helperText={errors.awards?.[index]?.description ? errors.awards[index].description.message : null}
                {...register(`awards.${index}.description`, { required: "Description is required" })}
              />
            </div>
          </div>
        ))}
        <button type="button" className="add-award-button" onClick={() => append({ organizationName: "", awardTitle: "", dateOfAcquisition: "", description: "" })}>+ Add new</button>
        <div className="form__buttons">
          <Button
            type="button"
            className="back-button"
            onClick={() => navigate("previous-section")}
          >Back</Button>
          <Button type="submit" className="next-button">
            Preview
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Awards;
