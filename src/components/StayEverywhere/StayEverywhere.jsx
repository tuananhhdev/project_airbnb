import React, { useEffect, useState } from "react";
import product1 from "../../assets/img/product_1.png.jfif";
import product2 from "../../assets/img/product_2.png.jfif";
import product3 from "../../assets/img/product_3.png.jfif";
import product4 from "../../assets/img/product_4.png";
import { NavLink, Link } from "react-router-dom";
import { axiosClient } from "../../services/LocationServ";
import { Card } from "antd";
import "./StayEverywhere.css";
const StayEverywhere = () => {
  const anywhereData = [
    {
      ten: "Toàn bộ nhà",
      viTri: "ho-chi-minh",
      hinhAnh: `${product1}`,
    },
    {
      ten: "Chỗ ở độc đáo",
      viTri: "nha-trang",
      hinhAnh: `${product2}`,
    },
    {
      ten: "Trang trại và thiên nhiên",
      viTri: "da-lat",
      hinhAnh: `${product3}`,
    },
    {
      ten: "Cho phép mang theo thú cưng",
      viTri: "da-nang",
      hinhAnh: `${product4}`,
    },
  ];
  return (
    <div className="container mx-auto mt-10">
      <h1 className="font-semibold text-2xl mb-8">Ở bất cứ đâu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {anywhereData.map((item, index) => {
          return (
            <Link key={index} to={`/room-location/${item.viTri}`}>
              <Card
                cover={
                  <img
                    alt=""
                    src={item.hinhAnh}
                    className="hover14 rounded-xl hover:opacity-70 duration-300"
                    style={{
                      width: "360px",
                      height: "250px",
                    }}
                  />
                }>
                <h3 className="text-lg -mx-5 -my-4">{item.ten}</h3>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default StayEverywhere;
