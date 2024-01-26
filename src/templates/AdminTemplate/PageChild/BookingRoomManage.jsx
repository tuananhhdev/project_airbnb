import React, { useState } from "react";
import { Table } from "antd";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
const columns = [
  {
    title: "Mã phòng",
    dataIndex: "maPhong",
  },
  {
    title: "Tên phòng",
    dataIndex: "ten",
  },
  {
    title: "Hình ảnh",
    dataIndex: "hinhAnh",
  },
  {
    title: "Vị trí",
    dataIndex: "viTri",
  },
  {
    title: "Hành động",
    dataIndex: "hanhDong",
  },
];
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    // name: `Edward King ${i}`,
    // age: 32,
    // address: `London, Park Lane no. ${i}`,
    hanhDong: (
      <div>
        <a href="">
          <i class="fa-solid fa-trash mr-5 text-lg text-red-500 hover:text-red-700 duration-200"></i>
        </a>
        <a href="">
          <i class="fa-solid fa-pen-to-square text-lg text-green-500 hover:text-green-700 duration-200"></i>
          ,
        </a>
      </div>
    ),
  });
}
const BookingRoomManage = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  return (
    <div>
      <h1 className="text-4xl mb-5 font-semibold">Quản lí phòng</h1>
      <a className="p-2 rounded-lg  text-lg border-2 border-gray-500 hover:text-gray-500 duration-500">
        <NavLink to={"/admin/add-room"}>
          <i class="fa-solid fa-house mr-3 text-lg"></i>
          Thêm phòng
        </NavLink>
      </a>
      <div className="mt-10 flex items-center">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1 },
          }}
          noValidate
          autoComplete="off"></Box>
        <TextField
          id="outlined-search"
          label="Nhập vào tên phòng"
          type="search"
          style={{
            width: "880px",
            marginRight: "20px",
          }}
        />
        <Stack>
          <Button
            variant="contained"
            style={{
              width: "100px",
            }}>
            Tìm kiếm
          </Button>
        </Stack>
      </div>
      <Table
        style={{ marginTop: "20px" }}
        columns={columns}
        dataSource={data}
      />
      ;
    </div>
  );
};

export default BookingRoomManage;
