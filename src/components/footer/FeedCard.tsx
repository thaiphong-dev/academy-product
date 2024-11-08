import Image from "next/image";
import React from "react";

const FeedCard = ({ image }: { image: string }) => {
  return (
    <div className="flex justify-start items-start space-x-[20px]">
      <div className="relative w-[100px] aspect-square">
        <Image src={image} alt="feed" fill sizes="auto" />
      </div>
      <div className="space-y-[5px]">
        <div className="bg-main w-fit px-[15px] py-[5px] rounded-[7px]">
          <p>Badminton</p>
        </div>
        <p>Lorem Ipsum is simply dummy</p>
        <p>Nov 15, 2024</p>
      </div>
    </div>
  );
};

export default FeedCard;
