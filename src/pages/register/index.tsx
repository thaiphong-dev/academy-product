import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button, Input, Form, message } from "antd";
import Link from "next/link";

const Register = () => {
  const [loading, setLoading] = useState(false);

  const handleRegister = () => {
    setLoading(true);
    setTimeout(() => {
      message.success("Registration successful!");
      setLoading(false);
    }, 1500);
  };

  return (
    <motion.div
      className="flex justify-center items-center h-screen bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Đăng ký</h2>
        <Form layout="vertical" onFinish={handleRegister}>
          <Form.Item
            label="Họ và tên"
            name="name"
            rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}
          >
            <Input placeholder="Họ và tên" />
          </Form.Item>
          <Form.Item
            label="Số điện thoại"
            name="phone"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập số điện thoại!",
              },
            ]}
          >
            <Input type="tel" placeholder="Số điện thoại" />
          </Form.Item>
          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password placeholder="Mật khẩu" />
          </Form.Item>
          <Form.Item
            label="Nhập lại mật khẩu"
            name="confirmPassword"
            rules={[
              { required: true, message: "Vui lòng nhập lại mật khẩu!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Mật khẩu không trùng khớp!")
                  );
                },
              }),
            ]}
          >
            {" "}
            <Input.Password placeholder="Nhập lại mật khẩu" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
        <div className="text-center mt-4">
          <p>
            Đã có tài khoản?{" "}
            <Link href="/login" className="text-main hover:underline">
              Đăng nhập ngay
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Register;
