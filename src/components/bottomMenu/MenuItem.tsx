import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  asPath: string;
  imageLink: string;
  imageActiveLink: string;
  title?: string;
  link?: string;
  handleClick?: () => void;
  isLink?: boolean;
}
function MenuItem({
  asPath,
  imageLink,
  imageActiveLink,
  title,
  link,
  isLink = true,
  handleClick,
}: Props) {
  const isActive = asPath === link;
  const router = useRouter();
  return (
    <div
      className="flex flex-col justify-center items-center whitespace-nowrap w-[45px] "
      onClick={(e) => {
        if (isLink && link) {
          localStorage.setItem("target_page", link);
          router.push(link);
        } else {
          e.stopPropagation();
          handleClick?.();
        }
      }}
    >
      <div>
        <Image
          alt={title ?? ""}
          height={22}
          src={isActive ? imageActiveLink : imageLink}
          width={22}
        />
      </div>
      <span className={`ml-1 mt-1 ${isActive ? "text-color-main-idea" : ""}`}>
        {title}
      </span>
    </div>
  );
}

export default MenuItem;
