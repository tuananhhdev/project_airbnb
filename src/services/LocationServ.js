import { API } from "./configSer";

export const locationAPI = {
  // search location
  searchLocation: () =>
    API.get("/api/vi-tri/phan-trang-tim-kiem?pageIndex=1&pageSize=10"),

  //  list location
  getListLocation: () => API.get(`/api/vi-tri`),

  // location by id
  getLocationById: (id) => API.get(`/api/vi-tri/${id}`),
};
