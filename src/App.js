import { Route, Routes } from "react-router-dom";
import UserTemplates from "./templates/UserTemplates/UserTemplates";
import HomePage from "./pages/HomePage/HomePage";
import Page404 from "./pages/Page404/Page404";
import Register from "./pages/Register/Register";
import RoomLocation from "./pages/RoomLocation/RoomLocation";
import RoomDetail from "./pages/RoomDetail/RoomDetail";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import UserManage from "./templates/AdminTemplate/PageChild/UserManage/UserManage";
import UserInfoLocation from "./templates/AdminTemplate/PageChild/UserInfoLocation";
import RoomInfoManage from "./templates/AdminTemplate/PageChild/RoomInfoManage";
import AddUser from "./templates/AdminTemplate/PageChild/AddUser";
import BookingRoomManage from "./templates/AdminTemplate/PageChild/BookingRoomManage";
import Login from "./pages/Login/Login";
import TicketByUser from "./pages/TicketByUser/TicketByUser/TicketByUser";

function App() {
  return (
    <>
      <Routes>
        <Route element={<UserTemplates />} path="/">
          <Route element={<HomePage />} index />
          <Route element={<RoomDetail />} path="/room-details/:id" />
          <Route element={<RoomLocation />} path="room-by-city/:id" />
          <Route path="/tickets-by-user" element={<TicketByUser />} />
        </Route>

        <Route path="/admin" element={<AdminTemplate />}>
          <Route index element={<UserManage />} />
          <Route element={<AddUser />} path="/admin/add-user" />
          <Route
            element={<UserInfoLocation />}
            path="/admin/user-info-location"
          />
          <Route element={<RoomInfoManage />} path="/admin/room-info-manage" />
          <Route
            element={<BookingRoomManage />}
            path="/admin/booking-room-manage"
          />
        </Route>

        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
