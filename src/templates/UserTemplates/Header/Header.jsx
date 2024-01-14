import React from "react";
import { Dropdown, Space, Divider, Button, theme } from "antd";
import "../Header/Header.css";
const { useToken } = theme;
const items = [
  {
    key: "1",
    label: (
      <a
        rel="noopener noreferrer"
        href="/login"
        className="font-semibold text-lg">
        Login
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        rel="noopener noreferrer"
        href="/register"
        className="font-semibold text-lg">
        Register
      </a>
    ),
  },
];
const Header = () => {
  const { token } = useToken();
  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };
  const menuStyle = {
    boxShadow: "none",
  };
  return (
    <div className="bg-black w-full">
      <div className="d-flex justify-content-around align-items-center p-4 ">
        <div className="brand_logo d-flex align-items-center">
          <a href="/">
            <i
              class="fa-brands fa-airbnb fs-1"
              style={{
                color: "#fff",
              }}></i>
          </a>
          <a href="/">
            <p
              className="fw-bold fs-3"
              style={{
                marginLeft: "6px",
                color: "#fff",
              }}>
              Airbnb
            </p>
          </a>
        </div>

        <div>
          <a
            className="link"
            href="#"
            style={{
              textDecoration: "none",
              color: "#fff",
              fontSize: "20px",
              marginRight: "15px",
            }}>
            Nơi ở
          </a>
          <a
            className="link"
            href="#"
            style={{
              textDecoration: "none",
              color: "#fff",
              fontSize: "20px",
              marginRight: "15px",
            }}>
            Trải nghiệm
          </a>
          <a
            className="link"
            href="#"
            style={{
              textDecoration: "none",
              color: "#fff",
              fontSize: "20px",
            }}>
            Trải nghiệm thực tế
          </a>
        </div>
        <div className="fs-4">
          <a
            className="link"
            href="#"
            style={{
              textDecoration: "none",
              color: "#fff",
              marginRight: "15px",
              fontSize: "20px",
            }}>
            Đón tiếp khách
          </a>

          <Dropdown
            menu={{
              items,
            }}
            dropdownRender={(menu) => (
              <div style={contentStyle}>
                {React.cloneElement(menu, {
                  style: menuStyle,
                })}
                <Divider
                  style={{
                    margin: 0,
                  }}
                />
              </div>
            )}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <i className="fa-solid fa-user text-white cursor-pointer"></i>
                {/* <DownOutlined /> */}
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;
