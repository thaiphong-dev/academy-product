/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input, InputNumber, Select, Space } from "antd";
import React, { useEffect } from "react";
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
          },
        ],
      });
    }
  }, [form]);

  const handleChange = (name: any, fieldName: string, value: any) => {
    form.setFieldValue(["student", name, fieldName], value);
  };
  return (
    <div className="w-[600px] h-full space-y-[20px]  px-[20px] py-[20px]">
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
                    <div>
                      <p className="text-[20px] font-semibold">
                        Thông tin học sinh - {name + 1}
                      </p>

                      {form.getFieldValue("student")?.length > 1 && (
                        <div
                          onClick={() => remove(name)}
                          className="w-full text-[18px] cursor-pointer text-red-600 justify-end items-end text-right"
                        >
                          <CloseCircleOutlined />
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
                      <label className="text-[16px] inline-block w-full">
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
                        <label className="text-[16px]">
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
                        <label className="text-[16px]">
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

                    <Form.Item
                      {...restField}
                      name={[name, "workingPlace"]}
                      rules={[
                        { required: true, message: "Vui lòng chọn giới tính!" },
                      ]}
                    >
                      <label className="text-[16px]">
                        Địa điểm học <span className="text-red-600">*</span>
                      </label>
                      <Select
                        onChange={(e) => {
                          handleChange(name, "workingPlace", e);
                        }}
                        placeholder="Địa điểm học"
                      >
                        <Select.Option value="DS">
                          sân Đường Sắt - Phó Đức Chính
                        </Select.Option>
                        <Select.Option value="BD">
                          sân Bưu Điện Trung Tâm - Tầng 3 - 02 Trần Thị Kỷ,
                          Tp.Quy Nhơn
                        </Select.Option>
                        <Select.Option value="TD">
                          Sân Cầu Lông Tỉnh Đội - Đối Diện 54 Nguyễn Thị Định{" "}
                        </Select.Option>
                      </Select>
                    </Form.Item>
                    <div className="flex justify-between items-center space-x-[10px]">
                      <Form.Item
                        {...restField}
                        className="w-[50%]"
                        name={[name, "class"]}
                        rules={[
                          { required: true, message: "Vui lòng lớp học!" },
                        ]}
                      >
                        <label className="text-[16px]">
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
                        <label className="text-[16px]">
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
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    Thêm học sinh
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>

          <div className="w-full text-right text-[25px] text-main">
            Học phí:{" "}
            <span className="text-main font-bold">
              1.000.000 <span className="underline">đ</span>
            </span>
          </div>

          <Form.Item>
            <Button type="dashed" htmlType="submit" block>
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default StudentInfor;
