import { API } from "./configSer";
import axios from "axios";
export const listAPI = {
  // login
  login: (data) => API.post("/api/auth/signin", data),

  // register
  register: () => API.post("/api/auth/signup"),

  // search location
  searchLocation: () => API.get("/api/vi-tri"),

  // page location
  pageLocation: () => API.get("/api/vi-tri/phan-trang-tim-kiem?pageIndex=3&pageSize=1"),

  // get room location
  getRoomLocation: () => API.get("/api/phong-thue/lay-phong-theo-vi-tri"),
};
