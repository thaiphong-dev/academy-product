import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const SideBarMenu = () => {
  const router = useRouter();
  const { tab } = router?.query;
  console.log(tab);

  const handleChangeTab = (key: string) => {
    let tabValue = "";
    switch (key) {
      case "registerInfor":
        tabValue = "registerInfor";
        break;
      case "tuitionFee":
        tabValue = "tuitionFee";
        break;
      case "notification":
        tabValue = "notification";
        break;
      case "customerCenter":
        tabValue = "customerCenter";
      default:
        break;
    }
    router.replace({
      query: {
        tab: tabValue,
      },
    });
  };

  const menuList = [
    {
      key: "registerInfor",
      name: "Thông tin đăng ký",
    },
    {
      key: "tuitionFee",
      name: "Học phí",
    },
    {
      key: "notification",
      name: "Thông báo",
    },
    {
      key: "customerCenter",
      name: "Trung tâm hỗ trợ",
    },
  ];
  return (
    <>
      <div className="min-w-[210px] md:block hidden">
        <div className="text-[26px] mb-[20px] font-semibold text-main pb-[15px] border-b-[2px] border-main">
          Tài khoản của tôi
        </div>
        <div>
          <div
            onClick={() => handleChangeTab("registerInfor")}
            className="py-[10px] text-[18px] border-b-[2px] border-gray-300 "
          >
            <p
              className="cursor-pointer hover:text-main"
              style={{
                color: tab === "registerInfor" ? "#ff923b" : "black",
              }}
            >
              Thông tin đăng ký
            </p>
          </div>
          <div
            onClick={() => handleChangeTab("tuitionFee")}
            className="py-[10px] text-[18px] border-b-[2px] border-gray-300"
          >
            <p
              className="cursor-pointer hover:text-main"
              style={{
                color: tab === "tuitionFee" ? "#ff923b" : "black",
              }}
            >
              Học phí
            </p>
          </div>
          <div
            onClick={() => handleChangeTab("notification")}
            className="py-[10px] text-[18px] border-b-[2px] border-gray-300"
          >
            <p
              className="cursor-pointer hover:text-main"
              style={{
                color: tab === "notification" ? "#ff923b" : "black",
              }}
            >
              Thông báo
            </p>
          </div>
          <div
            onClick={() => handleChangeTab("customerCenter")}
            className="py-[10px] text-[18px] border-b-[2px] border-gray-300"
          >
            <p
              className="cursor-pointer hover:text-main"
              style={{
                color: tab === "customerCenter" ? "#ff923b" : "black",
              }}
            >
              Trung tâm hỗ trợ
            </p>
          </div>
        </div>
      </div>

      <div className="min-w-[210px] md:hidden bg-white mt-[20px] ">
        <div>
          {menuList?.map((x) => (
            <div
              key={x?.key}
              style={{
                display: tab === x?.key ? "none" : "flex",
              }}
              onClick={() => handleChangeTab(x.key)}
              className="py-[20px] text-[18px]  border-b-[2px] pl-[20px] pr-[10px] border-gray-300 flex-row justify-between items-center"
            >
              <p className="cursor-pointer hover:text-main ">{x?.name}</p>
              <Image
                src={"/assets/images/icons/arrowRight.svg"}
                width={22}
                height={22}
                alt="arrowRight"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBarMenu;
