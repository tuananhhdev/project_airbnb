import React from "react";
// import SearchLocation from "../../components/SearchLocation/SearchLocation";
// import PageLocation from "../../components/PageLocation/PageLocation";
import Banner from "../../templates/UserTemplates/Banner";
import ProductHouse from "../../components/ProductHouse/ProductHouse";
import ListLocation from "../../components/ListLocation/ListLocation";
import SearchLocation from "../../components/SearchLocation/SearchLocation";
import PageLocation from "../../components/PageLocation/PageLocation";
import RoomList from "../../components/RoomList/RoomList";
const HomePage = () => {
  return (
    <div>
      <Banner />
      {/* <ListLocation /> */}
      {/* <PageLocation /> */}
      <RoomList />
    </div>
  );
};

export default HomePage;
