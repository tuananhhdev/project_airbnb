// import { createSlice } from "@reduxjs/toolkit";
// import { userLocalStorage } from "../../utils/Local";
// import { add, addDays } from "date-fns";

// const initialState = {
//   user: userLocalStorage.get(),
//   locateAt: "",
//   dateRange: [
//     {
//       startDate: addDays(new Date(), 1),
//       endDate: addDays(new Date(), 8),
//       key: "selection",
//     },
//   ],
//   numPeople: 1,
// };

// const authSlices = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     setLogin: (state, actions) => {
//       state.user = actions.payload;
//     },
//     setLocatedAt: (state, action) => {
//       state.locateAt = action.payload;
//     },
//     setDateRange: (state, action) => {
//       state.dateRange = action.payload;
//     },
//     setNumPeop: (state, action) => {
//       state.numPeople = action.payload;
//     },
//   },
// });

// export const { setLogin, setNumPeop, setDateRange, setLocatedAt } =
//   authSlices.actions;

// export default authSlices.reducer;
