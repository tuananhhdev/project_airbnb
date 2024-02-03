import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient, reviewAPI } from "../../services/ReviewServ";

const initialState = {
  reviewList: [],
  isLoading: false,
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getReviewByRooms.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReviewByRooms.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviewList = action.payload;
      })
      .addCase(getReviewByRooms.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {} = reviewSlice.actions;

export default reviewSlice.reducer;

export const getReviewByRooms = createAsyncThunk(
  "review/getReviewByRooms",
  async () => {
    try {
      const response = await reviewAPI.getReviewByRooms();
      return response.data.content;
    } catch (error) {
      throw error;
    }
  }
);
