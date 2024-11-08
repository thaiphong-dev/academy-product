import React from "react";

interface Props {
  image: string;
  title: string;
}
const PictureCard = ({ image, title }: Props) => {
  return (
    <div
      className="w-[310px] h-[250px] relative text-white rounded-[20px]"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-[15px] text-center w-fit uppercase absolute bottom-6 left-5 bg-black/60 px-[20px] py-[5px] rounded-[5px]">
        {title}
      </div>
    </div>
  );
};

export default PictureCard;
