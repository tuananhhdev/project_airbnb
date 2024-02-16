import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../../redux/slices/authSlice";
import { Modal } from "antd";
import { Button, DatePicker, Form, Input, Select } from "antd";
import dayjs from "dayjs";
import { MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";

import { validatePhoneNumber } from "./validation/phoneNumber";
import { NavLink } from "react-router-dom";
const FormUpdateProfile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state?.auth);
  const [isFormDirty, setIsFormDirty] = useState(false);
  const { name, email, phone, birthday, gender, id, role } = user || {};
  const dateFormat = "DD/MM/YYYY";
  const onFinish = (values) => {
    const { name, email, phone, birthday, gender } = values;
    const formattedBirthday = dayjs(birthday).format(dateFormat);
    const data = {
      name,
      email,
      phone,
      birthday: formattedBirthday,
      gender,
      id: id,
      role,
    };

    dispatch(
      updateProfile({
        id,
        profileData: data,
      })
    );
  };

  const handleValuesChange = () => {
    if (!isFormDirty) {
      setIsFormDirty(true);
    }
  };

  // if (!user?.id) return null;
  return (
    <Form
      className="w-full form-register"
      layout="vertical"
      name="register"
      initialValues={{
        name: name,
        email: email,
        phone: phone,
        birthday: dayjs(birthday || "12/06/2005", dateFormat),
        gender: gender,
      }}
      onFinish={onFinish}
      autoComplete="off"
      onValuesChange={handleValuesChange}>
      <div className="mb-4 relative">
        <div className="mb-2 md:absolute top-0 left-0">
          <NavLink to={"/"}>
            <i class="fa-brands fa-airbnb text-5xl text-pink-600"></i>
          </NavLink>
        </div>
        <div className="hidden md:block text-center font-semibold text-3xl ">
          <h1>Cập nhật hồ sơ</h1>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 gap-x-4 gap-y-1 mt-10">
        <div className="mb-1">
          <Form.Item
            label="Tài khoản"
            name="name"
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
            hasFeedback
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            <Input
              prefix={<UserOutlined />}
              placeholder="Nhập tài khoản"
              size="large"
            />
          </Form.Item>
        </div>
        <div className="mb-1">
          <Form.Item
            label="E-mail"
            name="email"
            rules={[
              {
                required: true,
                message: "Vui lòng không bỏ trống!",
              },
              {
                type: "email",
                message: "E-mail không hợp lệ!",
              },
            ]}
            hasFeedback
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            <Input
              prefix={<MailOutlined />}
              placeholder="example@gmail.com"
              size="large"
            />
          </Form.Item>
        </div>
        <div className="mb-1">
          <Form.Item
            label="Số điện thoại"
            name="phone"
            rules={[
              {
                required: true,
                message: "Vui lòng không bỏ trống!",
              },
              {
                pattern: /^[0-9]{10}$/,
                message: "Số điện thoại không hợp lệ!",
              },
            ]}
            hasFeedback
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            <Input
              prefix={<PhoneOutlined />}
              placeholder="Nhập số điện thoại"
              size="large"
            />
          </Form.Item>
        </div>
        <div className="mb-1">
          <Form.Item
            label="Ngày sinh"
            name="birthday"
            rules={[
              {
                required: true,
                message: "Vui lòng không bỏ trống!",
              },
            ]}
            hasFeedback
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            <DatePicker
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-[0.3rem] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              format={dateFormat}
              placeholder="Chọn ngày"
              size="large"
            />
          </Form.Item>
        </div>
        <div className="mb-1">
          <Form.Item
            label="Giới tính"
            name="gender"
            rules={[
              {
                required: true,
                message: "Vui lòng không bỏ trống",
              },
            ]}
            hasFeedback
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            <Select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Chọn giới tính"
              options={[
                {
                  value: true,
                  label: "Nam",
                },
                {
                  value: false,
                  label: "Nữ",
                },
              ]}
              size="large"
            />
          </Form.Item>
        </div>
        <div />
        <div className="col-span-2 text-center">
          <Form.Item>
            <button
              className="text-white mt-3 focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-red-500  hover:bg-red-800 duration-300 w-1/2 cursor-pointer"
              htmlType="submit"
              disabled={!isFormDirty}>
              Cập nhật
            </button>
          </Form.Item>
        </div>
      </div>
    </Form>
  );
};

export default FormUpdateProfile;
