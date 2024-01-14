import React from "react";
import Footer from "../../templates/UserTemplates/Footer";
import Header from "../../templates/UserTemplates/Header/Header";
import registerHouse from "../../assets/img/register_house.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { listAPI } from "../../services/API";
import { message } from "antd";

const Register = () => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const [messageApi, contextHolder] = message.useMessage();
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    isValid,
    dirty,
  } = useFormik({
    initialValues: {
      taiKhoan: "",
      email: "",
      phone: "",
      password: "",
    },
    onSubmit: (values) => {
      listAPI
        .register(values)
        .then((res) => {
          console.log(res);
          message.success("Đăng ký thành công");
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
      email: Yup.string()
        .required("*Vui lòng không bỏ trống!*")
        .email("*Vui lòng nhập đúng định dạng!*"),
      phone: Yup.string()
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "*Vui lòng nhập đúng định dạng!*"
        )
        .required("*Vui lòng không bỏ trống!*"),
      password: Yup.string()
        .min(6, "*Mật khẩu quá ngắn, tối thiểu 6 ký tự!*")
        .max(20, "*Mật khẩu chỉ chứa tối đa 20 ký tự!*")
        .required("*Vui lòng không bỏ trống!*"),
    }),
  });
  return (
    <div>
      {contextHolder}
      <Header />
      <div className="h-screen md:flex">
        <div className="relative overflow-hidden md:flex w-1/2 bg-black  justify-around items-center hidden">
          <img src={registerHouse} alt="" className="object-cover" />
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form className="bg-white" onSubmit={handleSubmit}>
            <h1 className="text-4xl mb-10 font-semibold text-center">
              Đăng ký
            </h1>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black-400 me-2"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name="taiKhoan"
                id="taiKhoan"
                placeholder="Vui lòng nhập họ tên"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.taiKhoan}
              />
              {errors.taiKhoan && touched.taiKhoan ? (
                <p className=" text-red-500 text-lg mt-1">{errors.taiKhoan}</p>
              ) : null}
            </div>

            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <i class="fa-solid fa-envelope text-black text-xl me-3"></i>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name="email"
                id="email"
                placeholder="Vui lòng nhập E-mail"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email ? (
                <p className=" text-red-500 text-lg mt-1">{errors.email}</p>
              ) : null}
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <i class="fa-solid fa-phone text-xl me-3"></i>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name="phone"
                id="phone"
                placeholder="Vui lòng nhập số điện thoại"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
              {errors.phone && touched.phone ? (
                <p className=" text-red-500 text-lg mt-1">{errors.phone}</p>
              ) : null}
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <i class="fa-solid fa-lock text-xl me-3"></i>
              <input
                className="pl-2 outline-none border-none"
                type="password"
                name="password"
                id="password"
                placeholder="Vui lòng nhập mật khẩu"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password ? (
                <p className=" text-red-500 text-lg mt-1">{errors.password}</p>
              ) : null}
            </div>
            <div className="checkbox-wrapper-28 ms-3 mt-3">
              <input
                id="tmp-28"
                type="checkbox"
                className="promoted-input-checkbox"
              />
              <svg>
                <use xlinkHref="#checkmark-28" />
              </svg>
              <label className="text-xl" htmlFor="tmp-28">
                Remember me
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "none" }}>
                <symbol id="checkmark-28" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeMiterlimit={10}
                    fill="none"
                    d="M22.9 3.7l-15.2 16.6-6.6-7.1"></path>
                </symbol>
              </svg>
            </div>

            <button
              type="submit"
              className="block w-full bg-indigo-600 mt-10 py-2 rounded-2xl text-white text-xl font-semibold mb-3 hover:bg-indigo-800 duration-500">
              Hoàn thành
            </button>
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

export default Register;
