import React from "react";
import BookingPriceCard from "./components/BookingPriceCard";
import dynamic from "next/dynamic";

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
    <div className="">
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
  );
};

export default Booking;
