import { API } from "./configSer";

export const axiosClient = {
  // lay binh luan theo phong
  getReviewByRooms: (maPhong) =>
    API.get(`/api/binh-luan/lay-binh-luan-theo-phong/${maPhong}`),
};
