import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../services/RoomServ";

const initialState = {
  listRoom: [],
  roomDetails: {},
  isLoading: false,
  error: null,
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // chi tiet phong
    builder

      .addCase(getDetailRoom.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDetailRoom.fulfilled, (state, action) => {
        state.isLoading = false;
        state.roomDetails = action.payload;
        state.error = null;
      })
      .addCase(getDetailRoom.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    // lay phong theo vi tri
    // builder.addCase(getListRoomByLocation.pending, (state) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(getListRoomByLocation.fulfilled, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.listRoom = payload;
    // });
    // builder.addCase(getListRoomByLocation.rejected, (state, { error }) => {
    //   state.isLoading = false;
    //   state.error = error.message;
    // });
  },
});

export default roomSlice.reducer;

export const getDetailRoom = createAsyncThunk(
  " room/getDetailsRoom",
  async (id) => {
    try {
      const response = await axiosClient.getRoomDetails(id);
      return response.data.content;
    } catch (error) {
      throw error;
    }
  }
);

export const getListRoomByLocation = createAsyncThunk(
  "room/getListRoomByLocation",
  async (maViTri) => {
    try {
      const listRoom = await axiosClient.getRoomByLocation(maViTri);
      return listRoom;
    } catch (error) {
      throw error;
    }
  }
);

export const booking = createAsyncThunk("room/booking", async (values) => {
  try {
    const result = await axiosClient.bookingRoom(values);
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
});
