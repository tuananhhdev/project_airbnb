import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../services/AuthServ";
import axios from "axios";

const initialState = {
  user: null || JSON.parse(localStorage.getItem("user")),
  isLoading: false,
  error: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeUser: (state, { payload }) => {
      state.user = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(signin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signin.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      if (payload) state.user = payload.user;
    });
    builder.addCase(signin.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
    builder.addCase(signup.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signup.fulfilled, (state, { payload }) => {
      state.isLoading = false;
    });
    builder.addCase(signup.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
    builder.addCase(getUserInfo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUserInfo.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
    });
    builder.addCase(getUserInfo.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
    builder.addCase(uploadAvatar.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(uploadAvatar.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
    });
    builder.addCase(uploadAvatar.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;

export const signin = createAsyncThunk("auth/login", async (values) => {
  try {
    const signinResult = await axiosClient.signin(values);
    if (signinResult.user) return signinResult;
    else return null;
  } catch (error) {
    throw error;
  }
});

export const signup = createAsyncThunk("auth/signup", async (values) => {
  try {
    const result = await axiosClient.signup(values);
    return result;
  } catch (error) {
    throw error;
  }
});

export const getUserInfo = createAsyncThunk("auth/getUserInfo", async (id) => {
  try {
    const user = await axiosClient.getUserInfo(id);
    return user;
  } catch (error) {
    throw error;
  }
});

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (values) => {
    try {
      const result = await axiosClient.updateUser(values);
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  }
);

export const uploadAvatar = createAsyncThunk(
  "auth/uploadAvatar",
  async (values) => {
    console.log(values);
    try {
      const result = await axiosClient.uploadAvatar(values);
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  }
);
