import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalInfo: null,
  educationDetails: null,
  workExperience: [],
  skills: [],
  projects: [],
  achievements: [],
};

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    addPersonalInfo: (state, action) => {
      state.personalInfo = { ...action.payload };
    },
    addEducationDetails: (state, action) => {
      state.educationDetails = { ...action.payload };
    },
    addWorkExperience: (state, action) => {
      state.workExperience = [...action.payload];
    },
    addSkills: (state, action) => {
      state.skills = [...action.payload];
    },
    addProjects: (state, action) => {
      state.projects = [...action.payload];
    },
    addAchievement: (state, action) => {
      state.projects = [...action.payload];
    },
  },
});

export const {
  addAchievement,
  addEducationDetails,
  addPersonalInfo,
  addProjects,
  addSkills,
  addWorkExperience,
} = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
