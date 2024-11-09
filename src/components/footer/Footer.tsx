import Image from "next/image";
import Link from "next/link";
import React from "react";
import FeedCard from "./FeedCard";

export default function Footer() {
  const link = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About Us",
      url: "/about-us",
    },
    {
      title: "Booking Course",
      url: "/booking",
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
  return (
    <>
      {/* ui for PC  */}
      <div
        className="h-[450px] w-full hidden md:block relative bottom-0"
        style={{
          backgroundImage: "url(/assets/images/footer/footer.jpg)",
          backgroundColor: "#11191c",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "top right",
          backgroundOrigin: "content-box",
        }}
      >
        <div className="w-full h-full text-white flex justify-around items-start pt-[100px]">
          <div className="flex justify-start items-start">
            <div className="space-y-[50px] ">
              <div className="w-[80px] aspect-square relative rounded-full">
                <Image
                  src="/assets/images/logo/logo1.jpg"
                  fill
                  sizes="auto"
                  alt="logo"
                  className="rounded-full"
                />
              </div>

              <div className="flex justify-start items-start space-x-[10px]">
                <div className="w-[40px] aspect-square relative">
                  <Image
                    src="/assets/images/icons/duoAccount.svg"
                    fill
                    sizes="auto"
                    alt="duoAccount"
                  />
                </div>

                <div className="leading-5">
                  <p className="uppercase text-[16px] font-semibold text-white/20">
                    Join our academy
                  </p>
                  <p className="text-[13px]">qnacademy@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="space-y-[30px]">
              <p className="w-[350px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been
              </p>
              <div className="w-full flex justify-end items-start pr-[50px] pt-[15px]">
                <div className="flex justify-start items-start space-x-[10px]">
                  <div className="w-[40px] aspect-square relative">
                    <Image
                      src="/assets/images/icons/mail.svg"
                      fill
                      sizes="auto"
                      alt="mail"
                    />
                  </div>

                  <div className="leading-5">
                    <p className="uppercase text-[16px] font-semibold text-white/20">
                      Contact Us
                    </p>
                    <p className="text-[13px]">contact@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-[30px]">
            <p className="text-[30px] font-[500]">Quick Links</p>
            <div className="space-y-[10px]">
              {link?.map((x) => (
                <Link href={x?.url} className="block" key={x.url}>
                  {x?.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-[30px]">
            <p className="text-[30px] font-[500]">Facebook feed</p>

            <div className="space-y-[10px]">
              <FeedCard image="/assets/images/gallery/gallery.jpg" />
              <FeedCard image="/assets/images/gallery/gallery.jpg" />
            </div>
          </div>
        </div>
      </div>

      {/* ui for MO  */}
      <div
        className="h-[200px] w-full md:hidden relative bottom-0"
        style={{
          backgroundImage: "url(/assets/images/footer/footer.jpg)",
          backgroundColor: "#11191c",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "top right",
          backgroundOrigin: "content-box",
        }}
      >
        <div className="w-full h-full text-white flex justify-around items-start pt-[20px]">
          <div className="flex justify-start items-start">
            {/* <div className="space-y-[50px] ">
              <div className="w-[80px] aspect-square relative rounded-full">
                <Image
                  src="/assets/images/logo/logo1.jpg"
                  fill
                  sizes="auto"
                  alt="logo"
                  className="rounded-full"
                />
              </div>

              <div className="flex justify-start items-start space-x-[10px]">
                <div className="w-[40px] aspect-square relative">
                  <Image
                    src="/assets/images/icons/duoAccount.svg"
                    fill
                    sizes="auto"
                    alt="duoAccount"
                  />
                </div>

                <div className="leading-5">
                  <p className="uppercase text-[16px] font-semibold text-white/20">
                    Join our academy
                  </p>
                  <p className="text-[13px]">qnacademy@gmail.com</p>
                </div>
              </div>
            </div> */}

            {/* <div className="space-y-[30px]">
              <p className="w-full">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been
              </p>
              <div className="w-full flex justify-end items-start pr-[50px] pt-[15px]">
                <div className="flex justify-start items-start space-x-[10px]">
                  <div className="w-[40px] aspect-square relative">
                    <Image
                      src="/assets/images/icons/mail.svg"
                      fill
                      sizes="auto"
                      alt="mail"
                    />
                  </div>

                  <div className="leading-5">
                    <p className="uppercase text-[16px] font-semibold text-white/20">
                      Contact Us
                    </p>
                    <p className="text-[13px]">contact@gmail.com</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
