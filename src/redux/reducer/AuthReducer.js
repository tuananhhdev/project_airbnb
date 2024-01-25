// import { USER_LOGIN } from "../../utils/config";
// import { LOGIN_ACTION } from "../types/authType";

// let user = {};
// if (localStorage.getItem(USER_LOGIN)) {
//   user = JSON.parse(localStorage.getItem(USER_LOGIN));
// }
// const stateDefault = {
//   userLogin: user,
// };

// export const AuthReducer = (state = stateDefault, action) => {
//   switch (action.type) {
//     case LOGIN_ACTION: {
//       const { userLogin } = action;
//       localStorage.setItem(USER_LOGIN, JSON.stringify(userLogin));

//       return { ...state, userLogin: userLogin };
//     }
//     default:
//       return { ...state };
//   }
// };
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../services/Api";
// import {
//   LoginResult,
//   LoginValues,
//   RegisterValues,
//   UpdateUser,
//   UserUpdateValues,
//   UserValues,
// } from "Interface/auth";
// import authAPI from "Services/authAPI";

// interface State {
//     user: UserValues | null;
//     isLoading: boolean;
//     error?: string;
// }
const initialState = {
  user: null || JSON.parse(localStorage.getItem("user")),
  isLoading: false,
  error: undefined,
};
export const login = createAsyncThunk("auth/login", async (values) => {
  try {
    const loginResult = await axiosClient.signin(values);
    if (loginResult.user) return loginResult;
    else return null;
  } catch (error) {
    throw error;
  }
});
// export const registerUser = createAsyncThunk(
//   "auth/registerUser",
//   async (values: RegisterValues) => {
//     try {
//       const result = await authAPI.registerUser(values);
//       return result;
//     } catch (error) {
//       throw error;
//     }
//   }
// );

// export const getUserDetail = createAsyncThunk(
//   "auth/getUserDetail",
//   async (id: string) => {
//     try {
//       const user = await authAPI.getUserDetail(id);
//       return user;
//     } catch (error) {
//       throw error;
//     }
//   }
// );

// export const updateUser = createAsyncThunk(
//   "auth/updateUser",
//   async (values: UpdateUser) => {
//     try {
//       const result = await authAPI.updateUser(values);
//       console.log(result);
//       return result;
//     } catch (error) {
//       throw error;
//     }
//   }
// );
// export const uploadAvatar = createAsyncThunk(
//   "auth/uploadAvatar",
//   async (values: any) => {
//     console.log(values);
//     try {
//       const result = await authAPI.uploadAvatar(values);
//       console.log(result);
//       return result;
//     } catch (error) {
//       throw error;
//     }
//   }
// );
const AuthReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    removeUser: (state, { payload }) => {
      state.user = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      if (payload) state.user = payload.user;
    });
    builder.addCase(login.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
    // builder.addCase(registerUser.pending, (state) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(registerUser.fulfilled, (state, { payload }) => {
    //   state.isLoading = false;
    // });
    // builder.addCase(registerUser.rejected, (state, { error }) => {
    //   state.isLoading = false;
    //   state.error = error.message;
    // });
    // builder.addCase(getUserDetail.pending, (state) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(getUserDetail.fulfilled, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.user = payload;
    // });
    // builder.addCase(getUserDetail.rejected, (state, { error }) => {
    //   state.isLoading = false;
    //   state.error = error.message;
    // });
    // builder.addCase(uploadAvatar.pending, (state) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(uploadAvatar.fulfilled, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.user = payload;
    // });
    // builder.addCase(uploadAvatar.rejected, (state, { error }) => {
    //   state.isLoading = false;
    //   state.error = error.message;
    // });
  },
});

// export const { removeUser } = authReducer.actions;

export default AuthReducer.reducer;
