import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const headerList = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About Us",
      url: "/about-us",
    },
    {
      title: "Our Coaches",
      url: "/coaches",
    },
    {
      title: "Shop",
      url: "/shop",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ];
  const router = useRouter();
  return (
    <div className="w-full flex justify-center items-center py-[10px] fixed top-0 bg-white z-50 ">
      <div className="flex justify-between items-center w-[1200px]">
        <div className="flex justify-start items-center space-x-[40px]">
          <div
            onClick={() => router.push("/")}
            className="w-[80px] aspect-square relative rounded-full cursor-pointer"
          >
            <Image
              src="/assets/images/logo/logo.jpg"
              fill
              sizes="auto"
              alt="logo"
            />
          </div>

          <div className="flex justify-between items-center space-x-[50px] text-[20px] font-[500]">
            {headerList?.map((x) => (
              <Link href={x?.url} className="relative group" key={x?.url}>
                <div className=" hover:text-main w-fit leading-5 cursor-pointer">
                  {x?.title}
                </div>
                <div className="absolute left-0 h-[2px] bg-main w-0 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center space-x-[20px]">
          <div className="w-[28px] aspect-square relative cursor-pointer">
            <Image
              src="/assets/images/icons/cart.svg"
              fill
              sizes="auto"
              alt="cart"
            />
          </div>
          <div className="w-[28px] aspect-square relative cursor-pointer">
            <Image
              src="/assets/images/icons/user.svg"
              fill
              sizes="auto"
              alt="user"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
