import React from "react";
import PictureCard from "./PictureCard";

const OurGallery = () => {
  const mockPrograms = [
    {
      image: "/assets/images/gallery/gallery.jpg",
      title: "Young Cup 2023",
    },
    {
      image: "/assets/images/gallery/gallery1.jpg",
      title: "Young Cup 2023",
    },
    {
      image: "/assets/images/gallery/gallery2.jpg",
      title: "Young Cup 2023",
    },
    {
      image: "/assets/images/gallery/gallery3.jpg",
      title: "Young Cup 2023",
    },
    {
      image: "/assets/images/gallery/gallery.jpg",
      title: "Young Cup 2023",
    },
    {
      image: "/assets/images/gallery/gallery3.jpg",
      title: "Young Cup 2023",
    },
    {
      image: "/assets/images/gallery/gallery1.jpg",
      title: "Young Cup 2023",
    },
    {
      image: "/assets/images/gallery/gallery2.jpg",
      title: "Young Cup 2023",
    },
  ];
  return (
    <div className="w-full h-full relative ">
      <div className="pb-[100px] pt-[50px]">
        <div className="flex justify-center items-center py-[50px]">
          <p className="text-[35px] font-bold uppercase text-main">
            our lasted media
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full px-[40px] grid grid-cols-4 gap-y-[40px]">
            {mockPrograms?.map((x, index) => (
              <div
                key={index}
                className="flex justify-center items-center w-full h-full"
              >
                <PictureCard {...x} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurGallery;
