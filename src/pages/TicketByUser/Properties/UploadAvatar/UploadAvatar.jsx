import React from "react";
import userAvatar from "../../../../assets/img/img.png.jfif";
import "./UploadAvatar.css";
const UploadAvatar = () => {
  return (
    <>
      <div className=" flex justify-center w-full mx-auto mb-8">
        <img
          className="avatar rounded-full"
          src={userAvatar}
          alt=""
          height={100}
          width={100}
        />
      </div>
    </>
  );
};

export default UploadAvatar;
