import { configureStore } from "@reduxjs/toolkit";
import roomSlice from "./slices/roomSlice";
import locationSlice from "./slices/locationSlice";
import reviewSlice from "./slices/reviewSlice";
import authSlice from "./slices/authSlice";
const store = configureStore({
  reducer: {
    room: roomSlice,
    location: locationSlice,
    review: reviewSlice,
    auth: authSlice,
  },
});

export default store;
