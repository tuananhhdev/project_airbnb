import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

import { useSelector } from "react-redux";
import LoadingPages from "../../components/LoadingPages/LoadingPages";
import Header from "../../templates/UserTemplates/Header/Header";
import Headers from "./Header/Headers";
const UserTemplates = () => {
  return (
    <>
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    </>
  );
};

export default UserTemplates;
