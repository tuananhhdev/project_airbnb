import React from "react";
import product1 from "../../assets/img/product_1.png.jfif";
import product2 from "../../assets/img/product_2.png.jfif";
import product3 from "../../assets/img/product_3.png.jfif";
import product4 from "../../assets/img/product_4.png";
import { NavLink } from "react-router-dom";
const ListLocation = (id) => {
  return (
    <div className="container mx-auto mt-20 mb-20">
      <h1 className="text-2xl font-semibold ml-7">Ở bất cứ đâu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className=" text-xl  p-6  ">
          <NavLink to={`/room-detail/${id}`}>
          <img
            src={product1}
            alt=""
            className="rounded-xl"
            style={{
              width: "318px",
              height: "238px",
              objectFit: "cover",
              cursor: "pointer",
            }}
          />
          </NavLink>

          <h3 className="text-xl mt-3">Toàn bộ nhà</h3>
        </div>
        <div className=" text-xl  p-6  ">
          {/* <NavLink to={"/room-details/:id"}> */}
            <img
              src={product2}
              alt=""
              className="rounded-xl "
              style={{
                width: "318px",
                height: "238px",
                objectFit: "cover",
              }}
            />
          {/* </NavLink> */}

          <h3 className="text-xl mt-3">Chỗ ở độc đáo</h3>
        </div>
        <div className=" text-xl  p-6  ">
          <img src={product3} alt="" className="rounded-xl" />
          <h3 className="text-xl mt-3">Trang trại và thiên nhiên</h3>
        </div>
        <div className=" text-xl  p-6  ">
          <img src={product4} alt="" className="rounded-xl" />
          <h3 className="text-xl mt-3">Cho phép mang theo thú cưng</h3>
        </div>
      </div>
    </div>
  );
};

export default ListLocation;
