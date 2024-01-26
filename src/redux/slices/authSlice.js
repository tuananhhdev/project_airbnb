import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  info: null,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.info = action.payload;
    },
    logout: (state) => {
      state = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
