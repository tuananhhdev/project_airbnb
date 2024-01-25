import { axiosClient } from "../../services/Api";
import { LOGIN_ACTION } from "../types/authType";

export const loginAction = (userInfo) => {
  return async (dispatch) => {
    try {
      const result = await axiosClient.signin(userInfo);
      if (result.data.statusCode === 200) {
        dispatch({
          type: LOGIN_ACTION,
          userInfo: result.data.content,
        });
        console.log('result', result);
      }
    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};
