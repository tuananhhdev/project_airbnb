import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient, roomAPI } from "../../services/RoomServ";

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

    // lay danh sach phong
    builder.addCase(getListRoom.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getListRoom.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.listRoom = payload;
    });
    builder.addCase(getListRoom.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });

    // lay phong theo ma vi tri
    builder.addCase(getRoomByLocation.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getRoomByLocation.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.listRoom = payload;
    });
    builder.addCase(getRoomByLocation.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
  },
});

export default roomSlice.reducer;

export const getDetailRoom = createAsyncThunk(
  " room/getDetailsRoom",
  async (id) => {
    try {
      const response = await roomAPI.getRoomDetails(id);
      return response.data.content;
    } catch (error) {
      throw error;
    }
  }
);

export const getRoomByLocation = createAsyncThunk(
  "room/getRoomByLocation",
  async (locationId) => {
    try {
      const listRoom = await roomAPI.getListRoom(locationId);
      return listRoom;
    } catch (error) {
      throw error;
    }
  }
);

export const booking = createAsyncThunk("room/booking", async (values) => {
  try {
    const result = await roomAPI.bookingRoom(values);
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
});

export const getListRoom = createAsyncThunk("room/getListRoom", async () => {
  try {
    const listRoom = await roomAPI.getListRoom();
    return listRoom;
  } catch (error) {
    throw error;
  }
});
