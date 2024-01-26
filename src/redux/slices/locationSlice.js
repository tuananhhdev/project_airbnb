import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listLocation: {},
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {},
});

export const {} = locationSlice.actions;

export default locationSlice.reducer;
