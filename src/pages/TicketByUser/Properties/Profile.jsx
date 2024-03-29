import React from "react";
import UploadAvatar from "./UploadAvatar/UploadAvatar";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="w-full sticky top-28 border border-gray-300 rounded-2xl p-5">
      <UploadAvatar />
      <div className="mt-2">
        <div className="flex items-center">
          <CheckCircleOutlined className="text-green-600" />
          <span className="ml-2 font-semibold text-lg">Xác minh danh tính</span>
        </div>
        <div>
          <p className="text-gray-600 py-1 text-base">
            Xác minh danh tính của bạn với huy hiệu xác minh danh tính.
          </p>
          <button className="border px-5 py-2.5 rounded-lg hover:bg-gray-200 duration-200 font-semibold text-gray-800 my-1">
            Nhận huy hiệu
          </button>
        </div>
      </div>
      <div className="mt-2 border-t py-2">
        <div className="font-semibold text-lg text-gray-800">
          {" "}
          {user.name} đã xác nhận
        </div>
        <div className="mt-2">
          <CheckCircleOutlined className="text-green-600" />
          <span className="ml-2 text-sm italic">Địa chỉ email</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
