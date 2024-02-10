import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { POPUP_NAME, usePopup } from "../../../../assets/usePopup/usePopup";
import { useSelector } from "react-redux";
import { userLocalStorage } from "../../../../utils/Local";
import { Avatar, Button, Dropdown } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";
import AvatarIcon from "../../../../assets/img/user.jpg"
const NavBar = () => {
  const navigate = useNavigate();
  const popup = usePopup();
  const { user } = useSelector((state) => state.auth) || {};
  const { token } = user || {};
  const handleLogout = () => {
    userLocalStorage.remove();
    window.location.reload();
  };
  const handleToggleAuth = (type) => {
    if (type === "login") {
      popup.open(POPUP_NAME.LOGIN);
      return;
    } else if (type === "register") {
      popup.open(POPUP_NAME.REGISTER);
      return;
    }
    navigate("/profile");
  };

  const renderUserButton = (type) => {
    let buttonText = "";
    switch (type) {
      case "login":
        buttonText = "Đăng nhập";
        break;
      case "register":
        buttonText = "Đăng ký";
        break;
      default:
        buttonText = "Thông tin cá nhân";
        break;
    }
    return (
      <Button
        className="text-black w-full h-full shadow-none border-none text-left hover:!border-none hover:!bg-transparent p-0 hover:!text-black"
        onClick={() => {
          handleToggleAuth(type);
        }}>
        {buttonText}
      </Button>
    );
  };

  const renderLogoutButton = () => {
    return (
      <Button
        className="text-black w-full h-full shadow-none border-none text-left hover:!border-none hover:!bg-transparent p-0 hover:!text-black"
        onClick={handleLogout}>
        Đăng xuất
      </Button>
    );
  };

  const items = [
    token
      ? { label: "Chuyến đi", key: "0" }
      : {
          label: renderUserButton("register"),
          key: "0",
        },
    token
      ? { label: renderUserButton(""), key: "1" }
      : {
          label: renderUserButton("login"),
          key: "1",
        },
    {
      type: "divider",
    },
    {
      label: "Cho thuê nhà",
      key: "3",
    },
    {
      label: "Tổ chức trải nghiệm",
      key: "4",
    },
    {
      label: "Trợ giúp",
      key: "5",
    },
    token && { label: renderLogoutButton(), key: "6" },
  ];
  return (
    <>
      <button className="py-1 px-3">
        <NavLink to={"/"} className="font-semibold">
          Trở thành chủ nhà
        </NavLink>
      </button>
      <div className="mr-6 ml-3 cursor-pointer">
        <FontAwesomeIcon icon={faGlobe} />
      </div>
      <Dropdown
        menu={{ items }}
        trigger={["click"]}
        placement="topRight"
        overlayStyle={{ width: "200px" }}>
        <div className="profile space-x-3 flex items-center cursor-pointer">
          <FontAwesomeIcon icon={faBars} />
          <Avatar src={AvatarIcon} size={30} />
        </div>
      </Dropdown>
    </>
  );
};

export default NavBar;
