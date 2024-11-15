import React from "react";
import BookingPriceCard from "./components/BookingPriceCard";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const ParentInfor = dynamic(
  () => import("./components/bookingForm/ParentInfor"),
  {
    ssr: false,
  }
);

const StudentInfor = dynamic(
  () => import("./components/bookingForm/StudentInfor"),
  {
    ssr: false,
  }
);
const Booking = () => {
  return (
    <>
      {/* UI for PC  */}
      <div className="md:block hidden">
        <div className="flex justify-center items-center flex-col  h-screen">
          <div className="flex justify-between items-center w-[1200px]">
            <BookingPriceCard type="basic" />

            <BookingPriceCard type="adventage" />

            <BookingPriceCard type="private" />
          </div>
        </div>

        {/* register  */}

        <div className="flex justify-center items-center ">
          <div className="w-[1200px] flex justify-between items-start">
            <ParentInfor />

            <StudentInfor />
          </div>
        </div>
      </div>

      {/* ui for MO  */}
      <div className="md:hidden space-y-[20px] pt-[10px]">
        <div className="flex justify-start items-center flex-col h-full mb-[50px]">
          <div className="flex justify-center w-[350px] items-center ">
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className="!m-0 !p-0 w-full">
                <BookingPriceCard type="basic" />
              </SwiperSlide>

              <SwiperSlide className="!m-0 !p-0 w-full">
                <BookingPriceCard type="adventage" />
              </SwiperSlide>

              <SwiperSlide className="!m-0 !p-0 w-full">
                <BookingPriceCard type="private" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="w-full flex justify-center items-center ">
          <p className="text-[22px] font-bold text-main">Đăng ký học viên</p>
        </div>
        {/* register  */}

        <div className="flex justify-center items-center ">
          <div className="w-screen flex flex-col justify-center items-start">
            <ParentInfor />
            <StudentInfor />
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
