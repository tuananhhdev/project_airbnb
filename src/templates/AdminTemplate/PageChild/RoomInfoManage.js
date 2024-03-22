import React from "react";
import { NavLink } from "react-router-dom";
import img1 from "../../../assets/img/phong5.png";
import img2 from "../../../assets/img/phong9.png";
import img3 from "../../../assets/img/phong10.png";
import img4 from "../../../assets/img/phong11.png";
import img5 from "../../../assets/img/phong12.png";
const RoomInfoManage = () => {
  return (
    <div>
      <h1 className="text-4xl mb-5 font-semibold">Quản lí thông tin phòng</h1>
      <a className="p-2 rounded-lg  text-lg border-2 border-gray-500 hover:text-gray-500 duration-500">
        <NavLink to={"/admin/add-user"}>
          <i class="fa-solid fa-house  mr-3 text-lg"></i>
          Thêm phòng
        </NavLink>
      </a>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-20">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 ">
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
                ngày đi - ngày đến
              </th>
              <th scope="col" className="px-6 py-3">
                hành động
              </th>
            </tr>
          </thead>
          <tbody className="text-white">
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
              <td className="px-6 py-4">12/02/2024 - 14/02/2024</td>
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
              <td className="px-6 py-4">20/04/2024 - 25/4/2024</td>
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
              <td className="px-6 py-4">18/11/2024 - 22/11/2024</td>
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
              <td className="px-6 py-4">30/06/2024 - 5/07/2024</td>
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
              <td className="px-6 py-4">20/12/2024 - 25/12/2024</td>
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

export default RoomInfoManage;
