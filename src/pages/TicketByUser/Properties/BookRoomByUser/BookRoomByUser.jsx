import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ModalUpdateProfile from "../ModalUpdateProfile";
import ModalShowProfile from "../ModalShowProfile";
import { roomAPI } from "../../../../services/RoomServ";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "./BookRoomByUser.css";
const BookRoomByUser = () => {
  const [bookedRoom, setBookedRoom] = useState([]);
  useEffect(() => {
    roomAPI
      .getListRoom()
      .then((res) => {
        setBookedRoom(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  return (
    <>
      <div className="box ml-5 space-y-3 max-w-md">
        <p className="text-3xl font-semibold">Xin chào, tôi là Tuấn Anh </p>
        <p className="text-gray-500">Bắt đầu tham gia vào 2021</p>
        <ModalUpdateProfile />
        <ModalShowProfile />
        <br />
        <p className="booked_room text-2xl font-bold pb-10">Phòng đã thuê</p>
        {bookedRoom.slice(0, 5).map((room, index) => {
          return (
            <div key={index}>
              <NavLink
                key={room.id}
                className="roomLink hover:text-black "
                to={`/room-details/${room.id}`}>
                <Swiper
                  pagination={{
                    dynamicBullets: true,
                  }}
                  loop={true}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="roomSwiper relative">
                  <SwiperSlide className=" w-full">
                    <img
                      src={room.hinhAnh}
                      alt=""
                      style={{
                        width: "450px",
                        height: "278px",
                        objectFit: "cover",
                      }}
                    />
                  </SwiperSlide>
                  <SwiperSlide className="w-full">
                    <img
                      className=""
                      src={room.hinhAnh}
                      alt=""
                      style={{
                        width: "342px",
                        height: "278px",
                        objectFit: "cover",
                      }}
                    />
                  </SwiperSlide>
                  <SwiperSlide className="w-full">
                    <img
                      className=""
                      src={room.hinhAnh}
                      alt=""
                      style={{
                        width: "342px",
                        height: "278px",
                        objectFit: "cover",
                      }}
                    />
                  </SwiperSlide>
                  <button className="absolute top-3 right-3 z-30">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        fill: "rgba(0, 0, 0, 0.5)",
                        height: "24px",
                        width: "24px",
                        stroke: "#fff",
                        strokeWidth: 2,
                        overflow: "hidden",
                      }}>
                      <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
                    </svg>
                  </button>
                </Swiper>
                <div>
                  <p className="flex justify-between mt-2">
                    <span className="room_name font-bold text-lg">{room.tenPhong}</span>
                  </p>
                  <p className="room_date text-gray-500">
                    Ngày đến - 25/10/2022
                  </p>
                  <p className="room_date text-gray-500 pb-10
                  ">
                    Ngày đi - 30/11/2022
                  </p>
                
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BookRoomByUser;
