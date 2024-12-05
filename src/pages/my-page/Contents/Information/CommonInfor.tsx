/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  Button,
  Form,
  Image,
  Input,
  Upload,
  UploadFile,
  UploadProps,
} from "antd/lib";
import { PlusOutlined } from "@ant-design/icons";
import { FileType, GetBase64 } from "@/utils/image";

const CommonInfor = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await GetBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );
  const handleSubmit = (values: any) => {
    console.log("Form Submitted:", values);
    // Add your update logic here
  };
  return (
    <>
      <div className="md:flex hidden flex-col space-y-3  bg-white p-[20px] drop-shadow rounded-[10px]">
        <div className="text-[20px] font-semibold">Thông tin tài khoản</div>
        <Form layout="vertical" onFinish={handleSubmit}>
          <div className="flex justify-start items-start space-x-12">
            <div className="pl-[20px]">
              <Upload
                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                listType="picture-circle"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
              >
                {fileList.length >= 8 ? null : uploadButton}
              </Upload>
              {previewImage && (
                <Image
                  alt="upload"
                  wrapperStyle={{ display: "none" }}
                  preview={{
                    visible: previewOpen,
                    onVisibleChange: (visible) => setPreviewOpen(visible),
                    afterOpenChange: (visible) =>
                      !visible && setPreviewImage(""),
                  }}
                  src={previewImage}
                />
              )}
            </div>
            <div className="flex flex-col w-full">
              <Form.Item
                label="Họ và tên"
                name="name"
                rules={[{ required: true, message: "Họ và tên là bắt buộc!" }]}
              >
                <Input placeholder="Nguyễn Văn A" />
              </Form.Item>
              <div className="flex justify-between items-center space-x-[10px]">
                <Form.Item
                  className="w-full"
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Email là bắt buộc!" },
                    { type: "email", message: "Vui lòng nhập email hợp lệ!" },
                  ]}
                >
                  <Input placeholder="example@gmail.com" />
                </Form.Item>
                <Form.Item
                  className="w-full"
                  label="Số điện thoại"
                  name="phone"
                  rules={[
                    { required: true, message: "Số điện thoại là bắt buộc!" },
                    {
                      pattern: /^[0-9]{10,11}$/,
                      message: "Số điện thoại không hợp lệ!",
                    },
                  ]}
                >
                  <Input placeholder="0123456789" />
                </Form.Item>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-1">
            <Button
              type="primary"
              htmlType="submit"
              className="h-[40px] w-[100px]"
            >
              Cập nhật
            </Button>
          </div>
        </Form>
      </div>

      <div className="md:hidden space-y-3 bg-white p-[20px] drop-shadow rounded-[10px]">
        <div className="text-[20px] font-semibold">Thông tin tài khoản</div>
        <Form layout="vertical" onFinish={handleSubmit}>
          <div className="flex flex-col justify-center items-center ">
            <div className="pl-[20px]">
              <Upload
                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                listType="picture-circle"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
              >
                {fileList.length >= 8 ? null : uploadButton}
              </Upload>
              {previewImage && (
                <Image
                  alt="upload"
                  wrapperStyle={{ display: "none" }}
                  preview={{
                    visible: previewOpen,
                    onVisibleChange: (visible) => setPreviewOpen(visible),
                    afterOpenChange: (visible) =>
                      !visible && setPreviewImage(""),
                  }}
                  src={previewImage}
                />
              )}
            </div>
            <div className="flex flex-col w-full">
              <Form.Item
                label="Họ và tên"
                name="name"
                rules={[{ required: true, message: "Họ và tên là bắt buộc!" }]}
              >
                <Input placeholder="Nguyễn Văn A" />
              </Form.Item>
              <div className="flex justify-between items-center space-x-[10px]">
                <Form.Item
                  className="w-full"
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Email là bắt buộc!" },
                    { type: "email", message: "Vui lòng nhập email hợp lệ!" },
                  ]}
                >
                  <Input placeholder="example@gmail.com" />
                </Form.Item>
                <Form.Item
                  className="w-full"
                  label="Số điện thoại"
                  name="phone"
                  rules={[
                    { required: true, message: "Số điện thoại là bắt buộc!" },
                    {
                      pattern: /^[0-9]{10,11}$/,
                      message: "Số điện thoại không hợp lệ!",
                    },
                  ]}
                >
                  <Input placeholder="0123456789" />
                </Form.Item>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-1">
            <Button
              type="primary"
              htmlType="submit"
              className="h-[40px] w-[100px]"
            >
              Cập nhật
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default CommonInfor;
