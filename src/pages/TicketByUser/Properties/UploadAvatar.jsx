import React from "react";

import userAvatar from "../../../assets/img/img.png.jfif";

const UploadAvatar = () => {
  return (
    <>
      <div className="flex justify-center w-full mx-auto mb-8">
        <img
          className="rounded-full"
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
