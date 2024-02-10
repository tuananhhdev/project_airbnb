// import React from "react";
// import loginBackground from "../../assets/img/login_house.jpg";
// import { NavLink } from "react-router-dom";
// import { Input, Form } from "antd";
// import {
//   LockOutlined,
//   MailOutlined,
//   EyeTwoTone,
//   EyeInvisibleOutlined,
// } from "@ant-design/icons";
// import { useDispatch, useSelector } from "react-redux";

// import { useFormik } from "formik";
// // import { loginUser } from "../../redux/slices/authSlices";
// import * as Yup from "yup";
// const Signin = () => {
//   const dispatch = useDispatch();
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: Yup.object({
//       email: Yup.string()
//         .email("*Vui lòng nhập đúng dạng E-mail!*")
//         .min(2, "*Vui lòng nhập tối thiểu 2 ký tự!*")
//         .required("*Vui lòng không bỏ trống!*"),
//       password: Yup.string()
//         .min(8, "*Vui lòng nhập tối đa 8 ký tự!*")
//         .required("*Vui lòng không bỏ trống!*"),
//     }),
//     // onSubmit: (values, event) => {
//     //   event.preventDefault();
//     //   const { email, password } = values || {};
//     //   const data = { email, password };
//     //   dispatch(loginUser(data));
//     //   console.log("values", values);
//     // },
//   });
//   return (
//     <div>
//       <div
//         className=" flex items-center justify-center h-screen"
//         style={{
//           background: `url(${loginBackground})`,
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//           backgroundPosition: "bottom",
//           objectFit: "cover",
//         }}>
//         <div className="bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full">
//           <div className="flex justify-center mb-6">
//             <NavLink to={"/"}>
//               <span className="inline-block ">
//                 <i class="fa-brands fa-airbnb text-5xl text-pink-600"></i>
//               </span>
//             </NavLink>
//           </div>
//           <h2 className="text-2xl font-semibold text-center mb-4">
//             Đăng nhập{" "}
//           </h2>

//           <form onSubmit={formik.handleSubmit}>
//             <div className="mb-4">
//               <Form.Item
//                 label={
//                   <span className="block  text-sm font-medium text-gray-900">
//                     Name
//                   </span>
//                 }
//                 name="name"
//                 validateStatus={errors.name && touched.name ? "error" : ""}
//                 help={errors.name && touched.name && errors.name}>
//                 <Input
//                   type="email"
//                   id="email"
//                   name="email"
//                   au="true"
//                   size="large"
//                   placeholder="Nhập E-mail"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.email}
//                   prefix={<MailOutlined className="mr-3" />}
//                 />
//               </Form.Item>
//             </div>
//             <div className="mb-4">
//               <Form.Item
//                 label="Mật khẩu"
//                 name="password"
//                 className="block text-gray-700 text-sm font-semibold mb-2"></Form.Item>

//               <Input.Password
//                 id="password"
//                 name="password"
//                 size="large"
//                 placeholder="Nhập mật khẩu"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.password}
//                 prefix={<LockOutlined className="mr-3" />}
//                 iconRender={(visible) =>
//                   visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
//                 }
//               />
//               {formik.errors.password && formik.touched.password && (
//                 <p className="text-red-500" style={{ fontSize: "16px" }}>
//                   {formik.errors.password}
//                 </p>
//               )}
//             </div>

//             <button
//               type="submit"
//               className="mt-3 w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-slate-900 focus:outline-none   focus:ring-opacity-50">
//               Tiếp tục
//             </button>
//             <p
//               className=" text-center mt-4 "
//               style={{
//                 fontSize: "16px",
//               }}>
//               Chưa có tài khoản ?
//               <NavLink to={"/register"}>
//                 <a className="ml-2 text-red-600 hover:underline">
//                   Đăng ký ngay
//                 </a>
//               </NavLink>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signin;
