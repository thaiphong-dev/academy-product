import React from "react";
import VideoPlayer from "../videoPlayer/VideoPlayer";

const SubBanner = () => {
  return (
    <>
      {/* ui for PC  */}
      <div
        className="h-screen w-full relative md:block hidden"
        style={{
          backgroundImage: "url(/assets/images/banner/subbanner.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-screen w-full absolute top-0 z-10 bg-black/30"></div>
        <div className="flex justify-center items-center h-full w-full ">
          <div className="relative z-20 w-[1000px] h-full flex justify-center items-center flex-col space-y-[120px]">
            <p className="text-yellow-200 text-[35px] font-bold uppercase">
              badminton for all
            </p>

            <div className="flex justify-around items-center space-x-[40px]">
              <div className="text-white w-[50%]">
                <div className="max-w-[450px] space-y-[20px]">
                  <p>
                    If you’re looking for a badminton academy that focuses on
                    building a strong foundation in the fundamentals of the
                    game, look no further than our academy.
                  </p>
                  <p>
                    We believe that by starting with the basics, players can
                    develop a deep understanding of the game that will serve
                    them well throughout their playing career. Whether you’re a
                    kid or an adult, we have a program that will help you unlock
                    your true potential in badminton.
                  </p>
                </div>
              </div>

              <div>
                <VideoPlayer autoPlay={true} src="/assets/videos/video.mp4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ui for MO
       */}
      <div
        className="h-full w-full relative md:hidden"
        style={{
          backgroundImage: "url(/assets/images/banner/subbanner.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-full w-full absolute top-0 z-10 bg-black/30"></div>
        <div className="flex justify-center items-center h-full w-full py-[50px]">
          <div className="relative z-20 w-full h-full flex justify-center items-center flex-col  space-y-[20px]">
            <p className="text-yellow-200 text-[25px] font-bold uppercase">
              badminton for all
            </p>

            <div className="flex flex-col justify-around items-center px-[20px] space-y-[20px]">
              <div className="text-white w-full">
                <div className="max-w-[450px] space-y-[20px]">
                  <p>
                    If you’re looking for a badminton academy that focuses on
                    building a strong foundation in the fundamentals of the
                    game, look no further than our academy.
                  </p>
                  <p>
                    We believe that by starting with the basics, players can
                    develop a deep understanding of the game that will serve
                    them well throughout their playing career. Whether you’re a
                    kid or an adult, we have a program that will help you unlock
                    your true potential in badminton.
                  </p>
                </div>
              </div>

              <div>
                <VideoPlayer autoPlay={true} src="/assets/videos/video.mp4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubBanner;
