import React from "react";
import Footer from "../../templates/UserTemplates/Footer";
import Header from "../../templates/UserTemplates/Header/Header";
import "./Login.css";
import registerHouse from "../../assets/img/register_house.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { message } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { listAPI } from "../../services/API";
import { Navigate } from "react-router-dom";
const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        taiKhoan: "",
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
        taiKhoan: Yup.string()
          .required("*Vui lòng không bỏ trống!*")
          .matches(
            /^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9\s\-\/.]+$/,
            "*Vui lòng nhập đúng định dạng!*"
          ),

        matKhau: Yup.string().required("*Vui lòng không bỏ trống!*"),
      }),
    });
  return (
    <div>
      {contextHolder}
      <Header />
      <div className="h-screen md:flex ">
        <div className=" relative overflow-hidden md:flex w-1/2 bg-black  justify-around items-center hidden ">
          <img src={registerHouse} alt="" className=" object-cover rounded-lg" />
          {/* <h2 className="absolute top-10 right-80 text-3xl text-white ">
            Welcome to Airbnb
          </h2> */}
          {/* <div className="absolute bottom-36 right-5 text-2xl ">
            <HeartOutlined
              className="cursor-pointer hover:text-pink-600 duration-500"
              style={{
                color: "white",
              }}
            />
          </div> */}
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form onSubmit={handleSubmit} className="bg-white">
            <h1 className="text-4xl mb-20 font-semibold text-center">
              Đăng nhập
            </h1>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <i class="fa-solid fa-user text-xl me-3"></i>
              <input
                className="pl-2 outline-none border-none "
                type="text"
                name="taiKhoan"
                id="taiKhoan"
                placeholder="Vui lòng nhập tài khoản"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.taiKhoan}
              />

              {errors.taiKhoan && touched.taiKhoan ? (
                <p className=" text-red-500 text-lg mt-1">{errors.taiKhoan}</p>
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
