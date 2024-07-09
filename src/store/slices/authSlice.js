import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authStatus: false,
  isLoading: true,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.authStatus = true;
      state.isLoading = false;
      state.userData = action.payload;
    },
    logout: (state) => {
      state.authStatus = false;
      state.isLoading = true;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
