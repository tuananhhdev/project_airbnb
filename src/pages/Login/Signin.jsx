import React from "react";
import loginBackground from "../../assets/img/login_house.jpg";
import { NavLink } from "react-router-dom";
import { Input, Form, Button } from "antd";
import {
  LockOutlined,
  MailOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { loginAuth } from "../../redux/slices/authSlice";
const Signin = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  const [isForm, setForm] = useState(false);
  const uploadForm = (props) => {
    const { getFieldDecorator, validateFields, getFieldError } = props.form;
    };
    const formik = useFormik()
  const onFinish = (values) => {
    validateFields();
    const validationErrors = getFieldsError();
    let allValid = true;
    console.log(validationErrors);
    for (let key in validationErrors) {
      console.log(validationErrors[key]);
      if (validationErrors[key] !== undefined) {
        allValid = false;
        break;
      }
    }
    if (allValid) {
      dispatch(submitFormData());
    }
    const { email, password } = values || {};
    const data = { email, password };
    dispatch(loginAuth(data));
    console.log(values);
  };

  const handleValueChange = () => {
    if (!isForm) {
      setForm(true);
    }
  };

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
          <h2 className="text-2xl font-semibold text-center mb-4">
            Đăng nhập{" "}
          </h2>

          <Form
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
            onValuesChange={handleValueChange}>
            <div className="mb-4">
              <Form.Item
                label="E-mail"
                name="email"
                className="block text-gray-700 text-sm font-semibold mb-2"
                hasFeedback></Form.Item>
              <Input
                au="true"
                size="large"
                placeholder="Nhập E-mail"
                prefix={<MailOutlined className="mr-3" />}
              />
              {/* <input
                type="email"
                id="email"
                name="email"
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                placeholder="example@gmail.com" */}
              {/* // value={formik.values.email}
              // onChange={formik.handleChange} */}
              {/* /> */}
              {/* {formik.errors.email && formik.touched.email && (
                <p className="text-red-500 text-lg">{formik.errors.email}</p>
              )} */}
            </div>
            <div className="mb-4">
              <Form.Item
                label="Mật khẩu"
                name="password"
                className="block text-gray-700 text-sm font-semibold mb-2"></Form.Item>

              <Input.Password
                size="large"
                placeholder="Nhập mật khẩu"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng không bỏ trống!",
                  },
                ]}
                prefix={<LockOutlined className="mr-3" />}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                hasFeedback
              />
            </div>

            <button
              type="submit"
              className="mt-3 w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-slate-900 focus:outline-none   focus:ring-opacity-50">
              Tiếp tục
            </button>
            <p
              className=" text-center mt-4 "
              style={{
                fontSize: "16px",
              }}>
              Chưa có tài khoản ?
              <NavLink to={"/register"}>
                <a className="ml-2 text-red-600 hover:underline">
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

export default Signin;
