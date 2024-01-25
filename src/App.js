import { Route, Routes } from "react-router-dom";
import UserTemplates from "./templates/UserTemplates/UserTemplates";
import HomePage from "./pages/HomePage/HomePage";
import Page404 from "./pages/Page404/Page404";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ProductDetail from "./pages/RoomDetail/RoomDetail";
import RoomLocation from "./pages/RoomLocation/RoomLocation";
import RoomDetail from "./pages/RoomDetail/RoomDetail";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import MovieManager from "./templates/AdminTemplate/PageChild/UserInfoLocation";
import UserManage from "./templates/AdminTemplate/PageChild/UserManage";
import AddMovie from "./templates/AdminTemplate/PageChild/RoomInfoManage";
import UserInfoLocation from "./templates/AdminTemplate/PageChild/UserInfoLocation";
import RoomInfoManage from "./templates/AdminTemplate/PageChild/RoomInfoManage";
import AddUser from "./templates/AdminTemplate/PageChild/AddUser";

function App() {
  return (
    <>
      <Routes>
        <Route element={<UserTemplates />} path="/">
          <Route element={<HomePage />} index />
          <Route element={<RoomDetail />} path="/room-detail/:id" />

          <Route element={<RoomLocation />} path="/room-location/:id" />
        </Route>
        <Route element={<Login />} path="/dangnhap" />
        <Route element={<Register />} path="/dangky" />
        {/* <Route element={<Page404 />} path="*" /> */}

        <Route path="/admin" element={<AdminTemplate />}>
          <Route index element={<UserManage />} />
          <Route element={<AddUser />} path="/admin/add-user" />
          <Route element={<UserInfoLocation />} path="user-info-location" />
          <Route element={<RoomInfoManage />} path="room-info-manage" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
