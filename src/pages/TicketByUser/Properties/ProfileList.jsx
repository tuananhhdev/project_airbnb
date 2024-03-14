import React from "react";

const ProfileList = () => {
  const profileData = [
    {
      label: "Tài khoản :",
      value: "Tuấn Anh",
    },
    {
      label: "E-mail :",
      value: "tuananhteves126@gmail.com",
    },
    {
      label: "Số điện thoại :",
      value: "0332146137",
    },
    {
      label: "Ngày sinh :",
      value: "12/06/2005",
    },
    {
      label: "Giới tính :",
      value: "Nam",
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
              {renderData.value}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileList;
