import { configureStore } from "@reduxjs/toolkit";

import LocationReducer from "./reducer/LocationReducer.js";
import AuthReducer from "./reducer/AuthReducer.js";
import { RoomReducer } from "./reducer/roomReducer.js";

export const store = configureStore({
  reducer: {
    RoomReducer,
  },
});
export default store;
