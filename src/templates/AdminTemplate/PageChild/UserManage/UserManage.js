import React, { useState } from "react";
import { Table } from "antd";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import userAvatar from "../../../../assets/img/img.png.jfif";
import userAvatar2 from "../../../../assets/img/user-36-01.jpg";
import userAvatar3 from "../../../../assets/img/user-36-04.jpg";
import userAvatar4 from "../../../../assets/img/user-36-02.jpg";
import userAvatar5 from "../../../../assets/img/user.jpg";
import "./UserManage.css";
const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Tên",
    dataIndex: "ten",
  },
  {
    title: "Hình ảnh",
    dataIndex: "hinhAnh",
  },
  {
    title: "Hành động",
    dataIndex: "hanhDong",
  },
];
const data = [];
data.push({
  id: (
    <div>
      <p>1</p>
      <p>2</p>
    </div>
  ),
  hanhDong: (
    <div>
      <a href="">
        <i class="fa-solid fa-trash mr-5 text-lg text-red-500 hover:text-red-700 duration-200"></i>
      </a>
      <a href="">
        <i class="fa-solid fa-pen-to-square text-lg text-green-500 hover:text-green-700 duration-200"></i>
      </a>
    </div>
  ),
});
const UserManage = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  return (
    <div>
      <h1 className="title text-4xl mb-5 font-semibold">Quản lí người dùng</h1>
      <a className="p-2 rounded-lg  text-lg border-2 border-gray-500 hover:text-gray-500 duration-500">
        <NavLink to={"/admin/add-user"}>
          <i class="fa-solid fa-user-plus mr-3 text-lg"></i>
          Thêm quản trị viên
        </NavLink>
      </a>
      <div className="mt-10 flex items-center">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1 },
          }}
          noValidate
          autoComplete="off"></Box>
        <TextField
          id="outlined-search"
          label="Nhập tài khoản hoặc họ tên người dùng"
          type="search"
          style={{
            width: "890px",
            marginRight: "20px",
          }}
        />
        <Stack>
          <Button
            variant="contained"
            style={{
              height: "50px",
              width: "100px",
            }}>
            Tìm kiếm
          </Button>
        </Stack>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                id
              </th>
              <th scope="col" className="px-6 py-3">
                tên
              </th>
              <th scope="col" className="px-6 py-3">
                hình ảnh
              </th>
              <th scope="col" className="px-6 py-3">
                role
              </th>
              <th scope="col" className="px-6 py-3">
                hành động
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-ưhite whitespace-nowrap dark:text-white">
                1
              </th>
              <td className="px-6 py-4">tuananhteves126</td>
              <td className="px-6 py-4">
                <img src={userAvatar} alt="" width={60} height={60} />
              </td>
              <td className="px-6 py-4">Admin</td>
              <td className="px-6 py-4">
                <a href="">
                  <i class="fa-solid fa-trash mr-5 text-lg text-red-500 hover:text-red-700 duration-200"></i>
                </a>
                <a href="">
                  <i class="fa-solid fa-pen-to-square text-lg text-green-500 hover:text-green-700 duration-200"></i>
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                2
              </th>
              <td className="px-6 py-4">nguyennhu58</td>
              <td className="px-6 py-4">
                <img src={userAvatar2} alt="" width={60} height={60} />
              </td>
              <td className="px-6 py-4">User</td>
              <td className="px-6 py-4">
                <a href="">
                  <i class="fa-solid fa-trash mr-5 text-lg text-red-500 hover:text-red-700 duration-200"></i>
                </a>
                <a href="">
                  <i class="fa-solid fa-pen-to-square text-lg text-green-500 hover:text-green-700 duration-200"></i>
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                3
              </th>
              <td className="px-6 py-4">tonythang61</td>
              <td className="px-6 py-4">
                <img src={userAvatar3} alt="" width={60} height={60} />
              </td>
              <td className="px-6 py-4">User</td>
              <td className="px-6 py-4">
                <a href="">
                  <i class="fa-solid fa-trash mr-5 text-lg text-red-500 hover:text-red-700 duration-200"></i>
                </a>
                <a href="">
                  <i class="fa-solid fa-pen-to-square text-lg text-green-500 hover:text-green-700 duration-200"></i>
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                4
              </th>
              <td className="px-6 py-4">davidnguyen5</td>
              <td className="px-6 py-4">
                <img src={userAvatar4} alt="" width={60} height={60} />
              </td>
              <td className="px-6 py-4">User</td>
              <td className="px-6 py-4">
                <a href="">
                  <i class="fa-solid fa-trash mr-5 text-lg text-red-500 hover:text-red-700 duration-200"></i>
                </a>
                <a href="">
                  <i class="fa-solid fa-pen-to-square text-lg text-green-500 hover:text-green-700 duration-200"></i>
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                5
              </th>
              <td className="px-6 py-4">nguyenthinhnee</td>
              <td className="px-6 py-4">
                <img src={userAvatar5} alt="" width={60} height={60} />
              </td>
              <td className="px-6 py-4">User</td>
              <td className="px-6 py-4">
                <a href="">
                  <i class="fa-solid fa-trash mr-5 text-lg text-red-500 hover:text-red-700 duration-200"></i>
                </a>
                <a href="">
                  <i class="fa-solid fa-pen-to-square text-lg text-green-500 hover:text-green-700 duration-200"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManage;
