/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment, useEffect, useState } from "react";

import {
  Button,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Select,
  Space,
} from "antd/lib";
import { CloseCircleOutlined, PlusOutlined } from "@ant-design/icons/lib";

const StudentInfor = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log("values:", values);
  };

  const onFinishFailed = (values: any) => {
    console.log("values", values);
  };

  useEffect(() => {
    // Explicitly set default values for 'student' field if needed
    const students = form.getFieldValue("student");
    if (!students || students.length === 0) {
      // Set default values for student array if not already present
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
          },
        ],
      });
    }
  }, [form]);

  const handleChange = (name: any, fieldName: string, value: any) => {
    form.setFieldValue(["student", name, fieldName], value);
  };
  const [refresh, setRefresh] = useState(Math.random());
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
                          <CloseCircleOutlined />{" "}
                        </div>
                      )}
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
                        name={[name, "age"]}
                        rules={[
                          { required: true, message: "Vui lòng nhập tuổi!" },
                        ]}
                      >
                        <label className="md:text-[16px] text-[15px]">
                          Tuổi <span className="text-red-600">*</span>
                        </label>
                        <InputNumber
                          onChange={(e) => {
                            handleChange(name, "age", e);
                          }}
                          placeholder="Nhập Tuổi"
                          style={{ width: "100%" }}
                        />
                      </Form.Item>
                    </div>

                    <div className="flex justify-between items-center space-x-[10px]">
                      <Form.Item
                        {...restField}
                        className="w-[50%]"
                        name={[name, "class"]}
                        rules={[
                          { required: true, message: "Vui lòng lớp học!" },
                        ]}
                      >
                        <label className="md:text-[16px] text-[15px]">
                          Lớp học <span className="text-red-600">*</span>
                        </label>
                        <Select
                          onChange={(e) => {
                            handleChange(name, "class", e);
                          }}
                          placeholder="Địa điểm học"
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
                      <div className="w-full text-right text-[25px] text-main">
                        Học phí:{" "}
                        <span className="text-main font-bold">
                          1.000.000 <span className="underline">đ</span>
                        </span>
                      </div>
                    </Fragment>
                  </Space>
                ))}
                <Form.Item className="mt-[20px]">
                  <Button
                    // type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                    className=" !py-[10px] h-full rounded-[10px] drop-shadow-md "
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
              <p className="text-[18px] font-semibold text-white"> Đăng ký</p>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default StudentInfor;
