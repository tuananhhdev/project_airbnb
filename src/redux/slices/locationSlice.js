import { createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../services/RoomServ";

const initialState = {
  listLocation: [],
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    getListLocationAction: (state, action) => {
      state.listLocation = action.payload;
    },
  },
});

export const { getListLocationAction } = locationSlice.actions;

export default locationSlice.reducer;

export const getListLocation = () => {
  return async (dispatch) => {
    try {
      const result = await axiosClient.getListLocation();
      console.log(result);
      const action = getListLocationAction(result.data.content);
      dispatch(action);
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};
