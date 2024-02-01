import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/authSlice";
import roomSlice from "./slices/roomSlice";
import locationSlice from "./slices/locationSlice";
import reviewSlice from "./slices/reviewSlice";
import authSlice from "./slices/authSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
    room: roomSlice,
    location: locationSlice,
    review: reviewSlice,
    auth: authSlice,
  },
});

export default store;
