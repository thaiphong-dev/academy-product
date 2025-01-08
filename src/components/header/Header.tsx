import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("../sideBarMenu/SideBarMenu"), {
  ssr: false,
});
const Header = () => {
  const headerList = [
    {
      title: "Trang chủ",
      url: "/",
    },
    {
      title: "Về chúng tôi",
      url: "/about-us",
    },
    {
      title: "Đăng ký",
      url: "/booking",
    },
    {
      title: "Huấn luyện viên",
      url: "/coaches",
    },
    {
      title: "Cửa hàng",
      url: "/shop",
    },
    {
      title: "Liên hệ",
      url: "/contact",
    },
  ];
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* ui for PC  */}
      <div className="w-full justify-center items-center py-[10px] fixed top-0 bg-white z-50 hidden md:flex ">
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
                className="rounded-full"
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
                src="/assets/images/icons/bell.svg"
                fill
                sizes="auto"
                alt="bell"
              />
            </div>
            <div className="w-[28px] aspect-square relative cursor-pointer">
              <Image
                src="/assets/images/icons/cart.svg"
                fill
                sizes="auto"
                alt="cart"
              />
            </div>
            <div
              onClick={() => {
                router.push({
                  pathname: "/my-page",
                  query: {
                    tab: "registerInfor",
                  },
                });
              }}
              className="w-[28px] aspect-square relative cursor-pointer"
            >
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

      {/* ui for MO  */}
      <div className="w-full justify-center items-center py-[10px] fixed top-0 bg-white z-50 flex  md:hidden ">
        <div className="flex justify-between items-center w-full px-[10px]">
          <div className="flex justify-start items-center space-x-[40px]">
            <div
              onClick={() => router.push("/")}
              className="w-[40px] aspect-square relative rounded-full cursor-pointer"
            >
              <Image
                src="/assets/images/logo/logo.jpg"
                fill
                sizes="auto"
                alt="logo"
              />
            </div>
          </div>

          {router.asPath !== "/" && (
            <div className="flex justify-between items-center space-x-[20px]">
              <div
                onClick={() => setIsSidebarOpen(true)}
                className="w-[28px] aspect-square relative cursor-pointer"
              >
                <Image
                  src="/assets/images/icons/menu.svg"
                  fill
                  sizes="auto"
                  alt="menu"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Header;
