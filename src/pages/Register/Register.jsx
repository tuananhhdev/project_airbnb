import React from "react";
import registerBackground from "../../assets/img/register_img.jfif";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
const Register = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: true,
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        // .matches(/^[A-Za-z ]*$/, "*Vui lòng nhập đúng định dạng!*")
        .min(8, "*Vui lòng nhập tối thiểu 8 ký tự!*")
        .max(20)
        .required("*Vui lòng không bỏ trống!*"),
      email: Yup.string()
        .email("*Vui lòng nhập đúng định dạng!*")
        .required("*Vui lòng không bỏ trống!*"),
      password: Yup.string()
        .matches(/^(?=.*[a-z])/, "*Mật khẩu phải chứa 1 ký tự thường!*")
        .matches(/^(?=.*[A-Z])/, "*Mật khẩu phải chứa 1 ký tự hoa!*")
        .matches(/^(?=.*[0-9])/, "*Mật khẩu phải chứa 1 ký tự số!*")
        .matches(
          /^(?=.*[!@#\$%\^&\*])/,
          "*Mật khẩu phải chứa 1 ký tự đặc biệt!*"
        )

        .required("*Vui lòng không bỏ trống!*"),
      phone: Yup.number()
        .typeError("*Vui lòng nhập đúng định dạng!*")
        .positive("*Không được chứa dấu trừ!*")
        .integer("*Không được chứa dấu chấm!*")
        .min(8, "*Vui lòng nhập tối thiểu 8 số!*")
        // .max(20, "*Vui lòng nhập tối đa 10 số*")
        .required("*Vui lòng không bỏ trống!*"),
      birthday: Yup.string().required("*Vui lòng không bỏ trống!*"),
      gender: Yup.string().required("*Vui lòng không bỏ trống*"),
    }),
    onSubmit: (data) => {
      localStorage.setItem("RegisterInfo", JSON.stringify(data));
      // console.log([data]);
    },
  });

  return (
    <div>
      {" "}
      <div
        className=" flex items-center justify-center h-screen"
        style={{
          background: `url(${registerBackground})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "cover",
        }}>
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-xl w-full">
          <div className="flex justify-center mb-6">
            <NavLink to={"/"}>
              <span className="inline-block ">
                <i class="fa-brands fa-airbnb text-5xl text-pink-600"></i>
              </span>
            </NavLink>
          </div>
          <h2 className="text-3xl font-semibold text-center mb-10">Đăng ký</h2>

          <form onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-2 gap-x-7">
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block text-gray-700 text-sm font-semibold mb-2">
                  Họ tên
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                  placeholder="Tuan Anh"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fullName}
                />
                {formik.errors.fullName && formik.touched.fullName && (
                  <p className="text-red-600 text-lg">
                    {formik.errors.fullName}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-semibold mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                  placeholder="example@gmail.com"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email && (
                  <p className="text-red-600 text-lg">{formik.errors.email}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 text-sm font-semibold mb-2">
                  Số điện thoại
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                  placeholder="+84 332-146-137"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                {formik.errors.phone && formik.touched.phone && (
                  <p className="text-red-600 text-lg">{formik.errors.phone}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-semibold mb-2">
                  Mật khẩu
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                  placeholder="**********"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.errors.password && formik.touched.password && (
                  <p className="text-red-600 text-lg">
                    {formik.errors.password}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="date"
                  className="block text-gray-700 text-sm font-semibold mb-2">
                  Ngày sinh
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.date}
                />
                {formik.errors.date && formik.touched.date && (
                  <p>{formik.errors.date}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="gender"
                  className="block text-gray-700 text-sm font-semibold mb-2">
                  Giới tính
                </label>
                <select
                  name="gender"
                  id="gender"
                  className="px-4 py-2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.gender}>
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                </select>
                {formik.errors.gender && formik.touched.gender && (
                  <p>{formik.errors.gender}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Tiếp tục
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
