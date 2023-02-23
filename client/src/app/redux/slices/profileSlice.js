import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {putUpdateInformationInUser} from "../../../services/user.service";
export const updateProfileByPayload = createAsyncThunk(
  "profile/updateByPayload",
  async (values) => {
    const response = await putUpdateInformationInUser(
      values.email,
      values.phoneNumber,
      values.expertise,
      values.github,
      values.instagram,
      values.facebook,
      values.lnkd,
      values.about,
      values.mentoring,
      values.startUp,
      values.lastName,
      values.firstName
    );
    return response.data;
  }
);

const initialState = {
  isLoading: false,
  isUpdate: false,
  error: "",
};

const updateSlice = createSlice({
  name: "update",
  initialState,
//   reducers: {
//     clearErrorMessage: (state) => {
//       state.error = "";
//     },
//   },
  extraReducers: {
    [updateProfileByPayload.pending]: (state, action) => {
      state.isLoading = true;
      state.error = "";
      state.isUpdate = false;
    },
    [updateProfileByPayload.rejected]: (state, action) => {
      state.isLoading = false;
      state.isUpdate = false;
      state.error = "somthing got wrong";
    },
    [updateProfileByPayload.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = "";
      state.isUpdate = true;
    },
  },
});

export default updateSlice.reducer;