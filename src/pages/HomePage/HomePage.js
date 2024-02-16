import React from "react";
// import SearchLocation from "../../components/SearchLocation/SearchLocation";
// import PageLocation from "../../components/PageLocation/PageLocation";
import Banner from "../../templates/UserTemplates/Banner";
import ProductHouse from "../../components/StayEverywhere/StayEverywhere";
import ListLocation from "../../components/ListLocation/ListLocation";
import SearchLocation from "../../components/SearchLocation/SearchLocation";
import PageLocation from "../../components/NearLocation/NearLocation";
import RoomList from "../../components/RoomList/RoomList";
import Tabs from "../../components/Tabs/Tabs";
import NearLocation from "../../components/NearLocation/NearLocation";
import StayEverywhere from "../../components/StayEverywhere/StayEverywhere";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
const HomePage = () => {
  return (
    <div>
      <Banner />
      <NearLocation />
      <StayEverywhere />
      <Tabs />
      <RoomList />
      {/* <ScrollToTop /> */}
    </div>
  );
};

export default HomePage;
