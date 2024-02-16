import React, { useEffect, useState } from "react";
import { roomAPI } from "../../../services/RoomServ";
import moment from "moment";
import "moment/locale/vi";
import { NavLink } from "react-router-dom";
import { MODAL_NAME, useModal } from "../../../hook/useModal";
import ModalUpdateProfile from "./ModalUpdateProfile";
import ModalShowProfile from "./ModalShowProfile";

export default function BookRoomByUser({ user }) {
  const modal = useModal();
  const [bookList, setBookList] = useState(null);
  const [roomList, setRoomList] = useState(null);
  const handleOpenModalUpdate = () => {
    modal.open(MODAL_NAME.EDIT_PROFILE);
  };
  useEffect(() => {
    roomAPI
      .bookingRoom()
      .then((res) => {
        const list = res.data.content.filter(
          (item) => item.maNguoiDung === user.id
        );
        setBookList(list);
      })
      .catch((err) => {
        console.log(err);
      });
    roomAPI
      .getListRoom()
      .then((res) => {
        const list = res.data.content;
        setRoomList(list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  bookList?.forEach((booking) => {
    const room = roomList?.filter((room) => room.id === booking.maPhong);
    booking.roomDetails = room ? room[0] : null;
  });

  const renderBooking = () => {
    return bookList?.map((item) => {
      const Ngay = () => {
        const ngayDen = moment(item.ngayDen).localeData("vi");
        const ngayDi = moment(item.ngayDi).localeData("vi");
        if (
          ngayDen.year() == ngayDi.year() &&
          ngayDen.month() == ngayDi.month()
        ) {
          return (
            <p>{`${ngayDen.format("DD")}-${ngayDi.format(
              "DD"
            )} ${ngayDen.format("MMM")}, ${ngayDen.format("YYYY")}`}</p>
          );
        } else {
          return (
            <>
              <p>Ngày đến: {moment(item.ngayDen).format("DD/MM/YYYY")}</p>
              <p>Ngày đi: {moment(item.ngayDi).format("DD/MM/YYYY")}</p>
            </>
          );
        }
      };
      return (
        <div className="flex space-x-5" key={item.maPhong}>
          <NavLink to={`/room-details/${item.id}`}>
            <img
              src={item.roomDetails?.hinhAnh}
              alt=""
              className="rounded object-cover"
              style={{ width: 100, height: 100, maxWidth: "unset" }}
            />
          </NavLink>
          <div>
            <NavLink to={`/room-details/${item.maPhong}`}>
              <b>{item.roomDetails?.tenPhong}</b>
            </NavLink>
            <Ngay />
          </div>
        </div>
      );
    });
  };

  return (
    <div className="ml-5 space-y-3 max-w-md">
      <p className="text-3xl font-semibold">Xin chào, tôi là</p>
      <p className="text-gray-500">Bắt đầu tham gia vào 2021</p>
      <ModalUpdateProfile />
      <ModalShowProfile />
      <br />
      <p className=" text-2xl font-bold">Phòng đã thuê</p>
      {renderBooking()}
    </div>
  );
}
