import { API } from "./configSer";

export const authAPI = {
  // signin
  signin: (values) => API.post("/api/auth/signin", values),

  // signup
  signup: (values) => API.post("/api/auth/signup", values),

  // get user info
  getUserInfo: (id) => API.get(`/api/users/${id}`),

  // update user
  updateUser: (values) => API.put(`/api/users/${values.id}`, values.values),

  // upload avatar
  uploadAvatar: (values) => {
    const formData = new FormData();
    for (const key in values) {
      formData.append(key, values[key]);
    }
    console.log(values);
    console.log(formData);
    API.post("/api/users/upload-avatar", formData);
  },
};
