import { configureStore } from "@reduxjs/toolkit";
import roomSlice from "./slices/roomSlice";
import locationSlice from "./slices/locationSlice";
import reviewSlice from "./slices/reviewSlice";
import authSlice from "./slices/authSlice";
import authSlices from "./slices/authSlices";
// import authReducer from "./reducer/authReducer";
import loadingSlice from "./slices/loadingSlice";
import modalSlice from "./slices/modalSlice";
import activeSlice from "./slices/activeSlice";
import popupSlice from "./slices/popupSlice";
import skeletonSlice from "./slices/skeletonSlice";
const store = configureStore({
  reducer: {
    room: roomSlice,
    location: locationSlice,
    review: reviewSlice,
    auth: authSlice,
    loading: loadingSlice,
    modal: modalSlice,
    active: activeSlice,
    popup: popupSlice,
    skeleton: skeletonSlice,
    // auth: authReducer,
  },
});

export default store;
