import React, { useState } from "react";
import registerBackground from "../../assets/img/register_img.jfif";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Input, DatePicker, message, Form, Select, notification } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  LockOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import { useFormik } from "formik";
import { registerUser, setLogin } from "../../redux/slices/authSlices";
import { useDispatch, useSelector } from "react-redux";
// import { loginAction, signupAct } from "../../redux/Action/authAction";
import { registerAuth } from "../../redux/slices/authSlice";
import { useForm } from "react-hook-form";
import { authAPI } from "../../services/AuthServ";
import { userLocalStorage } from "../../utils/Local";
import FormItem from "antd/es/form/FormItem";
import * as Yup from "yup";
// import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
const Signup = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // const dateFormat = "DD/MM/YYYY";
  // const formik = useFormik({
  //   initialValues: {
  //     id: 0,
  //     name: "",
  //     email: "",
  //     password: "",
  //     phone: "",
  //     birthday: "",
  //     gender: true,
  //     role: "",
  //   },
  // });
  // const onFinish = (values) => {
  //   const { id, name, email, password, phone, birthday, gender, role } = values;
  //   const formatBirthday = dayjs(birthday).format;
  //   dispatch(
  //     registerAuth({
  //       id,
  //       name,
  //       email,
  //       password,
  //       phone,
  //       birthday: formatBirthday,
  //       gender,
  //       role,
  //     })
  //   );
  // };
  const date = new Date();
  const formatDate = dayjs(date).format("DD/MM/YYYY");

  const location = useLocation();
  const [mode, setMode] = useState("login");
  // const {
  //   handleSubmit,
  //   handleChange,
  //   handleBlur,
  //   values,
  //   errors,
  //   touched,
  //   setFieldValue,
  //   resetForm,
  // } = useFormik({
  //   initialValues: {
  //     name: "",
  //     email: "",
  //     password: "",
  //     phone: "",
  //     birthday: "",
  //     gender: true,
  //   },
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: true,
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Vui lòng không bỏ trống")
        .email("Vui lòng nhập đúng định dạng email"),
      password: Yup.string().required("Vui lòng không bỏ trống"),
      // Thêm các điều kiện kiểm tra cho registration
      name: Yup.string().when("mode", {
        is: "signup",
        then: Yup.string().required("Vui lòng không bỏ trống"),
      }),
      phone: Yup.string().when("mode", {
        is: "signup",
        then: Yup.string()
          .required("Vui lòng không bỏ trống")
          .matches(/^[0-9]{10}$/, "Số điện thoại không hợp lệ"),
      }),
      birthday: Yup.string().when("mode", {
        is: "signup",
        then: Yup.string().required("Vui lòng chọn ngày sinh"),
      }),
      gender: Yup.string().when("mode", {
        is: "signup",
        then: Yup.string().required("Vui lòng chọn giới tính"),
      }),
    }),
    onSubmit: (values) => {
      switch (mode) {
        case "login": {
          authAPI
            .signin(values)
            .then((res) => {
              notification.success({ message: "Đăng nhập thành công" });
              const data = {
                ...res.data.response.user,
                token: res.data.content.token,
              };
              dispatch(setLogin({ ...data }));
              userLocalStorage.set({ ...data });
              setTimeout(() => {
                navigate(location.pathname);
              }, 1000);
            })
            .catch((error) => {
              console.log("error", error.response.data);
            });
          resetForm();
          break;
        }
        case "signup": {
          console.log(mode);
          authAPI
            .signup(values)
            .then((res) => {
              console.log(res);
              notification.success({ message: "Đăng ký thành công" });
            })
            .catch((error) => {
              console.log("error", error.response.data);
            });
          resetForm();
          break;
        }
        default:
          console.log(mode);
          return null;
      }
    },
  });

  // });

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   defaultValues: {
  //     // id: 0,
  //     name: "",
  //     email: "",
  //     password: "",
  //     phone: "",
  //     birthday: formatDate,
  //     gender: true,
  //     role: "",
  //   },
  //   mode: "onTouched",
  // });

  // const formik = useFormik({
  //   initialValues: {
  //     id: 0,
  //     name: "",
  //     email: "",
  //     password: "",
  //     phone: "",
  //     birthday: "",
  //     gender: true,
  //     role: "",
  //   },
  // onSubmit: (values) => {
  //   dispatch(registerUser(values)).then((result) => {
  //     if (result.id) {
  //       notification.success({ message: "Đăng ký tài khoản thành công" });
  //       navigate("/login");
  //     } else {
  //       notification.error({ message: "Đăng ký tài khoản thất bại!" });
  //     }
  //   });
  //   console.log("values", values);
  // },
  // });
  // const formatBirthday = dayjs(birthday).format;
  const navigate = useNavigate();
  // const onSubmit = (values) => {
  //   dispatch(registerUser(values)).then((result) => {
  //     if (result.id) {
  //       message.success("Đăng ký tài khoản thành công");
  //       navigate("/login?from-register");
  //     } else {
  //       message.error("Đăng kí tài khoản thất bại!");
  //     }
  //   });
  //   console.log(values);
  // };

  const onError = (values) => {
    console.log("values", values);
  };
  const componentDidMount = () => {
    this.props.onChange(this.state.value.format("DD-MM-YYYY"));
  };
  // const handleChange = (date) => {
  //   if (!date) {
  //     this.setState({ value: date });
  //     this.props.onChange(this.state.value.format("DD-MM-YYYY"));
  //   }
  // };
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];
  const handleOnChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div>
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

          <Form onFinish={handleSubmit}>
            <div className="grid grid-cols-2 gap-x-7">
              <div className="mb-4">
                <Form.Item
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  label={
                    <span className=" text-sm font-medium text-gray-900">
                      Tài khoản
                    </span>
                  }
                  name="name"
                  validateStatus={errors.name && touched.name ? "error" : ""}>
                  <Input
                    className="block"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    size="large"
                    placeholder=" Nhập tài khoản"
                    prefix={<UserOutlined className="mr-2" />}
                  />
                </Form.Item>
              </div>
              <div classNa me="mb-4">
                <FormItem
                  label={
                    <span className="block  text-sm font-medium text-gray-900">
                      E-mail
                    </span>
                  }
                  name="email"
                  validateStatus={errors.email && touched.email ? "error" : ""}
                  help={errors.email && touched.email && errors.email}>
                  <Input
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    // {...register("email")}
                    size="large"
                    placeholder=" example@gmail.com"
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    // value={formik.values.email}

                    prefix={<MailOutlined className="mr-2" />}
                  />
                </FormItem>
              </div>
              <div className="mb-4">
                <FormItem
                  label={
                    <span className="block text-gray-700 text-sm font-semibold mb-2">
                      Số điện thoại
                    </span>
                  }
                  name="phone"
                  validateStatus={errors.phone && touched.phone ? "error" : ""}
                  help={errors.phone && touched.phone && errors.phone}>
                  <Input
                    type="tel"
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    // {...register("phone")}
                    // pattern="^[0-9\-\+]{9,15}$"
                    size="large"
                    placeholder=" +84-332-146-137"
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    // value={values.phone}
                    prefix={<PhoneOutlined className="mr-2" />}
                  />
                </FormItem>
              </div>
              <div className="mb-4">
                <FormItem
                  label={
                    <span className="block text-sm font-medium text-gray-900">
                      Mật khẩu
                    </span>
                  }
                  name="password"
                  validateStatus={
                    errors.password && touched.password ? "error" : ""
                  }
                  help={errors.password && touched.password && errors.password}>
                  <Input.Password
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="**********"
                    size="large"
                    prefix={<LockOutlined className="mr-3" />}
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                    // hasFeedback
                  />
                </FormItem>
              </div>

              <div className="mb-4">
                <FormItem
                  label={
                    <span className="block text-gray-700 text-sm font-semibold mb-2">
                      Ngày sinh
                    </span>
                  }
                  name="birthday"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  validateStatus={
                    errors.birthday && touched.birthday ? "error" : ""
                  }
                  help={errors.birthday && touched.birthday && errors.birthday}>
                  Ngày sinh
                  <DatePicker
                    size="large"
                    className="w-full"
                    id="birthday"
                    name="birthday"
                    // {...register("birthday")}
                    // format={dateFormatList}
                    format="DD/MM/YYYY"
                    changeOnBlur={handleBlur}
                    placeholder="Chọn ngày sinh"
                    onChange={(date, dateString) => {
                      setFieldValue("birthday", date);
                    }}
                    value={values.birthday ? dayjs(values.birthday) : ""}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    // value={formik.values.birthday}
                  />
                </FormItem>
              </div>
              <div className="mb-4">
                {/* <FormControl
                
                  htmlFor="gender"
                  className="block text-gray-700 text-sm font-semibold mb-2">
                  Giới tính
                >
                <select
                  id="gender"
                  // name="gender"
                  {...register("gender")}
                  size="large"
                  className="w-full"
                  defaultValue="Chọn giới tính"
                  style={{
                    width: 120,
                  }}
                  // allowClear
                  // options={[
                  //   {
                  //     value: true,
                  //     label: "Nam",
                  //   },
                  //   {
                  //     value: false,
                  //     label: "Nữ",
                  //   },
                  // ]}
                >
                  <option value="true">Nam</option>
                  <option value="false">Nữ</option>
                </select> */}
                <FormItem
                  label={
                    <span className="block text-sm font-medium text-gray-900">
                      Giới tính
                    </span>
                  }
                  name="gender">
                  <Select
                    // id="gender"
                    name="gender"
                    // {...register("gender")}
                    className="w-full"
                    size="large"
                    // onChange={handleChange}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.gender}
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
                    placeholder="Chọn giới tính"
                    // validateStatus={
                    //   errors.gender && touched.gender ? "error" : ""
                    // }
                    // help={errors.gender && touched.gender && errors.gender}
                  />
                  {}
                </FormItem>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Tiếp tục
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
