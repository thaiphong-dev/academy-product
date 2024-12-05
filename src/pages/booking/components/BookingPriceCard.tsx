import React from "react";

const BookingPriceCard = ({
  type,
}: {
  type: "basic" | "adventage" | "private";
}) => {
  const mock = {
    basic: {
      title: "Cơ bản",
      eightB: "400.000",
      twelveB: "600.000",
      sixteenB: "800.000",
      twentyB: "1.000.000",
      twentyFourB: "1.200.000",
    },
    adventage: {
      title: "Nâng cao",
      eightB: "600.000",
      twelveB: "900.000",
      sixteenB: "1.200.000",
      twentyB: "1.500.000",
      twentyFourB: "1.800.000",
    },
    private: {
      title: "Đội nhóm",
      eightB: "600.000",
      twelveB: "900.000",
      sixteenB: "1.200.000",
      twentyB: "1.500.000",
      twentyFourB: "1.800.000",
    },
  };
  return (
    <div className="pb-[20px] h-full w-[350px] text-white bg-black rounded-[20px]">
      <div className=" flex flex-col justify-center items-center space-y-[10px] pt-[50px] text-center">
        <p className="text-[30px]">
          Học phí lớp <span className="font-bold">{mock?.[type]?.title}</span>
        </p>

        <div className="bg-white text-black text-[18px] font-bold px-[25px] py-[5px] leading-6">
          <p>Tập luyện đội nhóm</p>
          <p>1 giờ 30 phút/buổi</p>
        </div>

        <div className="space-y-[10px]">
          <div className="w-[300px] border-[2px] text-[#FFEBCD] border-[#FFEBCD]">
            <p>
              {mock?.[type]?.eightB} <span className="underline">đ</span>
            </p>
            <p>8 buổi - 1 tháng</p>
          </div>
          <div className="w-[300px] border-[2px] text-[#8DEEEE] border-[#8DEEEE]">
            <p>
              {mock?.[type]?.twelveB}
              <span className="underline">đ</span>
            </p>
            <p>12 buổi - 1 tháng</p>
          </div>
          <div className="w-[300px] border-[2px] text-[#76EEC6] border-[#76EEC6]">
            <p>
              {mock?.[type]?.sixteenB} <span className="underline">đ</span>
            </p>
            <p>16 buổi - 1 tháng</p>
          </div>
          <div className="w-[300px] border-[2px] text-[#F4A460] border-[#F4A460]">
            <p>
              {mock?.[type]?.twentyB} <span className="underline">đ</span>
            </p>
            <p>20 buổi - 1 tháng</p>
          </div>
          <div className="w-[300px] border-[2px] text-[#FF4500] border-[#FF4500]">
            <p>
              {mock?.[type]?.twentyFourB} <span className="underline">đ</span>
            </p>
            <p>24 buổi - 1 tháng</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPriceCard;
