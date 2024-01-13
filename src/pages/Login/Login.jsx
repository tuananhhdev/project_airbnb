import React from "react";
import Footer from "../../templates/UserTemplates/Footer";
import Header from "../../templates/UserTemplates/Header";
import "./Login.css";

import { useFormik } from "formik";
import * as Yup from "yup";
import { message } from "antd";
import { listAPI } from "../../services/API";
import { Navigate } from "react-router-dom";
const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        matKhau: "",
      },
      onSubmit: (values) => {
        listAPI
          .login(values)
          .then((res) => {
            console.log(res);
            message.success("Đăng nhập thành công");
            setTimeout(() => {
              Navigate("/");
            }, 1000);
          })
          .catch((err) => {
            messageApi.open({
              type: "error",
              content: err.response.data.content,
            });
            console.log(err);
          });
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .required("*Vui lòng không bỏ trống!*")
          .email("*Vui lòng nhập đúng dạng E-mail*"),
        matKhau: Yup.string().required("*Vui lòng không bỏ trống!*"),
      }),
    });
  return (
    <div>
      {contextHolder}
      <Header />
      <div className="h-screen md:flex">
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form onSubmit={handleSubmit} className="bg-white">
            <h1 className="text-4xl mb-20 font-semibold text-center">
              Đăng nhập
            </h1>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <i class="fa-solid fa-envelope text-xl me-3"></i>
              <input
                className="pl-2 outline-none border-none mb-3"
                type="email"
                name="email"
                id="email"
                placeholder="Vui lòng nhập E-mail"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />

              {errors.email && touched.email ? (
                <p
                  className=" text-red-500 text-lg mt-1"
                  style={{
                    display: "table-cell",
                    textAlign: "center",
                    verticalAlign: "middle",
                  }}>
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <i class="fa-solid fa-lock text-xl me-3"></i>
              <input
                className="pl-2 outline-none border-none"
                type="password"
                name="matKhau"
                id="matKhau"
                placeholder="Vui lòng nhập mật khẩu"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.matKhau}
              />
              {errors.matKhau && touched.matKhau ? (
                <p className="text-red-500 text-lg mt-1">{errors.matKhau}</p>
              ) : null}
            </div>
            <button
              type="submit"
              className="block w-full bg-indigo-600 mt-6 py-2 rounded-2xl text-white text-xl font-semibold mb-3 hover:bg-indigo-800 duration-500">
              Hoàn thành
            </button>
            <span className="text-lg font-semibold text-dark ml-2 hover:text-blue-500 cursor-pointer">
              Quên mật khẩu ?
            </span>
            <a
              className="ms-3 text-red-500 text-lg font-semibold hover:text-red-800"
              href="/register">
              Đăng ký
            </a>
          </form>
        </div>
      </div>
      <div>
        <a
          href="/"
          className="fixed  right-10 bottom-10  transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
          <i class="fa-solid fa-arrow-left text-black text-2xl "></i>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
