import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation, useParams, NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { axiosClient } from "../../services/RoomServ";
import ReverseTo from "../../utils/ReverseTo";
const RoomLocation = () => {
  const [room, setRoom] = useState([]);
  const [city, setCity] = useState([]);
  const { locationName } = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const location = await axiosClient.getListLocation();
        const layInfo = [...location.data.content];
        setCity(data[0].tinhThanh);
        const data = layInfo.filter(
          (item) => ReverseTo(item.tinhThanh) === locationName
        );
        const room = await axiosClient.getRoomByLocation(data[0].id);
        setRoom(room.data.content);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  return <div></div>;
};

export default RoomLocation;
