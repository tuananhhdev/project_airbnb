import React from "react";

const UserInfoLocation = () => {
  return (
    <>
      <div>
        <h1 className="text-4xl mb-5 font-semibold">
          Quản lý thông tin vị trí
        </h1>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-20">
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
                <img src="" alt="" width={60} height={60} />
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
                <img src="" alt="" width={60} height={60} />
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
                <img src="{userAvatar3}" alt="" width={60} height={60} />
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
                <img src="" alt="" width={60} height={60} />
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
                <img src="" alt="" width={60} height={60} />
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
    </>
  );
};

export default UserInfoLocation;
