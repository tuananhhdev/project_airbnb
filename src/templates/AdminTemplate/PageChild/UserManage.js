import React, { useState } from "react";
import { Table } from "antd";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Tên",
    dataIndex: "ten",
  },
  {
    title: "Hình ảnh",
    dataIndex: "hinhAnh",
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
          <i class="fa-solid fa-trash mr-5 text-lg text-red-500"></i>
        </a>
        <a href="">
          <i class="fa-solid fa-pen-to-square text-lg text-green-500"></i>,
        </a>
      </div>
    ),
  });
}
const UserManage = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  return (
    <div>
      <h1 className="text-4xl mb-5 font-semibold">Quản lí người dùng</h1>
      <a className="p-2 rounded-lg  text-lg border-2 border-gray-500 hover:text-gray-500 duration-500">
        <i class="fa-solid fa-user-plus mr-3 text-lg"></i>
        Thêm quản trị viên
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
          label="Nhập vào tài khoản hoặc họ tên người dùng"
          type="search"
          style={{
            width: "880px", marginRight:"20px"
          }}
        />
        <Stack>
          <Button variant="contained" style={{
            width: "100px"
          }}>Tìm kiếm</Button>
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

export default UserManage;
