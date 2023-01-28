import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../../services/auth.service";
import { setLocalStorageValue } from "../../../utils/localStorage.util";

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
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearErrorMessage: (state) => {
      state.error = "";
    },
    setIsAuth: (state) => {
      state.isAuth = !state.isAuth;
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
      state.user = payload;

      setLocalStorageValue("ac_token", payload.jwt_ac_token);
    },
  },
});

export const { clearErrorMessage,setIsAuth } = authSlice.actions;
export default authSlice.reducer;
