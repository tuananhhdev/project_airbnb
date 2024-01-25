// import React, { useEffect, useState } from "react";
// import { Carousel, Tabs } from "antd";
// import "./ProductHouse.css";

// import { listAPI } from "../../services/API";

// const onChange = (key) => {
//   console.log(key);
// };
// const items = [
//   {
//     key: "1",
//     label: (
//       <div>
//         <img
//           class=""
//           src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
//           width="24"
//           height="24"></img>
//         <p>Thật ấn tượng</p>
//       </div>
//     ),
//     children: "Content of Tab Pane 1",
//   },
//   {
//     key: "2",
//     label: (
//       <div>
//         <img
//           class=""
//           src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg"
//           width="24"
//           height="24"></img>
//         <p>Công viên quốc gia</p>
//       </div>
//     ),
//     children: "Content of Tab Pane 2",
//   },
//   {
//     key: "3",
//     label: (
//       <div>
//         <img
//           class=""
//           src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
//           width="24"
//           height="24"></img>
//         <p>Hồ bơi tuyệt vời</p>
//       </div>
//     ),
//     children: "Content of Tab Pane 3",
//   },
//   {
//     key: "4",
//     label: (
//       <div>
//         <img
//           class=""
//           src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg"
//           width="24"
//           height="24"
//         />
//         <p>Đảo</p>
//       </div>
//     ),
//     children: "Content of Tab Pane 3",
//   },
//   {
//     key: "5",
//     label: (
//       <div>
//         <img
//           class=""
//           src="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"
//           width="24"
//           height="24"
//         />
//         Bãi biển
//       </div>
//     ),
//     children: "Content of Tab Pane 3",
//   },
//   {
//     key: "6",
//     label: (
//       <div>
//         <img
//           class=""
//           src="https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg"
//           width="24"
//           height="24"
//         />
//         <p>Nhà nhỏ</p>
//       </div>
//     ),
//     children: "Content of Tab Pane 3",
//   },
//   {
//     key: "7",
//     label: (
//       <div>
//         <img
//           class=""
//           src="https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg"
//           width="24"
//           height="24"
//         />
//         <p>Thiết kế</p>
//       </div>
//     ),
//     children: "Content of Tab Pane 3",
//   },
//   {
//     key: "8",
//     label: (
//       <div>
//         <img
//           class=""
//           src="https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg"
//           width="24"
//           height="24"
//         />
//         <p>Bắc cực</p>
//       </div>
//     ),
//     children: "Content of Tab Pane 3",
//   },
//   {
//     key: "9",
//     label: (
//       <div>
//         <img
//           class=""
//           src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"
//           width="24"
//           height="24"
//         />
//         <p>Cabin</p>
//       </div>
//     ),
//     children: "Content of Tab Pane 3",
//   },
//   {
//     key: "10",
//     label: (
//       <div>
//         <img
//           class=""
//           src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg"
//           width="24"
//           height="24"
//         />
//         <p>Ven hồ</p>
//       </div>
//     ),
//     children: "Content of Tab Pane 3",
//   },
//   {
//     key: "11",
//     label: (
//       <div>
//         <img
//           class=""
//           src="https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg"
//           width="24"
//           height="24"
//         />
//         <p>Chơi golf</p>
//       </div>
//     ),
//     children: "Content of Tab Pane 3",
//   },
//   {
//     key: "12",
//     label: (
//       <div>
//         <img
//           class=""
//           src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
//           width="24"
//           height="24"
//         />
//         <p>
//           Khung cảnh tuyệt <br /> vời
//         </p>
//       </div>
//     ),
//     children: "Content of Tab Pane 3",
//   },
//   {
//     key: "13",
//     label: (
//       <div>
//         <img
//           class=""
//           src="https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg"
//           width="24"
//           height="24"
//         />
//         <p>Hang động</p>
//       </div>
//     ),
//     children: "Content of Tab Pane 3",
//   },
//   {
//     key: "14",
//     label: (
//       <div>
//         <img
//           class=""
//           src="https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg"
//           width="24"
//           height="24"
//         />
//         <p>Lướt sóng</p>
//       </div>
//     ),
//     children: "Content of Tab Pane 3",
//   },
//   {
//     key: "15",
//     label: (
//       <div>
//         <img
//           class=""
//           src="https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg"
//           width="24"
//           height="24"
//         />
//         <p>Khung nhà chữ A</p>
//       </div>
//     ),
//     children: "Content of Tab Pane 3",
//   },
//   {
//     key: "16",
//     label: (
//       <div>
//         <img
//           class=""
//           src="https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg"
//           width="24"
//           height="24"
//         />
//         <p>Nhà dưới lòng đất</p>
//       </div>
//     ),
//     children: "Content of Tab Pane 3",
//   },
// ];

// const ProductHouse = () => {
//   const [product, setProduct] = useState([]);
//   useEffect(() => {
//     listAPI
//       .pageLocation()
//       .then((res) => {
//         console.log(res);
//         setProduct(res.data.content.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   return (
//     <div className="product">
//       <Tabs
//         defaultActiveKey="1"
//         onChange={onChange}
//         items={product?.map((item, index) => {
//           return {
//             label: (
//               <img
//                 class=""
//                 src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
//                 width="24"
//                 height="24"
//               />
//             ),
//             key: "1",
//             children: (
//               <div>
//                 {item.productList.map((i, d) => {
//                   <div
//                     key={d}
//                     className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                     <div>
//                       <img src={i.hinhAnh} alt="" />
//                       <p>{i.tenTinhThanh}</p>
//                       <p>{i.quocGia}</p>
//                     </div>
//                   </div>;
//                 })}
//               </div>
//             ),
//           };
//         })}
//       />
//     </div>
//   );
// };

// export default ProductHouse;
