import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

import { useSelector } from "react-redux";
import LoadingPages from "../../components/LoadingPages/LoadingPages";
import Headers from "./Header/Headers";
import Header from "../../templates/UserTemplates/Header/Header"
const UserTemplates = () => {
  const { isLoading } = useSelector((state) => state.loading);
  return (
    <>
      {isLoading ? <LoadingPages /> : null}
      <>
        {/* <Headers /> */}
        <Header />
        <Outlet />
        <Footer />
      </>
    </>
  );
};

export default UserTemplates;
