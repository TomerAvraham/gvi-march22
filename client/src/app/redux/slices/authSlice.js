import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../../services/auth.service";

export const loginByEmailAndPassword = createAsyncThunk(
  "auth/loginByEmailAndPassword",
  async (values) => {
    const response = await authService.login(values.email, values.password);
    return response.data;
  }
);

const initialState = {
  isLoading: false,
  isAuth: false,
  error: "",
  accessToken: localStorage.getItem("ac_token") || "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearErrorMessage: (state) => {
      state.error = "";
    },
  },
  extraReducers: {
    [loginByEmailAndPassword.pending]: (state, action) => {
      state.isLoading = true;
      state.error = "";
      state.isAuth = false;
    },
    [loginByEmailAndPassword.rejected]: (state, action) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = "Email or Password Invalid.";
    },
    [loginByEmailAndPassword.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = "";
      state.isAuth = true;
      state.accessToken = payload.accessToken;

      localStorage.setItem("ac_token", payload.accessToken);
    },
  },
});

export const { clearErrorMessage } = authSlice.actions;
export default authSlice.reducer;
