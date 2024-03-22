import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import loginBackground from "../../assets/img/login_house.jpg";
import { useFormik } from "formik";
import { Input, Form, notification, message } from "antd";
import {
  LockOutlined,
  MailOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import axios from "axios";
import "./Login.css"
const Login = () => {
  const navigate = useNavigate();
  const formik =
    // { handleSubmit, handleChange, handleBlur, values, errors, touched }
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: (values) => {
        console.log(values);
        axios({
          method: "POST",
          url: "https://airbnbnew.cybersoft.edu.vn/api/auth/signin",
          data: values,
        })
          .then((res) => {
            console.log(res);
            notification.success({
              message: "Chúc mừng bạn đã đăng nhập thành công",
            });
          })
          .catch((error) => {
            console.log(error.response.data);
            notification.error({
              message: "Rất tiếc bạn đã đăng nhập thất bại!",
            });
          });
      },
    });
  return (
    <div>
      <div
        className=" flex items-center justify-center h-screen"
        style={{
          background: `url(${loginBackground})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          objectFit: "cover",
        }}>
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full">
          <div className="flex justify-center mb-6">
            <NavLink to={"/"}>
              <span className="inline-block ">
                <i class="fa-brands fa-airbnb text-5xl text-pink-600"></i>
              </span>
            </NavLink>
          </div>
          <h2 className="text-2xl font-semibold text-center mb-4">Đăng nhập</h2>

          <Form layout="vertical" onFinish={formik.handleSubmit}>
            <div className="mb-4">
              <Form.Item
                label="E-mail"
                className="block text-gray-700 text-sm font-semibold mb-2"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng không bỏ trống!",
                  },
                  {
                    type: "email",
                    message: "Vui lòng nhập đúng định dạng!",
                  },
                ]}
                hasFeedback>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  au="true"
                  autoComplete="off"
                  size="large"
                  placeholder="Nhập E-mail"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  prefix={<MailOutlined className="mr-3" />}
                />
              </Form.Item>
            </div>
            <div className="mb-4">
              <Form.Item
                label="Mật khẩu"
                name="password"
                className="block text-gray-700 text-sm font-semibold mb-2"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng không bỏ trống!",
                  },
                  {
                    min: 6,
                    message: "Vui lòng nhập tối thiểu 6 đến 10 ký tự!",
                  },
                  {
                    max: 10,
                    message: "Vui lòng nhập tối đa 10 ký tự!",
                  },
                ]}
                hasFeedback>
                <Input.Password
                  id="password"
                  name="password"
                  size="large"
                  placeholder="Nhập mật khẩu"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  prefix={<LockOutlined className="mr-3" />}
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>
            </div>

            <button
              type="submit"
              className="mt-3 w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-slate-900 focus:outline-none   focus:ring-opacity-50">
              Tiếp tục
            </button>
            <p
              className="no_acc font-semibold text-center mt-4 "
              style={{
                fontSize: "16px",
              }}>
              Chưa có tài khoản ?
              <NavLink to={"/register"}>
                <a className="register_now font-semibold ml-2 text-red-600 hover:underline">
                  Đăng ký ngay
                </a>
              </NavLink>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
