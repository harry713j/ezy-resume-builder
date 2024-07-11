import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import userDetailsSlice from "./slices/userDetailsSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    userDetails: userDetailsSlice,
  },
});

export default store;
