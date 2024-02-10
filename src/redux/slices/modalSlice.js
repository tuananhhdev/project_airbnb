import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { openModal } = modalSlice.actions;

export default modalSlice.reducer;
