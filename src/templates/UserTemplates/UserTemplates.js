import React from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Headers from "./Header/Headers";

const UserTemplates = () => {
  return (
    <div>
      <Headers/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserTemplates;
