import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../../services/auth.service";
export const registerByPayload = createAsyncThunk(
  "register/registerByPayload",
  async (values) => {
    const response = await authService.register(
      values.email,
      values.password,
      values.passwordConfirmation,
      values.role,
      values.lastName,
      values.firstName
    );
    return response.data;
  }
);

const initialState = {
  isLoading: false,
  isRegister: false,
  isAuth: false,
  error: "",
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    clearErrorMessage: (state) => {
      state.error = "";
    },
  },
  extraReducers: {
    [registerByPayload.pending]: (state, action) => {
      state.isLoading = true;
      state.error = "";
      state.isRegister = false;
      state.isAuth = false;
    },
    [registerByPayload.rejected]: (state, action) => {
      state.isLoading = false;
      state.isRegister = false;
      state.isAuth = false;
      state.error = "missing information";
    },
    [registerByPayload.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = "";
      state.isRegister = true;
    },
  },
});

export const { clearErrorMessage } = registerSlice.actions;
export default registerSlice.reducer;
