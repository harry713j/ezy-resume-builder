// import React from "react";
// import "./keyskills.scss";
// import { Input, Button } from "../../index"; 
// import { useForm, useFieldArray } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addSkills } from "../../../store/slices/userDetailsSlice.js"; 

// function Skills() {
//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { fields, append } = useFieldArray({
//     control,
//     name: "skills"
//   });

//   const skillsInfo = (data) => {
//     console.log(data);
//     dispatch(addSkills(data));
//     navigate("next-step"); 
//   };

//   return (
//     <div className="details__card">
//       <span className="heading__container">
//         <h1 className="card__heading">Key Skills</h1>
//         {/* <button className="skip-button" onClick={() => navigate("next-step")}>Skip</button> */}
//       </span>
//       <form onSubmit={handleSubmit(skillsInfo)} className="details__form">
//         {fields.map((item, index) => (
//           <div className="form__row" key={item.id}>
//             <Input
//               className="full-width" 
//               label={`Skill ${index + 1}`}
//               defaultValue={item.skill}
//               helperText={errors.skills?.[index]?.skill ? errors.skills[index].skill.message : null}
//               {...register(`skills.${index}.skill`, { required: "Skill is required" })}
//             />
//           </div>
//         ))}
//         <button type="button" className="add-skill-button" onClick={() => append({ skill: "" })}>+ Add new</button>
//         <div className="form__buttons">
//           <Button
//             type="button"
//             className="back-button"
//             onClick={() => navigate("previous-step")}
//           >Back</Button>
//           <Button type="submit" className="next-button">
//             Next
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Skills;

import React from "react";
import "./keyskills.scss";
import { Input, Button } from "../../index"; 
import { useForm, useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addSkills } from "../../../store/slices/userDetailsSlice.js"; 

function Skills() {
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
    name: "skills"
  });

  // Initialize with two skill fields
  React.useEffect(() => {
    if (fields.length === 0) {
      append({ skill: "" });
      append({ skill: "" });
    }
  }, [append, fields.length]);

  const skillsInfo = (data) => {
    console.log(data);
    dispatch(addSkills(data));
    navigate("projects"); 
  };

  return (
    <div className="details__card">
      <span className="heading__container">
        <h1 className="card__heading">Key Skills</h1>
      </span>
      <form onSubmit={handleSubmit(skillsInfo)} className="details__form">
        {fields.map((item, index) => (
          <div className="form__row" key={item.id}>
            <Input
              className="half-width" 
              label={`Skill ${index + 1}`}
              defaultValue={item.skill}
              helperText={errors.skills?.[index]?.skill ? errors.skills[index].skill.message : null}
              {...register(`skills.${index}.skill`, { required: "Skill is required" })}
            />
            <Input
              className="half-width" 
              label={`Skill ${index + 1}`}
              defaultValue={item.skill}
              helperText={errors.skills?.[index]?.skill ? errors.skills[index].skill.message : null}
              {...register(`skills.${index}.skill`, { required: "Skill is required" })}
            />
          </div>
        ))}
        <button type="button" className="add-skill-button" onClick={() => append({ skill: "" })}>+ Add new</button>
        <div className="form__buttons">
          <Button
            type="button"
            className="back-button"
            onClick={() => navigate("experience")}
          >Back</Button>
          <Button type="submit" className="experience">
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Skills;

