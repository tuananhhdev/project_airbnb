import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modal: null,
  },
  reducers: {
    setModal: (state, action) => {
      const { modal } = action.payload;
      state.modal = modal;
    },
    clearModal: (state) => {
      state.modal = null;
    },
  },
});

export const { setModal, clearModal } = modalSlice.actions;

export default modalSlice.reducer;
