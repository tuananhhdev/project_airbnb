import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const AddUser = () => {
  const formik = useFormik({
    initialValues: {
      ten: "",
      email: "",
      taiKhoan: "",
      soDienThoai: "",
      matKhau: "",
    },
    validationSchema: Yup.object({
      ten: Yup.string()
        .min(8, "*Vui lòng nhập tối thiểu 8 kí tự!*")
        .required("*Vui lòng không bỏ trống*"),
      email: Yup.string()
        .email("*Vui lòng nhập đúng dạng E-mail!*")
        .min(2, "*Vui lòng nhập tối thiểu 2 ký tự!*")
        .required("*Vui lòng không bỏ trống!*"),
      matKhau: Yup.string()
        .min(8, "*Vui lòng nhập tối đa 8 ký tự!*")
        .required("*Vui lòng không bỏ trống!*"),
    }),
    onSubmit: (data, event) => {
      event.prevenDefault();
      console.log(data);
    },
  });
  return (
    <div>
      <h1 className="text-3xl font-semibold">Thêm quản trị viên</h1>
      <div classname="container">
        <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
          <form onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="username">
                  Tên
                </label>
                <input
                  id="username"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="emailAddress">
                  E-mail
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="password">
                  Tài khoản
                </label>
                <input
                  id="text"
                  type="text"
                  name="taiKhoan"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="passwordConfirmation">
                  Số điện thoại
                </label>
                <input
                  id="soDienThoai"
                  name="soDienThoai"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="passwordConfirmation">
                  Mật khẩu
                </label>
                <input
                  id="matKhau"
                  type="matKhau"
                  name="matKhau"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="btn btn-success text-white mt-6 ">
                Thêm
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddUser;
