import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

import Header from "../../templates/UserTemplates/Header/Header";
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
