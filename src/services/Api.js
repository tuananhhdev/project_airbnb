import { API } from "./configSer";
export const axiosClient = {
  // Room Api
  // room by location
  getRoomByLocation: (maViTri) =>
    API.get(`/api/phong-thue/lay-phong-theo-vi-tri?maViTri=${maViTri}`),

  //  room details
  getRoomDetails: (id) => API.get(`/api/phong-thue?id=${id}`),

  // list room
  getListRoom: () => API.get(`/api/phong-thue`),

  // delete room
  deleteRoom: (roomId) => API.delete(`/api/phong-thue/${roomId}`),

  // update room
  updateRoom: (roomId) => API.put(`/api/phong-thue/${roomId}`),

  // booking room
  bookingRoom: () => API.get(`/api/dat-phong`),

  //  list location
  getListLocation: () => API.get(`/api/vi-tri`),

  // Auth Api
  // sign in
  signin: (userInfo) => API.post(`/api/auth/signin`, userInfo),

  // sign up
  // signup: () => API.post(`/api/auth/signin`),
};
