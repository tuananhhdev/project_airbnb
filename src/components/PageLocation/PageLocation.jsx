import React, { useEffect, useState } from "react";
import { listAPI } from "../../services/API";
import { Carousel, Col, Divider, Row } from "antd";
const PageLocation = () => {
  const style = {
    background: "#0092ff",
    padding: "8px 0",
  };
  const [location, setLocation] = useState([]);
  useEffect(() => {
    listAPI
      .pageLocation()
      .then((res) => {
        console.log(res);
        setLocation(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(location);
  return (
    <>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold">
          Khám phá những điểm đến gần đây
        </h2>
      </div>
      {location.map((item, index) => {
        return (
          <div key={index}>
            <div className="px-10 py-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
                <a
                  href="https://www.kindacode.com"
                  className="flex flex-col bg-white drop-shadow hover:drop-shadow-lg hover:opacity-70 rounded-md">
                  <img
                    src={item.hinhAnh}
                    alt="Fiction Product"
                    className="h-36 object-cover rounded-tl-md rounded-tr-md"
                  />
                  <div className="px-3 py-2">
                    <p className="text-sm">{item.tinhThanh}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PageLocation;
