import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button, Input, Form, message } from "antd";
import Link from "next/link";
const Login = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      message.success("Login successful!");
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
        <h2 className="text-2xl font-bold mb-4 text-center">Đăng nhập</h2>
        <Form layout="vertical" onFinish={handleLogin}>
          <Form.Item
            label="Số điện thoại"
            name="phone"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại!" },
            ]}
          >
            <Input type="tel" placeholder="Số điện thoại" />
          </Form.Item>
          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={loading}
              className="h-[40px] w-[100px]"
            >
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
        <div className="text-center mt-4">
          <p>
            Bạn chưa có tài khoản?{" "}
            <Link href="/register" className="text-main hover:underline">
              Đăng ký ngay
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
