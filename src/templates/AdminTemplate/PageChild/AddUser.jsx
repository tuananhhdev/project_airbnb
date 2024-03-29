import React from "react";
import { useFormik } from "formik";
import { Input, DatePicker, Select, message, notification, Form } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import {
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  LockOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { useDispatch } from "react-redux";
const AddUser = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: true,
    },
  });
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    axios({
      method: "POST",
      url: "https://airbnbnew.cybersoft.edu.vn/api/auth/signup",
      data: values,
    })
      .then((res) => {
        console.log(res);
        notification.success({ message: "Đăng ký thành công" });
        // message.success("Đăng nhập thành công");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response.data);
        notification.error({ message: "Đăng ký thất bại!" });
        // message.error("Đăng ký thất bại!");
      });
  };
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];
  return (
    <>
      <h1 className="text-4xl mb-5 font-semibold">Thêm người dùng</h1>
      <div
        className=" flex items-center justify-center h-screen"
        // style={{
        //   background: `url(${registerBackground})`,
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   objectFit: "cover",
        // }}
      >
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-xl w-full">
          {/* Form register */}
          <Form onFinish={onSubmit} layout="vertical">
            <div className="grid grid-cols-2 gap-x-7">
              <div className="mb-4">
                <Form.Item
                  label="Tài khoản"
                  name="name"
                  className="block text-gray-700 text-xl font-semibold mb-2"
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
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    size="large"
                    placeholder=" Nhập tài khoản"
                    prefix={<UserOutlined className="mr-2" />}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                </Form.Item>
              </div>
              <div className="mb-4">
                <Form.Item
                  label="E-mail"
                  name="email"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng không bỏ trống!",
                    },
                    {
                      type: "email",
                      message: "E-mail không đúng định dạng!",
                    },
                  ]}
                  hasFeedback>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    size="large"
                    placeholder=" example@gmail.com"
                    prefix={<MailOutlined className="mr-2" />}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </Form.Item>
              </div>
              <div className="mb-4">
                <Form.Item
                  label="Số điện thoại"
                  name="phone"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng không bỏ trống!",
                    },
                    {
                      pattern: /^[0-9]{10}$/,
                      message: "Số điện thoại không đúng định dạng!",
                    },
                  ]}
                  hasFeedback>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    pattern="^[0-9\-\+]{9,15}$"
                    size="large"
                    placeholder=" Nhập số điện thoại"
                    prefix={<PhoneOutlined className="mr-2" />}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
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
                  ]}
                  hasFeedback>
                  <Input.Password
                    name="password"
                    id="password"
                    size="large"
                    placeholder="**********"
                    prefix={<LockOutlined className="mr-3" />}
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                </Form.Item>
              </div>

              <div className="mb-4">
                <Form.Item
                  label="Ngày sinh"
                  name="birthday"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng không bỏ trống!",
                    },
                  ]}
                  hasFeedback>
                  <DatePicker
                    // id="birthday"
                    name="birtday"
                    className="w-full"
                    format={dateFormatList}
                    size="large"
                    placeholder="Nhập ngày sinh"
                    // onChange={(values) => {
                    //   setFieldValue(
                    //     "birthday",
                    //     moment(values).format("DD/MM/YYYY")
                    //   );
                    // }}
                    // changeOnBlur={handleBlur}
                    // value={values.birthday ? dayjs(values.birthday) : ""}
                  />
                </Form.Item>
              </div>
              <div className="mb-4">
                <Form.Item
                  label="Giới tính"
                  name="gender"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng không bỏ trống!",
                    },
                  ]}
                  hasFeedback>
                  <Select
                    // id="gender"
                    name="gender"
                    size="large"
                    className="w-full"
                    placeholder="Chọn giới tính"
                    style={{
                      width: 120,
                    }}>
                    <Select.Option value={true}>Nam</Select.Option>
                    <Select.Option value={false}>Nữ</Select.Option>
                  </Select>
                </Form.Item>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-lg text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 font-medium hover:bg-slate-900  focus:black-opacity-50">
              Thêm
            </button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AddUser;
