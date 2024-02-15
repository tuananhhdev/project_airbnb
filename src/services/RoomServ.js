import { API } from "./configSer";
export const roomAPI = {
  // Room Api
  // room by location
  getRoomByLocation: (locationId) =>
    API.get(`/api/phong-thue/lay-phong-theo-vi-tri?maViTri=${locationId}`),

  //  room details
  getRoomDetails: (id) => API.get(`/api/phong-thue/${id}`),

  // list room
  getListRoom: (locationId) => API.get("/api/phong-thue", locationId),

  // delete room
  deleteRoom: (roomId) => API.delete(`/api/phong-thue/${roomId}`),

  // update room
  updateRoom: (roomId) => API.put(`/api/phong-thue/${roomId}`),

  // booking room
  bookingRoom: (values) => API.post("/api/dat-phong", values),

  // booking room by user
  bookingRoomByUser: ({ id }) =>
    API.get(`/api/dat-phong/lay-theo-nguoi-dung/${id}`),
};
