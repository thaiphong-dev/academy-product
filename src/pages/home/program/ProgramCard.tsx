import Image from "next/image";
import React from "react";

interface Props {
  image?: string;
  buttonTitle?: string;
  video?: string;
  title?: string;
  subtitle?: string;
  content?: string;
  count?: number;
}
const ProgramCard = ({
  buttonTitle,
  content,
  image,
  subtitle,
  title,
  video,
  count,
}: Props) => {
  return (
    <div
      className={`flex justify-between items-start  ${
        count && count % 2 === 0 ? "md:flex-row-reverse" : "md:space-x-[100px]"
      } flex-col md:flex-row space-y-[20px] md:space-y-0`}
    >
      <div className={`${count && count % 2 === 0 ? "md:pl-[100px]" : ""} `}>
        <div className="md:!w-[590px] md:!h-[310px] min-w-full max-w-[700px] w-full aspect-video h-full  relative">
          {image ? (
            <Image
              className="rounded-[20px]"
              src={image}
              layout="responsive" // Makes the image responsive within the container
              width={350} // Set a base width for the image
              height={200} // Set a base height for the image, preserving aspect ratio
              alt="img"
              objectFit="cover" // Ensures the image fills the container width
            />
          ) : (
            video && (
              <video src={video} className="w-full rounded-lg " controls />
            )
          )}
        </div>
      </div>
      <div className="space-y-[20px]">
        <p className="uppercase text-[22px] font-bold">{title}</p>
        <p className="text-main uppercase font-semibold text-[18px]">
          {subtitle}
        </p>
        <div className="w-[30px] h-[2px] bg-main"></div>
        <p>{content}</p>

        {buttonTitle && (
          <div className="w-fit px-[40px] py-[10px] bg-main rounded-[10px] text-white hover:bg-white hover:text-main hover:border hover:border-main  cursor-pointer transition-all duration-150">
            {buttonTitle}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgramCard;
