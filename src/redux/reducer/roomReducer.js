import {
  LAY_DANH_SACH_PHONG,
  SET_CHI_TIET_PHONG,
  LAY_DANH_SACH_PHONG_THEO_VI_TRI,
} from "../types/roomTypes";

const stateDefault = {
  listRoom: [],
  roomDetail: {},
  roomByLocation: {},
};

export const RoomReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_CHI_TIET_PHONG: {
      state.roomDetail = action.roomDetail;
      return { ...state };
    }
    case LAY_DANH_SACH_PHONG: {
      state.listRoom = action.listRoom;
      return { ...state };
    }
    case LAY_DANH_SACH_PHONG_THEO_VI_TRI: {
      state.roomByLocation = action.roomByLocation;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default RoomReducer.reducer;
