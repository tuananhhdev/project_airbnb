import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  index: null,
};

const activeSlice = createSlice({
  name: "active",
  initialState,
  reducers: {
    setActiveIndex: (state, action) => {
      state.index = action.payload;
    },
  },
});

export const { setActiveIndex } = activeSlice.actions;

export default activeSlice.reducer;
