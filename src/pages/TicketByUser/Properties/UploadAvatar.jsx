import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAvatar } from "../../../redux/slices/authSlice";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";

// const getBase64 = (file) => {
//   new Promise((resolve, reject) => {
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(file);
//     fileReader.onload = () => resolve(fileReader.result);
//     fileReader.onerror = (error) => reject(error);
//   });
// };
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const UploadAvatar = () => {
  // const [previewOpen, setPreviewOpen] = useState(false);
  // const [previewImage, setPreviewImage] = useState("");
  // const [previewTitle, setPreviewTitle] = useState("");

  // const handleCancel = () => setPreviewOpen(false);
  // const dispatch = useDispatch();
  // const handlePreview = async (file) => {
  //   if (!file.url && !file.preview) {
  //     file.preview = await getBase64(file.originFileObj);
  //   }
  //   setPreviewImage(file.url || file.preview);
  //   setPreviewOpen(true);
  //   setPreviewTitle(
  //     file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
  //   );
  // };

  // const avatarBeforeUpload = (file) => {
  //   dispatch(updateAvatar(file));
  //   return false;
  // };

  // const uploadButton = (
  //   <div>
  //     <PlusOutlined />
  //     <div style={{ marginTOp: 8 }}>Upload</div>
  //   </div>
  // );
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const { user } = useSelector((state) => state?.auth.user || {});
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button">
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}>
        Upload
      </div>
    </button>
  );
  return (
    <>
      {/* <Upload
        action={"https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"}
        listType="picture-circle"
        onPreview={handlePreview}
        beforeUpload={avatarBeforeUpload}>
        {user?.avatar ? (
          <div className="w-full relative">
            <EditOutlined className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <img
              alt="preview"
              className="w-full rounded-full"
              src={user?.avatar}
            />
          </div>
        ) : (
          uploadButton
        )}
      </Upload>
      <Modal
        centered
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}></Modal> */}
      <Upload
        className="flex justify-center w-full mx-auto mb-8"
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        listType="picture-circle"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}>
        {user?.avatar ? (
          <div className="w-full relative">
            <EditOutlined className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <img
              alt="preview"
              className="w-full rounded-full"
              src={user?.avatar}
            />
          </div>
        ) : (
          uploadButton
        )}
        {/* {fileList.length >= 8 ? null : uploadButton} */}
      </Upload>
      <Modal
        centered
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}></Modal>
    </>
  );
};

export default UploadAvatar;
