import React from "react";
import "./keyskills.scss";
import { MultiSelect, Button } from "../../index";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addSkills } from "../../../store/slices/userDetailsSlice.js";
import { technologies } from "../../../constants/constants.js";

function Skills() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const skillsInfo = (data) => {
    console.log(data);
    dispatch(addSkills(data));
    navigate("/user-details/projects");
  };

  return (
    <div className="details__card">
      <span className="heading__container">
        <h1 className="card__heading">Key Skills</h1>
      </span>
      <form onSubmit={handleSubmit(skillsInfo)} className="details__form">
        <div className="form__row">
          <Controller
            name="skills"
            control={control}
            defaultValue={undefined}
            render={({ field }) => (
              <MultiSelect
                label="Skills"
                items={technologies}
                helperText={errors.skills ? errors.skills.message : null}
                {...field}
                {...register(`skills`, {
                  required: "Skills are required",
                })}
              />
            )}
          />
        </div>
        <div className="form__buttons">
          <span>
            <Button
              type="button"
              variant="outlined"
              onClick={() => navigate("/user-details/experience")}
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

export default Skills;
