import React, { useState } from "react";
import { Dropdown, Space, Divider, theme } from "antd";
import "../Header/Header.css";
import Banner from "../Banner";

const Header = () => {
  const { useToken } = theme;
  const items = [
    {
      key: "1",
      label: (
        <div>
          <a
            // onClick={showModal}
            rel="noopener noreferrer"
            href="/dangnhap"
            className="font-semibold text-lg">
            Đăng nhập
          </a>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <a
          rel="noopener noreferrer"
          href="/dangky"
          className="font-semibold text-lg">
          Đăng ký
        </a>
      ),
    },
  ];
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
    <div className="bg-black w-full fixed z-10">
      <div className="d-flex justify-content-around align-items-center p-4  ">
        <div className="brand_logo d-flex align-items-center">
          <a href="/">
            <i
              class="fa-brands fa-airbnb fs-1 text-pink-600"
              style={{
                color: "#fff",
              }}></i>
          </a>
          <a href="/">
            <p
              className="font-bold fs-3 text-pink-600"
              style={{
                marginLeft: "6px",
              }}>
              airbnb
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
                <div className="border-1 border-gray-700 px-5 py-1 rounded-full">
                  <i class="fa-solid fa-bars text-white cursor-pointer mr-4"></i>
                  <i
                    className="fa-solid fa-user text-white cursor-pointer"
                    style={{
                      transform: "translateY(-4px)",
                    }}></i>
                </div>

                {/* <DownOutlined /> */}
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
      {/* <div className="pb-14">
        <Banner />
        <div className="text-white text-2xl text-center mt-9">
          <h2>Nhờ có Host, mọi điều đều có thể</h2>
        </div>
      </div> */}
      {/* <div>
        <img src="" alt="" />
      </div> */}
    </div>
  );
};

export default Header;
