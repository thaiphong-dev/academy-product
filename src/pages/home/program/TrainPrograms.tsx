import React from "react";
import ProgramCard from "./ProgramCard";

const TrainPrograms = () => {
  const mockPrograms = [
    {
      image: "/assets/images/mocks/mockdata.jpg",
      buttonTitle: "",
      video: "",
      title: "Junior & Teen Group Class",
      subtitle: "Ages 4 - 18",
      content:
        "Badminton is a social sport that emphasizes fair play, respect, and good sportsmanship. Our junior group classes will provide opportunities for your child to build their confidence and make new friends, while developing their potential as a badminton athlete.",
    },
    {
      image: "/assets/images/mocks/mockdata.jpg",

      buttonTitle: "",
      video: "",
      title: "Adult Group Classes",
      subtitle: "Ages 18 and up",
      content:
        "Our experienced coaches will provide you with valuable insights and techniques that will help you improve your badminton game. You’ll learn how to play better shots, move more efficiently on the court, and develop your strategic thinking to outsmart your opponents.",
    },
    {
      image: "/assets/images/mocks/mockdata.jpg",

      buttonTitle: "Book a Class",
      video: "",
      title: "Private & Small Group Training",
      subtitle: "All Ages",
      content:
        "Why settle for a one-size-fits-all approach to badminton training? Our private 1-to-1 sessions offer a customized experience that is tailored to your individual needs and goals. With personalized instruction and feedback from our experienced coaches, you’ll be able to make rapid progress and achieve your full potential on the court.",
    },
    {
      image: "",

      buttonTitle: "Learn More",
      video: "/assets/videos/video.mp4",
      title: "Holiday Camp",
      subtitle: "All Ages",
      content:
        "Get ready to elevate your kids’ badminton game to new heights through our comprehensive holiday camp training! Join our dedicated coaches as they help your child learn about crucial techniques, discipline and mindset used by professional badminton players themselves.",
    },
  ];
  return (
    <div className="w-full h-full ">
      <div className="pb-[100px]">
        <div className="flex justify-center items-center py-[50px]">
          <p className="text-[35px] font-bold uppercase text-main">
            training programs
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[1200px] space-y-[100px]">
            {mockPrograms?.map((x, index) => (
              <ProgramCard key={x.title} {...x} count={index + 1} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainPrograms;
