import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import messageReducer from "./slices/messageSlice";

export const reducer = combineReducers({
  auth: authReducer,
  messages: messageReducer,
});
