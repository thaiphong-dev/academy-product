import React from "react";
import { Layout, Menu } from "antd/lib";
import { CloseOutlined } from "@ant-design/icons";
const { Sider } = Layout;
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    {
      key: 1,
      label: "Trang chủ",
      url: "/",
    },
    {
      key: 2,
      label: "Về chúng tôi",
      url: "/about-us",
    },
    {
      key: 3,
      label: "Đăng ký",
      url: "/booking",
    },
    {
      key: 4,
      label: "Huấn luyện viên",
      url: "/coaches",
    },
    {
      key: 5,
      label: "Cửa hàng",
      url: "/shop",
    },
    {
      key: 6,
      label: "Liên hệ",
      url: "/contact",
    },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 transition-all ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-50 "
        onClick={onClose}
      />
      <Sider
        className="fixed left-0 top-0 h-full bg-white overflow-auto !w-screen"
        width={"100%"}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Quy Nhon Badminton</h2>
          <button onClick={onClose} className="p-2">
            <CloseOutlined className="text-gray-600" />
          </button>
        </div>
        <Menu
          mode="vertical"
          items={menuItems}
          className="border-none text-[16px] font-semibold"
        />
      </Sider>
    </div>
  );
};
export default Sidebar;
