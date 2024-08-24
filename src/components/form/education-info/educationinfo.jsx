import React from "react";
import "./educationInfo.scss";
import { Input, Button,DatePicker } from "../../index"; 
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addEducationDetails } from "../../../store/slices/userDetailsSlice.js"; 

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
    
    navigate("experience"); 
  };

  return (
    <div className="details__card">
      <span className="heading__container">
        <h1 className="card__heading">Education Details</h1>
      </span>
      <form onSubmit={handleSubmit(educationInfo)} className="details__form">
        
          <div className="form__row">
          <Input
           className="half-width" 
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
          <DatePicker
          className="half-widthdate" 
            label="Start Year"
            type="number"
            helperText={errors.startYear ? errors.startYear.message : null}
            {...register("startYear", { required: "Start Year is required" })}
          />
          <DatePicker
          className="half-widthdate" 
            label="End Year"
            type="number"
            helperText={errors.endYear ? errors.endYear.message : null}
            {...register("endYear", { required: "End Year is required" })}
          />
        </div>
        <div className="form__buttons">
        <Button
          type="button"
          className="back-button"
          onClick={() => navigate("personal-info")}
          >Back</Button>
        <Button type="submit" className="next-button">
          Next
        </Button>
  
       </div>
      </form>
    </div>
  );
}

export default EducationInfo;
