import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";

export const reducer = combineReducers({
  auth: authReducer,
});
