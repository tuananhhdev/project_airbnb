import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper/modules";
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
    <div className="container mx-auto mt-8 mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mx-10">
        {room.slice(0, 12).map((room, index) => {
          return (
            <div key={index}>
              <NavLink
                key={room.id}
                className="roomLink"
                to={`/room-details/${room.id}`}>
                <Swiper
                  pagination={true}
                  cssMode={true}
                  loop={true}
                  navigation={true}
                  mousewheel={true}
                  keyboard={true}
                  modules={[Pagination, Navigation, Mousewheel, Keyboard]}
                  className="roomSwiper relative">
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
                  <button className="absolute top-3 right-3 z-50 ">
                    <i class="fa-solid fa-star text-xl text-yellow-500 hover:text-yellow-600 duration-500"></i>
                  </button>
                </Swiper>
                <div>
                  <p className="flex justify-between mt-2">
                    <span className="font-bold">{room.tenPhong}</span>
                  </p>
                  <p className="text-gray-500">
                    Ngày {randomNumber(1, 30)} - Ngày {randomNumber(1, 30)}{" "}
                    tháng {randomNumber(1, 12)}
                  </p>
                  <p className="mt-1">
                    <span className="font-bold">${randomNumber(99, 599)}</span>{" "}
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
