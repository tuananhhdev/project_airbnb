import React from "react";
import { render } from "react-dom";
import { useSelector } from "react-redux";

const ProfileList = () => {
  const { user } = useSelector((state) => state?.auth?.user) || {};
  const profileData = [
    {
      label: "Tài khoản :",
      value: user?.name,
    },
    {
      label: "E-mail :",
      value: user?.email,
    },
    {
      label: "Số điện thoại :",
      value: user?.phone,
    },
    {
      label: "Ngày sinh :",
      value: user?.birthday,
    },
    {
      label: "Giới tính :",
      value: user?.gender,
    },
  ];
  return (
    <div>
      {profileData.map((renderData) => {
        return (
          <div
            key={renderData.label}
            className="flex justify-between items-center border-b py-5">
            <div className="max-w-[50%] text-base tracking-wide">
              {renderData.label}
            </div>
            <div className="max-w-[50%] tracking-wide flex items-center space-x-3 text-gray-500 text-sm text-right">
              {renderData.value || "-"}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileList;
