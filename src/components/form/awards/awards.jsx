import React from "react";
import "./awards.scss";
import { Input, Button, DatePicker, TextArea, IconButton } from "../../index";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAchievement } from "../../../store/slices/userDetailsSlice.js";
import { Add, DoubleArrow, Delete } from "@mui/icons-material";

function Awards() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      awards: [
        {
          organizationName: "",
          awardTitle: "",
          dateOfAcquisition: null,
          description: "",
        },
      ],
    },
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "awards",
  });

  const awardsInfo = (data) => {
    dispatch(addAchievement(data.awards));
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
        {fields.map((field, index) => (
          <section key={field.id} className="form__container">
            <div className="form__row">
              <Input
                label="Name of Organization"
                helperText={
                  errors.awards?.[index]?.organizationName?.message || null
                }
                {...register(`awards.${index}.organizationName`)}
              />
            </div>
            <div className="form__row">
              <Input
                label="Award Title"
                helperText={errors.awards?.[index]?.awardTitle?.message || null}
                {...register(`awards.${index}.awardTitle`)}
              />
              <Controller
                name={`awards.${index}.dateOfAcquisition`}
                control={control}
                render={({ field }) => (
                  <DatePicker
                    label="Date of Acquisition"
                    value={field.value}
                    onChange={field.onChange}
                    helperText={
                      errors.awards?.[index]?.dateOfAcquisition?.message || null
                    }
                  />
                )}
              />
            </div>
            <div className="form__row">
              <TextArea
                label="Description"
                helperText={
                  errors.awards?.[index]?.description?.message || null
                }
                {...register(`awards.${index}.description`)}
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
              organizationName: "",
              awardTitle: "",
              dateOfAcquisition: null,
              description: "",
            });
          }}
        >
          Add more achievements
        </Button>
        <div className="form__buttons">
          {/* <span>
            <Button
              type="button"
              variant="outlined"
              onClick={() => navigate("/user-details/projects")}
            >
              Back
            </Button>
          </span> */}
          <span>
            <Button type="submit">Preview</Button>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Awards;
