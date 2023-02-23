import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteUserById } from "../../../services/user.service";

const initialState = {
  isLoading: false,
  error: false,
  message: "",
};

export const deleteOneUserById = createAsyncThunk(
  "/message/allConversations",
  async (values) => {
    const response = await deleteUserById(values);
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
  },
});

export default userSlice.reducer;
