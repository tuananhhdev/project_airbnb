import { axiosClient } from "../../services/Api";
import {
  LAY_DANH_SACH_PHONG,
  LAY_DANH_SACH_PHONG_THEO_VI_TRI,
  SET_CHI_TIET_PHONG,
} from "../types/roomTypes";

export const layThongTinPhong = (id) => {
  return async (dispatch) => {
    try {
      const result = await axiosClient.getRoomDetails(id);
      console.log("result", result);
      dispatch({
        type: SET_CHI_TIET_PHONG,
        roomDetail: result.data.content,
      });
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};

export const layDanhSachPhong = () => {
  return async (dispatch) => {
    try {
      const result = await axiosClient.getListRoom();
      console.log("result", result);
      dispatch({
        type: LAY_DANH_SACH_PHONG,
        listRoom: result.data.content,
      });
    } catch (error) {
      console.log("error", error.response?.data);
    }
  };
};

export const getRoomByLocation = (maViTri) => {
  return async (dispatch) => {
    try {
      const result = await axiosClient.getRoomByLocation(maViTri);
      console.log("result", result);
      dispatch({
        type: LAY_DANH_SACH_PHONG_THEO_VI_TRI,
        roomByLocation: result.data.content,
      });
    } catch (err) {
      console.log("error", error.response?.data);
    }
  };
};
