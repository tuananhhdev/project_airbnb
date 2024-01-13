import React from "react";
import SearchLocation from "../../components/SearchLocation/SearchLocation";
import PageLocation from "../../components/PageLocation/PageLocation";
import Banner from "../../templates/UserTemplates/Banner";
const HomePage = () => {
  return (
    <div>
      <Banner />
      {/* <SearchLocation /> */}
      <PageLocation />
    </div>
  );
};

export default HomePage;
