import Banner from "@/components/banner/Banner";
import SubBanner from "@/components/banner/SubBanner";
import Header from "@/components/header/Header";
import React from "react";
import TrainPrograms from "./program/TrainPrograms";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <SubBanner />
      <TrainPrograms />
    </div>
  );
};

export default HomePage;
