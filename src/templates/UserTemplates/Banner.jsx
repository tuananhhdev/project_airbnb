import React from "react";
import bannerBackground from "../../assets/img/banner_house.jpg";
const Banner = () => {
  return (
    <div className="bg-black pb-14">
      <img
        src={bannerBackground}
        alt=""
        style={{
          width: "1600px",
          height: "640px",
          objectFit: "cover",
          margin: "auto",
          display: "block",
        }}
      />
      <div className="text-white text-2xl text-center mt-9">
        <h2>Nhờ có Host, mọi điều đều có thể</h2>
      </div>
    </div>
  );
};

export default Banner;
