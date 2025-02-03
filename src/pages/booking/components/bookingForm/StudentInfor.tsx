/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment, useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Modal,
  Select,
  Space,
  Upload,
} from "antd/lib";
import { CloseCircleOutlined, PlusOutlined } from "@ant-design/icons/lib";
import dayjs from "dayjs";
import styles from "./index.module.scss";
const StudentInfor = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Submitted values:", values);
  };

  const onFinishFailed = (values: any) => {
    console.log("Submission failed values:", values);
  };

  useEffect(() => {
    const students = form.getFieldValue("student");
    if (!students || students.length === 0) {
      form.setFieldsValue({
        student: [
          {
            fullname: "",
            gender: "",
            age: null,
            workingPlace: "",
            class: "",
            amount: "",
            pickUpService: false,
            avatar: [],
          },
        ],
      });
    }
  }, [form]);

  const handleChange = (name: any, fieldName: string, value: any) => {
    form.setFieldValue(["student", name, fieldName], value);
    setRefreshUpload(Math.random());
  };

  const [refresh, setRefresh] = useState(Math.random());
  const [refreshUpload, setRefreshUpload] = useState(Math.random());
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | undefined>(""); // Để giá trị khởi tạo là chuỗi rỗng hoặc undefined

  const uploadButton = (
    <div className="space-y-[10px] ">
      <PlusOutlined style={{ color: "#ff923b", fontSize: "20px" }} />
      <div className="ant-upload-text">Ảnh đại diện</div>
    </div>
  );

  return (
    <div className="md:w-[600px] w-full h-full space-y-[10px] md:space-y-[20px] px-[10px] md:px-[20px] py-[10px] md:py-[20px]">
      <div>
        <Form
          form={form}
          name="parentInfo"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.List name="student">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space key={key} align="baseline" className="block">
                    {name !== 0 && (
                      <div className="w-full flex justify-center items-center py-[20px]">
                        <div className="w-[50%] h-[1px] bg-slate-600"></div>
                      </div>
                    )}
                    <div>
                      <p className="md:text-[20px] text-[18px] font-semibold">
                        Thông tin học sinh - {name + 1}
                      </p>

                      {form.getFieldValue("student")?.length > 1 && (
                        <div
                          onClick={() => remove(name)}
                          className="w-full text-[20px] cursor-pointer text-red-600 justify-end items-end text-right"
                        >
                          <CloseCircleOutlined />
                        </div>
                      )}
                    </div>

                    <div className="w-full flex flex-col justify-center items-center">
                      <Form.Item
                        key={refreshUpload}
                        name={[name, "avatar"]}
                        valuePropName="fileList"
                        getValueFromEvent={(e) =>
                          Array.isArray(e) ? e : e?.fileList
                        }
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng tải lên ảnh đại diện!",
                          },
                        ]}
                      >
                        <Upload
                          listType="picture-card"
                          className={`avatar-uploader ${styles.customUpload}`}
                          beforeUpload={() => false}
                          maxCount={1}
                          fileList={form.getFieldValue([
                            "student",
                            name,
                            "avatar",
                          ])}
                          onChange={({ fileList }) => {
                            handleChange(name, "avatar", fileList);
                          }}
                          onPreview={(file) => {
                            setPreviewImage(file.url); // Lấy đường dẫn ảnh để hiển thị trong modal
                            setPreviewVisible(true); // Mở modal
                          }}
                          onRemove={(file) => {
                            console.log(file); // Xử lý khi xóa ảnh
                          }}
                        >
                          {form.getFieldValue(["student", name, "avatar"])
                            ?.length >= 1
                            ? null
                            : uploadButton}
                        </Upload>

                        {/* Modal hiển thị ảnh xem trước */}
                        <Modal
                          open={previewVisible}
                          footer={null}
                          onCancel={() => setPreviewVisible(false)}
                          width={800} // Đặt chiều rộng cho Modal
                        >
                          <img
                            alt="Preview"
                            style={{
                              width: "100%", // Đảm bảo ảnh chiếm toàn bộ chiều rộng của modal
                              height: "auto",
                              objectFit: "contain", // Giữ nguyên tỷ lệ ảnh
                            }}
                            src={previewImage}
                          />
                        </Modal>
                      </Form.Item>
                    </div>
                    <Form.Item
                      name={[name, "fullname"]}
                      {...restField}
                      rules={[
                        { required: true, message: "Vui lòng nhập họ và tên!" },
                      ]}
                    >
                      <label className="md:text-[16px] text-[15px]">
                        Họ và Tên <span className="text-red-600">*</span>
                      </label>

                      <Input
                        onChange={(e) => {
                          handleChange(name, "fullname", e.target.value);
                        }}
                        placeholder="Nhập họ và tên"
                      />
                    </Form.Item>

                    <Form.Item
                      name={[name, "workingPlace"]}
                      {...restField}
                      rules={[
                        { required: true, message: "Vui lòng nhập họ và tên!" },
                      ]}
                    >
                      <label className="md:text-[16px] text-[15px]">
                        Tên trường học, cơ quan{" "}
                        <span className="text-red-600">*</span>
                      </label>

                      <Input
                        onChange={(e) => {
                          handleChange(name, "workingPlace", e.target.value);
                        }}
                        placeholder="Nhập tên trường học, cơ quan"
                      />
                    </Form.Item>
                    <div className="flex justify-between items-center space-x-[10px]">
                      <Form.Item
                        {...restField}
                        className="w-[50%]"
                        name={[name, "gender"]}
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng chọn giới tính!",
                          },
                        ]}
                      >
                        <label className="md:text-[16px] text-[15px]">
                          Giới tính <span className="text-red-600">*</span>
                        </label>
                        <Select
                          onChange={(e) => {
                            handleChange(name, "gender", e);
                          }}
                          placeholder="Giới tính"
                        >
                          <Select.Option value="male">Nam</Select.Option>
                          <Select.Option value="female">Nữ</Select.Option>
                          <Select.Option value="other">Khác</Select.Option>
                        </Select>
                      </Form.Item>

                      <Form.Item
                        {...restField}
                        className="w-[50%]"
                        name={[name, "birthDate"]}
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng chọn ngày sinh!",
                          },
                        ]}
                      >
                        <label className="md:text-[16px] text-[15px]">
                          Ngày sinh <span className="text-red-600">*</span>
                        </label>
                        <DatePicker
                          className="w-full rounded-md"
                          format="DD/MM/YYYY"
                          placeholder="Chọn ngày sinh"
                          placement="bottomRight"
                          onChange={(date) =>
                            handleChange(name, "birthDate", date)
                          }
                          disabledDate={(current) =>
                            current && current > dayjs().endOf("day")
                          }
                        />
                      </Form.Item>
                    </div>
                    <Form.Item
                      name={[name, "phoneNumber"]}
                      {...restField}
                      rules={[
                        {
                          pattern: /^[0-9]{10,11}$/,
                          message: "Số điện thoại không hợp lệ!",
                        },
                      ]}
                    >
                      <label className="md:text-[16px] text-[15px]">
                        Số điện thoại
                      </label>

                      <Input
                        onChange={(e) => {
                          handleChange(name, "phoneNumber", e.target.value);
                        }}
                        placeholder="0123456789"
                      />
                    </Form.Item>

                    <div>
                      <div className="flex justify-between items-center space-x-[10px]">
                        <Form.Item
                          {...restField}
                          className="w-[50%]"
                          name={[name, "amount"]}
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng chọn số buổi học!",
                            },
                          ]}
                        >
                          <label className="md:text-[16px] text-[15px]">
                            Số buổi học <span className="text-red-600">*</span>
                          </label>
                          <Select
                            onChange={(e) => {
                              handleChange(name, "amount", e);
                            }}
                            placeholder="Số buổi học"
                          >
                            <Select.Option value="eightB">
                              8 Buổi/tháng
                            </Select.Option>
                            <Select.Option value="twelveB">
                              12 Buổi/tháng
                            </Select.Option>
                            <Select.Option value="sixteenB">
                              16 Buổi/tháng
                            </Select.Option>
                            <Select.Option value="twentyB">
                              20 Buổi/tháng
                            </Select.Option>
                            <Select.Option value="twentyFourB">
                              24 Buổi/tháng
                            </Select.Option>
                          </Select>
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          className="w-[50%]"
                          name={[name, "class"]}
                        >
                          <label className="md:text-[16px] text-[15px]">
                            Khoá Học mong muốn
                          </label>
                          <Select
                            onChange={(e) => {
                              handleChange(name, "class", e);
                            }}
                            placeholder="Khoá Học mong muốn"
                          >
                            <Select.Option value="basic">Cơ bản</Select.Option>
                            <Select.Option value="adventage">
                              Nâng cao
                            </Select.Option>
                            <Select.Option value="private">
                              Huấn luyện riêng
                            </Select.Option>
                          </Select>
                        </Form.Item>
                      </div>
                      <div className="text-red-600 flex justify-start relative top-[-20px]">
                        <div className="w-[100px]">* Lưu ý :</div>
                        <div className="inline-block">
                          Để đảm bảo chất lượng tốt nhất trong cả việc dạy và
                          học, ban huấn luyện sẽ đưa ra bài test cho học sinh để
                          đánh giá trình độ và chia lớp phù hợp nhất.
                        </div>
                      </div>
                    </div>

                    <Fragment key={refresh}>
                      <Form.Item {...restField} name={[name, "pickUpService"]}>
                        <Checkbox
                          defaultChecked={
                            form.getFieldValue("student")?.[name]?.pickUpService
                          }
                          onChange={(e) => {
                            console.log("e.target.value", e.target.checked);
                            setRefresh(Math.random());
                            handleChange(
                              name,
                              "pickUpService",
                              e.target.checked
                            );
                          }}
                        >
                          <p className="font-[500px]">
                            Đăng ký dịch vụ đưa đón
                          </p>
                        </Checkbox>
                      </Form.Item>
                      {form.getFieldValue("student")?.[name]?.pickUpService && (
                        <Form.Item
                          {...restField}
                          name={[name, "workingPlace"]}
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng chọn giới tính!",
                            },
                          ]}
                        >
                          <label className="md:text-[16px] text-[15px]">
                            Địa điểm học <span className="text-red-600">*</span>
                          </label>
                          <Input
                            onChange={(e) => {
                              handleChange(
                                name,
                                "workingPlace",
                                e.target.value
                              );
                            }}
                            placeholder="Địa chỉ đăng ký đưa đón học sinh"
                          />
                        </Form.Item>
                      )}
                      {/* <div className="w-full text-right text-[25px] text-main">
                        Học phí:{" "}
                        <span className="text-main font-bold">
                          1.000.000 <span className="underline">đ</span>
                        </span>
                      </div> */}
                    </Fragment>
                  </Space>
                ))}
                <Form.Item className="mt-[20px]">
                  <Button
                    // type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                    className=" !py-[10px] h-full rounded-[10px] drop-shadow-md  text-white"
                  >
                    Thêm học sinh
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>

          <Form.Item className="mt-[-10px] ">
            <Button
              htmlType="submit"
              block
              className=" !px-[25px] !py-[10px] h-full rounded-[10px] bg-main drop-shadow-md"
            >
              <p className="text-[18px] font-semibold text-white hover:text-main">
                {" "}
                Đăng ký
              </p>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default StudentInfor;
