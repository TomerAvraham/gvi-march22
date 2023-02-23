import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import messageReducer from "./slices/messageSlice";
import userReducer from "./slices/userSlice";

export const reducer = combineReducers({
  auth: authReducer,
  messages: messageReducer,
  user: userReducer,
});
