// import React from "react";
// import loginBackground from "../../assets/img/login_house.jpg";
// import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { useDispatch } from "react-redux";
// import { loginAuth, signin } from "../../redux/slices/authSlice";
// import Swal from "sweetalert2";
// import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
// import { Input, Space } from "antd";

// export default function Login() {
//   // const { search } = useLocation();
//   // let navigate = useNavigate();
//   const dispatch = useDispatch();

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       matKhau: "",
//     },
//     validationSchema: Yup.object({
//       email: Yup.string()
//         .email("*Vui lòng nhập đúng dạng E-mail!*")
//         .min(2, "*Vui lòng nhập tối thiểu 2 ký tự!*")
//         .required("*Vui lòng không bỏ trống!*"),
//       matKhau: Yup.string()
//         .min(8, "*Vui lòng nhập tối đa 8 ký tự!*")
//         .required("*Vui lòng không bỏ trống!*"),
//     }),
//     onsSubmit: (values) => {
//       const { email, password } = values || {};
//       const data = { email, password };
//       dispatch(loginAuth(data));
//       console.log(values);
//     },
//   });

//   const onError = (values) => {
//     console.log(values);
//     return (
//       <div>
//         <div
//           className=" flex items-center justify-center h-screen"
//           style={{
//             background: `url(${loginBackground})`,
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover",
//             backgroundPosition: "bottom",
//             objectFit: "cover",
//           }}>
//           <div className="bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full">
//             <div className="flex justify-center mb-6">
//               <NavLink to={"/"}>
//                 <span className="inline-block ">
//                   <i class="fa-brands fa-airbnb text-5xl text-pink-600"></i>
//                 </span>
//               </NavLink>
//               on{" "}
//             </div>
//             <h2 className="text-2xl font-semibold text-center mb-4">
//               Đăng nhập{" "}
//             </h2>

//             <form onSubmit={formik.handleSubmit(onSubmit, onError)}>
//               <div className="mb-4">
//                 <label
//                   htmlFor="fullName"
//                   className="block text-gray-700 text-sm font-semibold mb-2">
//                   E-mail
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
//                   placeholder="example@gmail.com"
//                   value={formik.values.email}
//                   onChange={formik.handleChange}
//                 />
//                 {formik.errors.email && formik.touched.email && (
//                   <p className="text-red-500 text-lg">{formik.errors.email}</p>
//                 )}
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="password"
//                   className="block text-gray-700 text-sm font-semibold mb-2">
//                   Mật khẩu
//                 </label>
//                 <input
//                   type="password"
//                   name="matKhau"
//                   id="matKhau"
//                   className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
//                   placeholder="*********"
//                   value={formik.values.matKhau}
//                   onChange={formik.handleChange}
//                 />
//                 {formik.errors.matKhau && formik.touched.matKhau && (
//                   <p className="text-red-500 text-lg">
//                     {formik.errors.matKhau}
//                   </p>
//                 )}
//                 {/* <Input.Password
//                   placeholder="*********"
//                   iconRender={(visible) =>
//                     visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
//                   }
//                 /> */}
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-slate-900 focus:outline-none   focus:ring-opacity-50">
//                 Tiếp tục
//               </button>
//               <p className="text-lg text-center mt-4 ">
//                 Chưa có tài khoản ?
//                 <NavLink to={"/register"}>
//                   <a className="ml-2 text-red-500 hover:underline">
//                     Đăng ký ngay
//                   </a>
//                 </NavLink>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   };
// }
