import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Input } from "antd";
const AddUser = () => {
  const formik = useFormik({
    initialValues: {
      ten: "",
      email: "",
      taiKhoan: "",
      soDienThoai: "",
      matKhau: "",
    },
    // validationSchema: Yup.object({
    //   ten: Yup.string()
    //     .min(8, "*Vui lòng nhập tối thiểu 8 kí tự!*")
    //     .required("*Vui lòng không bỏ trống*"),
    //   email: Yup.string()
    //     .email("*Vui lòng nhập đúng dạng E-mail!*")
    //     .min(2, "*Vui lòng nhập tối thiểu 2 ký tự!*")
    //     .required("*Vui lòng không bỏ trống!*"),
    //   matKhau: Yup.string()
    //     .min(8, "*Vui lòng nhập tối đa 8 ký tự!*")
    //     .required("*Vui lòng không bỏ trống!*"),
    // }),
    onSubmit: (data) => {
      console.log(data);
    },
  });
  return (
    <div>
      <h1 className="text-3xl font-semibold">Thêm quản trị viên</h1>

      {/* <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <form className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="..."
                />
              </div>
            </div>
            <button
              type="submit"
              className="block w-full rounded-lg bg-black hover:bg-gray-900 px-5 py-3 text-sm font-medium text-white">
              Thêm
            </button>
          </form>
        </div>
      </div> */}
      <div>
        <section className="max-w-xl p-6 mx-auto  rounded-xl shadow-2xl mt-20">
          <Form layout="vertical">
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <Form.Item className="text-white font-medium " label="Tên">
                  <Input
                    id="username"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-black focus:outline-none focus:ring"
                    placeholder="Nhập tên"
                  />
                </Form.Item>
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="emailAddress">
                  Email Address
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-black focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="passwordConfirmation">
                  Password Confirmation
                </label>
                <input
                  id="passwordConfirmation"
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div className="mt-6">
              <button className="w-full px-6 py-3 text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-700">
                Thêm
              </button>
            </div>
          </Form>
        </section>
      </div>
    </div>
  );
};

export default AddUser;
