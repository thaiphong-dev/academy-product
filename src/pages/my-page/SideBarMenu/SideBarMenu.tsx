import React from "react";

const SideBarMenu = () => {
  return (
    <div className="min-w-[210px]">
      <div className="text-[26px] mb-[20px] font-semibold text-main pb-[15px] border-b-[2px] border-main">
        Tài khoản của tôi
      </div>
      <div>
        <div className="py-[10px] text-[18px] border-b-[2px] border-gray-300 ">
          <p className="cursor-pointer hover:text-main"> Thông tin đăng ký</p>
        </div>
        <div className="py-[10px] text-[18px] border-b-[2px] border-gray-300">
          <p className="cursor-pointer hover:text-main"> Học phí</p>
        </div>
        <div className="py-[10px] text-[18px] border-b-[2px] border-gray-300">
          <p className="cursor-pointer hover:text-main"> Thông báo</p>
        </div>
        <div className="py-[10px] text-[18px] border-b-[2px] border-gray-300">
          <p className="cursor-pointer hover:text-main"> Trung tâm hỗ trợ</p>
        </div>
      </div>
    </div>
  );
};

export default SideBarMenu;
