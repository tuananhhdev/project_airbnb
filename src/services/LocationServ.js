import { API } from "./configSer";

export const axiosClient = {
  // search location
  searchLocation: () =>
    API.get("/api/vi-tri/phan-trang-tim-kiem?pageIndex=1&pageSize=10"),

  //  list location
  getListLocation: () => API.get(`/api/vi-tri`),
};
