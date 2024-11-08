import React from "react";

export default function PromoBanner() {
  return (
    <>
      {/* ui for PC  */}
      <div
        className="h-[500px] w-full relative md:block hidden"
        style={{
          backgroundImage: "url(/assets/images/banner/banner1.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundOrigin: "content-box",
        }}
      >
        <div className="h-[500px] w-full absolute top-0 z-10 bg-black/30"></div>

        <div className="absolute top-[30%] w-full z-20 uppercase flex flex-col justify-center items-center space-y-[20px]">
          <div className=" w-[1000px] flex flex-col justify-center items-center text-center space-y-[20px]">
            <p className="text-yellow-300 text-[45px] font-bold leading-[50px] ">
              join the Quy Nhon academy family
            </p>
            <p className="text-white text-[18px] font-[500]">
              Ready to take your badminton skills to the next level? Join us for
              a class and see how our professional coaches can help you excel on
              the court.
            </p>
            <div className="py-[10px] px-[25px] w-fit bg-main text-white rounded-[20px]  text-[16px] font-[500] hover:bg-[#2F88A6] hover:text-white transition-all duration-200 cursor-pointer">
              Register now
            </div>
          </div>
        </div>
      </div>

      {/* ui for MO  */}
      <div
        className="h-[300px] w-full relative md:hidden"
        style={{
          backgroundImage: "url(/assets/images/banner/banner1.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundOrigin: "content-box",
        }}
      >
        <div className="h-[300px] w-full absolute top-0 z-10 bg-black/30"></div>

        <div className="absolute top-[40%] w-full z-20 uppercase flex flex-col justify-center items-center space-y-[20px]">
          <div className=" w-full flex flex-col justify-center items-center text-center">
            <p className="text-yellow-300 text-[20px] font-bold leading-[20px] ">
              join the Quy Nhon academy family
            </p>
            <p className="text-white text-[10px] font-[500]">
              Ready to take your badminton skills to the next level? Join us for
              a class and see how our professional coaches can help you excel on
              the court.
            </p>
            <div className="py-[10px] px-[15px] w-fit bg-main text-white rounded-[20px]  text-[16px] font-[500] transition-all duration-200 cursor-pointer">
              Register now
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
