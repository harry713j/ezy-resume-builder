import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  template: "",
  details: {
    personalInfo: null,
    educationDetails: null,
    workExperience: [],
    skills: [],
    projects: [],
    achievements: [],
  },
};

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    selectTemplate: (state, action) => {
      state.template = action.payload;
    },
    addPersonalInfo: (state, action) => {
      state.details.personalInfo = { ...action.payload };
    },
    addEducationDetails: (state, action) => {
      state.details.educationDetails = { ...action.payload };
    },
    addWorkExperience: (state, action) => {
      state.details.workExperience = [...action.payload];
    },
    addSkills: (state, action) => {
      state.details.skills = [...action.payload];
    },
    addProjects: (state, action) => {
      state.details.projects = [...action.payload];
    },
    addAchievement: (state, action) => {
      state.details.projects = [...action.payload];
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
  selectTemplate,
} = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
