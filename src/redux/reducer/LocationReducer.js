// import { createSlice } from "@reduxjs/toolkit";
// import { string } from "yup";
// import { getListLocation } from "../action/LocationAction";

// const initialState = {
//   listLocation: [],
//   isLoading: false,
//   errors: undefined,
// };

// const LocationReducer = createSlice({
//   name: "location",
//   initialState,
//   reducers: {},
//   extraReducers(builder) {
//     builder.addCase(getListLocation.pending, (state) => {
//       state.isLoading = true;
//     });
//     builder.addCase(getListLocation.fulfilled, (state, { payload }) => {
//       state.isLoading = false;
//       state.listLocation = payload;
//     });
//     builder.addCase(getListLocation.rejected, (state, { error }) => {
//       state.isLoading = false;
//       state.error = error.message;
//     });
//   },
// });

// // export const {} = LocationReducer.actions;

// export default LocationReducer.reducer;
