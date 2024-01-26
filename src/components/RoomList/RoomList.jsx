import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
// import { layDanhSachPhong } from "../../redux/action/RoomAction";
import { axiosClient } from "../../services/Api";
// import { layDanhSachPhong } from "../../redux/action/RoomAction";
// import { Navigation } from "react-router-dom";
export default function RoomList() {
  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  // const listRoom = useSelector((state) => state.room.listRoom);
  // console.log({ listRoom });
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(layDanhSachPhong());
  // }, []);
  // const { listRoom } = useSelector((state) => state.RoomReducer);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const action = layDanhSachPhong();
  //   dispatch(action);
  // });
  const [room, setRoom] = useState([]);
  useEffect(() => {
    axiosClient
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
    <div className="container mx-auto mt-16 mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-10">
        {room.slice(0, 12).map((room, index) => {
          return (
            <div key={index}>
              <NavLink
                // key={room.id}
                className="roomLink"
                to={`/room-detail/${room.id}`}>
                <div
                  pagination={{
                    dynamicBullets: true,
                  }}
                  loop={true}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="roomSwiper relative">
                  <div className="w-full">
                    <img src={room.hinhAnh} alt="" />
                  </div>
                  <div className="w-full">
                    <img src={room.hinhAnh} alt="" />
                  </div>
                  {/* <div className="w-full">
                    <img src={room.hinhAnh} alt="" />
                  </div> */}
                  <button className="absolute top-3 right-3 z-30 ">
                    <i class="fa-sharp fa-regular fa-heart text-2xl hover:text-red-500 duration-500 cursor-pointer"></i>
                  </button>
                </div>
                <div>
                  <p className="flex justify-between mt-2">
                    <span className="font-bold">{room.tenPhong}</span>
                  </p>
                  <p className="text-gray-500">{randomNumber(2, 10000)} km</p>
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
