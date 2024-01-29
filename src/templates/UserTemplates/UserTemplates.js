import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Headers from "./Header/Header";

const UserTemplates = () => {
  return (
    <div>
      <Headers />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserTemplates;
