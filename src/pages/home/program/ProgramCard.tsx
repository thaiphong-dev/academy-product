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
        count && count % 2 === 0 ? "flex-row-reverse" : "space-x-[100px]"
      }`}
    >
      <div className={`${count && count % 2 === 0 ? "pl-[100px]" : ""}`}>
        <div className="!w-[590px] !h-[310px] relative">
          {image ? (
            <Image
              className="rounded-[20px]"
              src={image}
              fill
              sizes="auto"
              alt="img"
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
          <div className="w-fit px-[40px] py-[10px] bg-main rounded-[10px] text-white hover:bg-[#2F88A6] cursor-pointer transition-all duration-150">
            {buttonTitle}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgramCard;
