import React from "react";
import product1 from "../../assets/img/product_1.png.jfif";
import product2 from "../../assets/img/product_2.png.jfif";
import product3 from "../../assets/img/product_3.png.jfif";
import product4 from "../../assets/img/product_4.png";
const ProductHouse = () => {
  return (
    <div>
      <div className="container mx-auto mt-8 mb-8">
        <h2 className="text-2xl font-semibold ml-6 ">Ở bất cứ đâu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-xl text-semibold p-6 ">
            <img
              src={product1}
              alt=""
              style={{
                width: "312px",
                height: "234px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <p className="mt-2">Toàn bộ nhà</p>
          </div>
          <div className="text-xl text-semibold p-6">
            <img
              src={product2}
              alt=""
              style={{
                width: "312px",
                height: "234px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <p className="mt-2">Chỗ ở độc đáo</p>
          </div>
          <div className="text-xl text-semibold p-6">
            <img
              src={product3}
              alt=""
              style={{
                borderRadius: "8px",
              }}
            />
            <p className="mt-2">Trang trại và thiên nhiên</p>
          </div>
          <div className="text-xl text-semibold p-6">
            <img
              src={product4}
              alt=""
              style={{
                borderRadius: "8px",
              }}
            />
            <p className="mt-2">Cho phép mang theo thú cưng</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHouse;
