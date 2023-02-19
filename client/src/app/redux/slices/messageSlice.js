import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllConversations as connectionServiceGetAllConversations } from "../../../services/connection.service";

const initialState = {
  isLoading: false,
  error: "",
  conversations: [],
};

export const getAllConversations = createAsyncThunk(
  "/message/allConversations",
  async () => {
    const response = await connectionServiceGetAllConversations();
    return response;
  }
);

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllConversations.pending]: (state, action) => {
      state.isLoading = true;
      state.error = "";
      state.conversations = [];
    },
    [getAllConversations.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.conversations = [];
    },
    [getAllConversations.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.conversations = action.payload;
    },
  },
});

export default messageSlice.reducer;
