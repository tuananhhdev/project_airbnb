import React, { useState } from "react";
import { Button, Modal } from "antd";
import FormUpdateProfile from "./FormUpdateProfile";
const ModalUpdateProfile = () => {
  //   const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <>
      <Button
        className="text-black flex items-center"
        onClick={() => setModal2Open(true)}>
        <i class="fa-regular fa-pen-to-square mr-2"></i>
        <p className="font-semibold">Chỉnh sửa hồ sơ</p>
      </Button>
      <Modal
        centered
        open={modal2Open}
        onCancel={() => setModal2Open(false)}
        cancelText="Tắt"
        okButtonProps={{ disabled: true }}>
        <FormUpdateProfile />
      </Modal>
    </>
  );
};

export default ModalUpdateProfile;
