import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "./RoomList.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { axiosClient, roomAPI } from "../../services/RoomServ";
export default function RoomList() {
  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const [room, setRoom] = useState([]);
  useEffect(() => {
    roomAPI
      .getListRoom()
      .then((res) => {
        console.log(res);
        setRoom(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="box container mx-auto mt-8 mb-16">
      <div
        // {/*
        //  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mx-10" */}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-10">
        {room.slice(0, 12).map((room, index) => {
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
                  <SwiperSlide className="pics w-full">
                    <img
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
                    Ngày {randomNumber(1, 30)} - Ngày {randomNumber(1, 30)}{" "}
                    tháng {randomNumber(1, 12)}
                  </p>
                  <p className="mt-1">
                    <span className="room_cost font-bold text-lg">${randomNumber(99, 599)}</span>{" "}
                    đêm
                  </p>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}
