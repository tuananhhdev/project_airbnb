import { createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../services/Api";

const initialState = {
  listRoom: [],
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    getDetailsRoomAction: (state, action) => {
      state.listRoom = action.payload;
    },
  },
});

export const { getDetailsRoomAction } = roomSlice.actions;

export default roomSlice.reducer;

export const getDetailRoom = (id) => {
  return async (dispatch) => {
    try {
      const result = await axiosClient.getRoomDetails(id);
      console.log(result);
      const action = getDetailsRoomAction(result.data.content);
      dispatch(action);
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};
