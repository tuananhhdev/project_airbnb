import { API } from "./configSer";

export const reviewAPI = {
  // lay binh luan theo phong
  getReviewByRooms: () =>
    API.get(`/api/binh-luan/lay-binh-luan-theo-phong/7`),
};
