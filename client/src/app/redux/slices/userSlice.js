import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteUserById,
  addLikeToUserById,
} from "../../../services/user.service";

const initialState = {
  isLoading: false,
  error: false,
  message: "",
  userLikes: 0,
};

export const deleteOneUserById = createAsyncThunk(
  "/user/deleteOneUserById",
  async (values) => {
    const response = await deleteUserById(values);
    console.log(response);
    return response;
  }
);

export const addLikeToUser = createAsyncThunk(
  "/user/addLikeToUser",
  async (values) => {
    const response = await addLikeToUserById(values);
    console.log(response);
    return response;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [deleteUserById.pending]: (state, action) => {
      state.isLoading = true;
      state.error = false;
      state.message = "";
    },
    [deleteUserById.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.error;
      state.message = payload.message;
    },
    [deleteUserById.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.error;
      state.message = payload.message;
    },
    [addLikeToUserById.pending]: (state, action) => {
      state.isLoading = true;
      state.error = false;
      state.message = "";
    },
    [addLikeToUserById.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.error;
      state.message = payload.message;
    },
    [addLikeToUserById.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.error;
      state.message = payload.message;
      state.userLikes = payload.message;
    },
  },
});

export default userSlice.reducer;
