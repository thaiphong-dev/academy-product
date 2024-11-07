import MemberCard from "@/components/memberCard/MemberCard";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Coaches = () => {
  const mockCoaches = [
    {
      image: "/assets/images/coaches/bao.jpg",
      role: "coach",
      name: "Nguyen Bao",
    },
    {
      image: "/assets/images/coaches/aViet.jpg",
      role: "coach",
      name: "Thanh Viet",
    },
    {
      image: "/assets/images/coaches/tham.jpg",
      role: "coach",
      name: "Le Tham",
    },
  ];
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-[1200px] h-full space-y-[20px] pb-[50px]">
        <div className="flex justify-center items-center py-[50px] w-full">
          <p className="text-[35px] font-bold uppercase text-main">
            our coaches
          </p>
        </div>

        <div className="space-y-[20px]">
          <p className="uppercase text-[22px] font-bold text-main">
            Our Training Philosophy
          </p>

          <div className="w-[30px] h-[2px] bg-main"></div>
          <p>
            Our team of coaches comprises former national players and coaches,
            and seasoned players with years of competitive experience who have
            undergone rigorous training in the art of coaching. They bring a
            wealth of expertise, strategies, and insights to the table, creating
            a dynamic learning environment that fosters growth and excellence.
          </p>
          <p>
            Tailoring the programme to each participant’s needs and goals. We
            believe that every player is unique, and their coaching journey
            should reflect that. Our coaches take the time to assess the
            strengths and weaknesses of each individual, understanding their
            playing style, fitness level, and aspirations.
          </p>
        </div>
        <Swiper
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper"
        >
          {mockCoaches?.map((x) => (
            <SwiperSlide className="" key={x?.name}>
              <MemberCard {...x} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Coaches;
