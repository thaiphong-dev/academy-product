import React from "react";
import SideBarMenu from "./SideBarMenu/SideBarMenu";
import Contents from "./Contents/Contents";

const Index = () => {
  return (
    <>
      <div className="md:flex hidden  justify-center items-center ">
        <div className="w-full max-w-[1200px] flex justify-between items-start py-[50px]">
          <SideBarMenu />
          <Contents />
        </div>
      </div>

      <div className="md:hidden  ">
        <div className="w-screen ">
          <Contents />
          <SideBarMenu />
        </div>
      </div>
    </>
  );
};

export default Index;
