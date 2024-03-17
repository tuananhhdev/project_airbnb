import React, { useEffect, useState } from "react";
import { axiosClient, locationAPI } from "../../services/LocationServ";
import { Link } from "react-router-dom";
import { Card } from "antd";
import "animate.css";
import "./NearLocation.css";
const NearLocation = () => {
  const [city, setCity] = useState([]);
  useEffect(() => {
    locationAPI
      .searchLocation()
      .then((res) => {
        console.log(res);
        setCity(res.data.content.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const createRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  return (
    <>
      <div className="box1 container mt-6  ">
        <h1 className="title text-2xl font-semibold mb-3 ">
          Khám phá những điểm đến gần đây
        </h1>
        <div className="box2 container space-y-12  ">
          <div className="items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 wow animate__animated animate__fadeInUp ">
            {city.slice(0, 8).map((item, index) => {
              return (
                <div key={index}>
                  <Link to={`/room-location/${item.tinhThanh}`}>
                    <Card
                      hoverable
                      className="w-full flex items-center cursor-pointer duration-300  "
                      style={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;",
                      }}>
                      <div className=" flex items-center gap-3">
                        <img
                          className="w-14 h-14 rounded-lg object-cover"
                          src={item.hinhAnh}
                          alt=""
                        />
                        <div>
                          <h2 className="city font-bold">{item.tinhThanh}</h2>
                          <p>{createRandomNumber(1, 20)} giờ lái xe </p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default NearLocation;
