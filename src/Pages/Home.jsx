import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Search from "../components/Search/Search";
import Yostd from "../components/Yostd/Yostd";
import Offers from "../components/Offers/Offers";

export const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Search />
      <Yostd />
      <Offers />
    </>
  );
};


