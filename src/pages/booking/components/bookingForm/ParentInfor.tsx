/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input, Select } from "antd";
import { Option } from "antd/es/mentions";
import React from "react";

const ParentInfor = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Số điện thoại hợp lệ:", values.phone);
  };

  return (
    <div className="w-[500px] h-full space-y-[20px] bg-black/5 px-[20px] py-[20px]">
      <div>
        <p className="text-[20px] font-semibold">Thông tin người đại diện</p>
      </div>

      <div>
        <Form form={form} name="parentInfo" onFinish={onFinish}>
          <Form.Item
            rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}
          >
            <label className="text-[16px]">
              Họ và Tên <span className="text-red-600">*</span>
            </label>
            <Input placeholder="Nhập họ và tên" />
          </Form.Item>

          <Form.Item
            name="gender"
            rules={[{ required: true, message: "Vui lòng chọn giới tính!" }]}
          >
            <label className="text-[16px]">
              Giới tính <span className="text-red-600">*</span>
            </label>
            <Select placeholder="Giới tính">
              <Option value="male">Nam</Option>
              <Option value="female">Nữ</Option>
              <Option value="other">Khác</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại!" },
              {
                pattern:
                  /^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5]|9[0-9])[0-9]{7}$/,
                message:
                  "Số điện thoại không hợp lệ. Vui lòng nhập đúng định dạng!",
              },
            ]}
          >
            <label className="text-[16px]">
              Số điện thoại <span className="text-red-600">*</span>
            </label>

            <Input placeholder="Nhập số điện thoại" style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item name="phone">
            <label className="text-[16px]">Email</label>

            <Input placeholder="Nhập Email" style={{ width: "100%" }} />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ParentInfor;