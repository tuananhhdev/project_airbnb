import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  EditOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { Link, Outlet, useLocation, NavLink } from "react-router-dom";
import SubMenu from "antd/es/menu/SubMenu";

const AdminTemplate = () => {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  console.log(location);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className="min-h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          className="mt-10"
          theme="dark"
          mode="inline"
          // lấy localtion từ hook useLocation để kiểm tra xem người dùng đang đứng ở component nào để active nút menu
          defaultSelectedKeys={[location.pathname]}
          items={[
            {
              icon: (
                <NavLink to={"/"}>
                  <i class="fa-brands fa-airbnb fs-1 text-pink-600"></i>
                </NavLink>
              ),
            },
            {
              key: "/admin",
              icon: <UserOutlined />,
              label: (
                <div>
                  <Link to={"/admin"}>Quản lí người dùng</Link>,
                </div>
              ),
            },
            {
              key: "/admin/user-info-location",
              icon: <EnvironmentOutlined />,
              label: (
                <Link to={"/admin/user-info-location"}>
                  Quản lí thông tin vị trí
                </Link>
              ),
            },
            {
              key: "/admin/room-info-manage",
              icon: <HomeOutlined />,
              label: (
                <div>
                  <Link to={"/admin/room-info-manage"}>
                    Quản lí thông tin phòng
                  </Link>
                </div>
              ),
            },
            {
              key: "/admin/booking-room-manage",
              icon: <EditOutlined />,
              label: (
                <Link to={"/admin/booking-room-manage"}>Quản lí đặt phòng</Link>
              ),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
//////

export default AdminTemplate;
