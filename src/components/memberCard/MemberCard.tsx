import React from "react";
interface Props {
  image: string;
  name: string;
  role: string;
}
const MemberCard = ({ role, image, name }: Props) => {
  return (
    <div
      className="h-[500px] w-[350px] relative text-white"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-[25px] text-center w-full uppercase absolute bottom-10 bg-black/40 px-[20px] py-[5px] rounded-[5px]">
        <span className="text-yellow-300 ">{role}</span> {name}
      </div>
    </div>
  );
};

export default MemberCard;
