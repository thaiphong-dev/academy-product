import Banner from "@/components/banner/Banner";
import SubBanner from "@/components/banner/SubBanner";
import React from "react";
import TrainPrograms from "./program/TrainPrograms";
import dynamic from "next/dynamic";
import OurGallery from "./gallery/OurGallery";
import PromoBanner from "./promoBanner/PromoBanner";

const Coaches = dynamic(() => import("./coaches/Coaches"), {
  ssr: false,
});
const HomePage = () => {
  return (
    <div>
      <Banner />
      <SubBanner />
      <TrainPrograms />
      <Coaches />
      <PromoBanner />
      <OurGallery />
    </div>
  );
};

export default HomePage;
