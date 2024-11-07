import Banner from "@/components/banner/Banner";
import SubBanner from "@/components/banner/SubBanner";
import Header from "@/components/header/Header";
import React from "react";
import TrainPrograms from "./program/TrainPrograms";
import dynamic from "next/dynamic";

const Coaches = dynamic(() => import("./coaches/Coaches"), {
  ssr: false,
});
const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <SubBanner />
      <TrainPrograms />
      <Coaches />
    </div>
  );
};

export default HomePage;
