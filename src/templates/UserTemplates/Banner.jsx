import React from "react";
import bannerHouse from "../../assets/img/banner_house.jpg";
const Banner = () => {
  return (
    <div>
      <div className="bg-black pt-2">
        <img
          src={bannerHouse}
          alt="banner_house"
          style={{
            margin: "auto",
            display: "block",
            width: "1600px",
            height: "640px",
            marginTop: "20px",
            objectFit: "cover",
          }}
        />
              <h3 className="text-center text-white text-2xl mt-6" style={{
            paddingBottom:"30px"
        }}>
          Nhờ có Host, mọi điều đều có thể{" "}
        </h3>
      </div>
    </div>
  );
};

export default Banner;
