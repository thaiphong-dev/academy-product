/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import MenuItem from "./MenuItem";
import { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
// import Sidebar from "../sideBarMenu/SideBarMenu";

import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("../sideBarMenu/SideBarMenu"), {
  ssr: false,
});
const Bottommenu = () => {
  const router = useRouter();

  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [showDefault, setShowDefault] = useState(false);

  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const previousScrollY = useRef(0);
  const timeoutRef = useRef<any>(null);

  const handleDebounce = () => {
    setShowDefault(false);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setShowDefault(true);
    }, 700);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      const currentScrollY =
        window.pageYOffset || document.documentElement.scrollTop;
      const isUp = previousScrollY.current > currentScrollY;
      previousScrollY.current = currentScrollY;

      handleDebounce();
      setIsScrollingUp(isUp);
      setIsAtTop(scrollTop === 0);
      setIsAtBottom(scrollTop + clientHeight >= scrollHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderMenuMemo = useMemo(() => {
    return (
      <>
        {router.asPath === "/" ? (
          <MenuItem
            asPath={router.asPath}
            imageActiveLink="/assets/images/icons/menu.svg"
            imageLink="/assets/images/icons/menu.svg"
            isLink={false}
            title="Menu"
            handleClick={() => setIsSidebarOpen(true)}
          />
        ) : (
          <div className="flex justify-between items-center bg-white w-[50%] h-full rounded-tr-[5px] relative z-[1000] shadow-modetour-shadow">
            <MenuItem
              asPath={router.asPath}
              imageActiveLink="/assets/images/icons/arrowLeft.svg"
              imageLink="/assets/images/icons/arrowLeft.svg"
              isLink={false}
              handleClick={() => router.back()}
            />

            <MenuItem
              asPath={router.asPath}
              imageActiveLink="/assets/images/icons/arrowRight.svg"
              imageLink="/assets/images/icons/arrowRight.svg"
              isLink={false}
              handleClick={() => router.back()}
            />
          </div>
        )}
      </>
    );
  }, [router]);
  return (
    <>
      <div
        className={`fixed bottom-0 left-0 w-full !bg-transparent h-[60px] sm:h-[68px] md:h-[75px] z-40 md:hidden transition-all duration-300  ${
          !isScrollingUp && !isAtBottom && !isAtTop && !showDefault
            ? "translate-y-[60px] opacity-0"
            : "translate-y-[0px] opacity-100"
        }  `}
      >
        <div className="w-full min-w-[375px] text-color-text-gray h-full">
          <div className="flex justify-around items-center text-[11px] font-semibold md:text-[15px] h-full">
            <div className="flex justify-around items-center bg-white w-full h-full rounded-tr-[5px] relative z-[1000] shadow-modetour-shadow">
              {renderMenuMemo}

              <MenuItem
                asPath={router.asPath ?? ""}
                imageActiveLink="/assets/images/icons/bell.svg"
                imageLink="/assets/images/icons/bell.svg"
                link="/notification"
                title="Thông báo"
              />
            </div>

            <div className={styles.parrent}>
              <div className={styles.square}></div>
              <div className={styles.logo}>
                {/* <Image alt="post" fill sizes="auto" src="/images/bottomMenu/postAds.svg" /> */}
                <Link
                  className="flex w-[50px] aspect-square rounded-full bg-color-main-idea justify-center items-center  "
                  href="/dang-tin-cho-thue"
                  onClick={() => {
                    localStorage.setItem("target_page", "/dang-tin-cho-thue");
                  }}
                >
                  <div className=" w-[80px] aspect-square relative rounded-full">
                    <Image
                      alt="post"
                      fill
                      sizes="auto"
                      src="/assets/images/logo/logo.jpg"
                      className="rounded-full"
                    />
                  </div>
                </Link>
              </div>
            </div>

            <div className="flex justify-around items-center bg-white w-full h-full rounded-tl-[5px] relative z-[1000] shadow-modetour-shadow">
              <MenuItem
                asPath={router.asPath ?? ""}
                imageActiveLink="/assets/images/icons/booking.svg"
                imageLink="/assets/images/icons/booking.svg"
                link="/booking"
                title={"Đăng ký"}
              />

              <MenuItem
                asPath={router.asPath ?? ""}
                imageActiveLink="/assets/images/icons/user.svg"
                imageLink="/assets/images/icons/user.svg"
                link="/me"
                title={"Tài khoản"}
              />
            </div>
          </div>
        </div>
      </div>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Bottommenu;
