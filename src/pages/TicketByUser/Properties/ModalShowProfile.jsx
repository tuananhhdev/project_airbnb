import React, { useState } from "react";
import { Button, Form, Modal } from "antd";
import ProfileList from "./ProfileList";
import { useSelector } from "react-redux";

const ModalShowProfile = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { user } = useSelector();
  const [form] = Form.useForm();
  return (
    <div>
      <Button
        onClick={() => {
          setModalOpen(true);
          form.setFieldValue({
            ...user,
            gender: user.gender ? "nam" : "nữ",
          });
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
