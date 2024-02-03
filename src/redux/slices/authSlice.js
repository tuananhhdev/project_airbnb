import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../services/AuthServ";
import { userLocalStorage } from "../../utils/Local";
import { notification } from "antd";
import { roomAPI } from "../../services/RoomServ";
import { API } from "../../services/configSer";
import { ApiFilled } from "@ant-design/icons";
const initialState = {
  user: userLocalStorage.get(),
  userInfo: {},
  bookingRoom: [],
  comment: [],
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.user = action.payload;
    },
    infoUserAction: (state, { payload }) => {
      state.userInfo = payload;
    },
    removeLoginAction: (state) => {
      state.user = null;
    },
    commentAction: (state, action) => {
      state.comment = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerAuth.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(registerAuth.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(loginAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAuth.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(loginAuth.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(updateProfile.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getBookingRoom.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bookingRoom = action.payload;
        state.error = null;
      })
      .addCase(postComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.isLoading = false;

        console.log("Action Payload:", action.payload);

        if (action.payload) {
          state.comment = [...state.comments, action.payload];
        } else {
          console.error("postComment.fulfilled action payload is undefined");
        }
      })
      .addCase(postComment.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(editComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editComment.fulfilled, (state, action) => {
        state.isLoading = false;

        const editedComment = action.payload;
        const updatedComments = state.comment.map((comment) =>
          comment.id === editedComment.id ? editedComment : comment
        );
        state.comment = updatedComments;
      })
      .addCase(editComment.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(removeComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeComment.fulfilled, (state, action) => {
        state.isLoading = false;
        // Remove the comment from the state based on the ID
        const removedCommentId = action.payload;
        state.comment = state.comment.filter(
          (comment) => comment.id !== removedCommentId
        );
      })
      .addCase(removeComment.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.comment = action.payload;
      })
      .addCase(getComment.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { loginAction, removeLoginAction, infoUserAction } =
  authSlice.actions;

export default authSlice.reducer;

export const registerAuth = createAsyncThunk(
  "auth/registerAuth",
  async (values, { dispatch }) => {
    try {
      const response = await API.post("/api/auth-signup", values);
      if (response.status === 200) {
        const loginRes = await API.get("/api/auth/signin", {
          email: values.email,
          password: values.password,
        });
        dispatch(loginAction(loginRes.data.content.user));
        notification.success({ message: "Đăng ký tài khoản thành công!" });
        userLocalStorage.set(loginRes.data.content);
        window.location.reload();
        return loginRes.data.content.user;
      }
    } catch (error) {
      notification.error({ message: "Đăng ký tài khoản không thành công! " });
      throw error;
    }
  }
);

export const loginAuth = createAsyncThunk(
  "auth.loginAuth",
  async (values, { dispatch }) => {
    try {
      const response = await API.post("/api/auth/signin", values);
      if (response.status === 200) {
        dispatch(loginAction(response.data.content));
        userLocalStorage.set(response.data.content);
        notification.success({ message: "Đăng nhập thành công !" });
        setTimeout(() => {
          window.location.reload();
        }, 200);
        return response.data.content;
      }
    } catch (error) {
      notification.error({ message: error.response.data.content });
      throw error;
    }
  }
);

export const updateProfile = createAsyncThunk(
  "auth/updateProfile",
  async ({ values, id }, { dispatch }) => {
    try {
      const response = await API.put(`/api/users/${id}`, values);
      if (response.status === 200) {
        const dataUpdate = {
          token: userLocalStorage.get()?.token,
          user: response.data.content,
        };
        dispatch(loginAction(dataUpdate));
        userLocalStorage.set(dataUpdate);
        notification.success({
          message: "Cập nhật thông tin tài khoản thành công",
        });
        return response.data.content;
      }
    } catch (error) {
      notification.error({
        message:
          error.response.data.content || "Có lỗi xảy ra, vui lòng thử lại!",
      });
      throw error;
    }
  }
);

export const updateAvatar = createAsyncThunk(
  "auth/updateAvatar",
  async (formFile, { dispatch }) => {
    try {
      const formData = new FormData();
      formData.append("formFile", formFile);
      const response = await API.post("/api/users/upload-avatar", formData, {
        headers: {
          "Content-Type ": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        dispatch(loginAction(response.data.content));
        userLocalStorage.set(response.data.content);
        notification.success({
          message: "Cập nhật thông tin tài khoản thành công",
        });
        return response.data.content;
      }
    } catch (error) {
      notification.error({
        message:
          error.response?.data.content || "Có lỗi xảy ra, vui lòng thử lại!",
      });
      throw error;
    }
  }
);

export const getBookingRoom = createAsyncThunk(
  "auth/getBookingRoom",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await roomAPI.bookingRoomByUser({ id });
      bookingRoom({ id });
      console.log(response);
      return response.data.content;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const postComment = createAsyncThunk(
  "auth/postComment",
  async ({ dataComment }) => {
    try {
      const response = await API.post(`/api/binh-luan`, dataComment);
      if (response.status === 200) {
        const newComment = response.data.content;
        notification.success({
          message: response?.data.message || "Comment posted successfull",
        });
        return newComment;
      }
    } catch (error) {
      notification.error({
        message:
          error.response?.data.content ||
          "Error posting comment, please try again!",
      });
      throw error;
    }
  }
);

export const editComment = createAsyncThunk(
  "auth/editComment",
  async ({ id, dataComment }) => {
    try {
      const response = await API.put(`/api/binh-luan/${id}`, dataComment);
      console.log(response);
      if (response.status === 200) {
        const editedComment = response.data.content;
        notification.success({
          message: response?.data.message || "Comment edited successfully",
        });
        return editedComment;
      }
    } catch (error) {
      notification.error({
        message:
          error.response?.data.content ||
          "Error editing comment, please try again",
      });
      throw error;
    }
  }
);

export const removeComment = createAsyncThunk(
  "auth/removeComment",
  async (id) => {
    try {
      const response = await API.delete(`/api/binh-luan/${id}`);
      if (response.status === 200) {
        notification.success({
          message: response?.data.message || "Comment deleted successfully",
        });
        return id;
      }
    } catch (error) {
      notification.error({
        message:
          error.response?.data.content ||
          "Error delete comment, please try again!",
      });
      throw error;
    }
  }
);

export const getComment = createAsyncThunk(
  "auth/getComment",
  async (maPhong) => {
    try {
      const response = await API.get(
        `/api/binh-luan/lay-binh-luan-theo-phong/${maPhong}`
      );
      if (response.status === 200) {
        const comments = response.data.content;
        return comments;
      }
    } catch (error) {
      notification.error({
        message:
          error.response?.data.content ||
          "Error getting comment, please try again!",
      });
      throw error;
    }
  }
);
