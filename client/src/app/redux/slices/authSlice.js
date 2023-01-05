import { createSlice } from "@reduxjs/toolkit";
import authService from "../../../services/auth.service";

const initialState = {
  // isLoading: false,
  isAuth: false,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: async (state, { payload }) => {
      try {
        // state.isLoading = true;
        const response = await authService.login(
          payload.email,
          payload.password
        );
        console.log(response);
        state.isAuth = true;
      } catch (error) {
        state.isAuth = false;
        state.error = "Email or password incorrect";
      }
      // state.isLoading = false;
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
