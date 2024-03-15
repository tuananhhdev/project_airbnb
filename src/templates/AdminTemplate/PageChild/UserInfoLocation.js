import React from "react";
import img1 from "../../../assets/img/phong5.png";
import img2 from "../../../assets/img/phong9.png";
import img3 from "../../../assets/img/phong10.png";
import img4 from "../../../assets/img/phong11.png";
import img5 from "../../../assets/img/phong12.png";
import { Box, TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
const UserInfoLocation = () => {
  return (
    <>
      <div>
        <h1 className="text-4xl mb-5 font-semibold">
          Quản lý thông tin vị trí
        </h1>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1 },
          }}
          noValidate
          autoComplete="off"></Box>
        <TextField
          id="outlined-search"
          label="Nhập vị trí muốn tìm"
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
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-20">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                vị trí
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
                className="px-6 py-4 font-medium text-white whitespace-nowrap ">
                1
              </th>
              <td className="px-6 py-4">tuananhteves126</td>
              <td className="px-6 py-4">
                <img
                  src={img1}
                  alt=""
                  style={{
                    width: "300px",
                    height: "170px",
                    objectFit: "cover",
                  }}
                />
              </td>
              <td className="px-6 py-4">Đà Nẵng</td>
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
                <img
                  src={img2}
                  alt=""
                  style={{
                    width: "300px",
                    height: "170px",
                    objectFit: "cover",
                  }}
                />
              </td>
              <td className="px-6 py-4">Hà Nội</td>
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
                <img
                  src={img3}
                  alt=""
                  style={{
                    width: "300px",
                    height: "170px",
                    objectFit: "cover",
                  }}
                />
              </td>
              <td className="px-6 py-4">Đà Lạt</td>
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
                <img
                  src={img4}
                  alt=""
                  style={{
                    width: "300px",
                    height: "170px",
                    objectFit: "cover",
                  }}
                />
              </td>
              <td className="px-6 py-4">Thành phố Hồ Chí Minh</td>
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
                <img
                  src={img5}
                  alt=""
                  style={{
                    width: "300px",
                    height: "170px",
                    objectFit: "cover",
                  }}
                />
              </td>
              <td className="px-6 py-4">Nha Trang</td>
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
    </>
  );
};

export default UserInfoLocation;
