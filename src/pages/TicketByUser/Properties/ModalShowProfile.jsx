import React, { useState } from "react";
import { Button, Modal } from "antd";
import ProfileList from "./ProfileList";

const ModalShowProfile = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <Button
        onClick={() => {
          setModalOpen(true);
        }}
        className="flex items-center text-black">
        <i class="fa-solid fa-eye mr-2"></i>
        <p className="  font-semibold cursor-pointer">Thông tin hồ sơ</p>
      </Button>
      <Modal
        centered
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        okButtonProps={{ disabled: true }}
        cancelText="Tắt">
        <ProfileList />
      </Modal>
    </div>
  );
};

export default ModalShowProfile;
