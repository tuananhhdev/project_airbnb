import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/authSlice";
import roomSlice from "./slices/roomSlice";
import locationSlice from "./slices/locationSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
    room: roomSlice,
    location: locationSlice,
  },
});

export default store;
