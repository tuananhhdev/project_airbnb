import React from "react";
import SearchLocation from "../../components/SearchLocation/SearchLocation";
import PageLocation from "../../components/PageLocation/PageLocation";
import Banner from "../../templates/UserTemplates/Banner";
import ProductHouse from "../../components/ProductHouse/ProductHouse";
const HomePage = () => {
  return (
    <div>
      <Banner />
      {/* <SearchLocation /> */}
      {/* <PageLocation /> */}
      <ProductHouse />
    </div>
  );
};

export default HomePage;
