import React from "react";

export default function Banner() {
  return (
    <div
      className="h-screen w-full"
      style={{
        backgroundImage: "url(/assets/images/banner/banner.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundOrigin: "content-box",
      }}
    >
      <div className="h-screen w-full absolute top-0 z-10 bg-black/30"></div>

      <div className="absolute top-[40%] left-[10%] z-20 uppercase w-[700px] space-y-[20px]">
        <p className="text-yellow-300 text-[55px] font-bold leading-[50px] ">
          Unleash your True potential
        </p>
        <p className="text-white text-[18px] font-[500]">
          Excellence through Mastery of Physics and Skills
        </p>
        <div className="py-[15px] px-[20px] w-fit bg-yellow-300 rounded-[20px] text-green-600 text-[18px] font-[500] hover:bg-main hover:text-white transition-all duration-200 cursor-pointer">
          Join with us
        </div>
      </div>
    </div>
  );
}