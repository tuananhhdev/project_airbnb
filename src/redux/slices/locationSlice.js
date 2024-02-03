import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient, locationAPI } from "../../services/LocationServ";

const initialState = {
  listLocation: [],
  isLoading: false,
  error: undefined,
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListLocation.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getListLocation.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.listLocation = payload;
    });
    builder.addCase(getListLocation.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
  },
});

export default locationSlice.reducer;

export const getListLocation = createAsyncThunk(
  "location/getListLocation",
  async () => {
    try {
      const listLocation = await locationAPI.getListLocation();
      return listLocation;
    } catch (error) {
      throw error;
    }
  }
);
