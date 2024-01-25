import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation, useParams, NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { axiosClient } from "../../services/Api";
const RoomLocation = () => {
  // const roomByLocation = useSelector(
  //   (state) => state.RoomReducer.roomByLocation
  // );
  const [location, setLocation] = useState([]);
  const { maViTri } = useParams;
  useEffect(() => {
    axiosClient
      .getRoomByLocation(maViTri)
      .then((res) => {
        console.log(res);
        setLocation(res.data.content);
      })
      .catch((err) => console.log(err));
  });
  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  return (
    <div>
      <div className="flex flex-wrap justify-between items-center py-5 ml-4">
        <span className="font-semibold">Hơn 1.000 chổ ở</span>
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 flex flex-wrap justify-center items-center">
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              height: 16,
              width: 16,
              fill: "currentcolor",
            }}>
            <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
          </svg>
          <span>Bộ lọc</span>
        </button>
      </div>
      {/* {isLoading ? ( */}
      {/* //   <ReactLoading className="mx-auto" type="bubbles" color="#F43F5E" /> */}
      {/* // ) : ( */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ml-4">
        {location.map((item, index) => {
          return (
            <div key={index}>
              <NavLink
                key={item._id}
                className="roomLink"
                to={`/roomdetail/${item._id}`}>
                <Swiper
                  pagination={{
                    dynamicBullets: true,
                  }}
                  loop={true}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="roomSwiper relative">
                  <SwiperSlide className="w-full">
                    <img src={item.hinhAnh} />
                  </SwiperSlide>
                  <SwiperSlide className="w-full">
                    <img src={item.hinhAnh} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="w-full">
                    <img src={item.hinhAnh} alt="" />
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
                <div className="overflow-hidden">
                  <p className="flex justify-between mt-2">
                    <span className="font-bold  text-ellipsis overflow-hidden whitespace-nowrap">
                      {item.tenPhong}
                    </span>
                    <span>
                      {/* <i className="fa fa-star"></i> {createRandomStar(1, 5)} */}
                    </span>
                  </p>
                  <p className="text-gray-500 text-ellipsis overflow-hidden whitespace-nowrap">
                    {item.moTa}
                  </p>
                  <p className="text-gray-500">
                    Ngày {randomNumber(1, 31)} - Ngày {randomNumber(1, 31)}{" "}
                    tháng {randomNumber(1, 12)}
                  </p>
                  <p className="mt-1">
                    <span className="font-bold">{item.giaTien} VNĐ</span> đêm
                  </p>
                </div>
              </NavLink>
            </div>
          );
          <div className="h-screen w-full hidden md:block sticky top-28">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15739732.907271802!2d96.86701116987972!3d15.607230160501059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31157a4d736a1e5f%3A0xb03bb0c9e2fe62be!2zVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1661359870280!5m2!1svi!2s"
              width={"100%"}
              height={"100%"}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>;
        })}
      </div>
      {/* // )} */}
    </div>
  );
};

export default RoomLocation;
