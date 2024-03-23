import { createSlice } from "@reduxjs/toolkit";

import { userLocalStorage } from "../../utils/Local";

const initialState = {
  user: userLocalStorage.get(),
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = authSlice.actions;

export default authSlice.reducer;
