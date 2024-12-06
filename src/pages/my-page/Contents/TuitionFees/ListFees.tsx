/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";

interface Props {
  data: any;
}
const ListFees = ({ data }: Props) => {
  const columns: ColumnsType<any> = [
    {
      title: "Số thứ tự",
      dataIndex: "id",
      key: "id",
      align: "center",
    },
    {
      title: "Khóa học",
      dataIndex: "course",
      key: "course",
      align: "left",
    },
    {
      title: "Số buổi học",
      dataIndex: "sessions",
      key: "sessions",
      align: "center",
    },
    {
      title: "Học phí",
      dataIndex: "tuition",
      key: "tuition",
      align: "right",
      render: (value) => `${value.toLocaleString()} đ`,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (status) => (
        <span
          className={`px-2 py-1 rounded ${
            status === "Đã đóng"
              ? "bg-green-100 text-green-500"
              : "bg-red-100 text-red-500"
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Người đóng",
      dataIndex: "payer",
      key: "payer",
      align: "left",
    },
    {
      title: "Ngày đóng",
      dataIndex: "paymentDate",
      key: "paymentDate",
      align: "center",
      render: (date) => dayjs(date).format("DD/MM/YYYY"),
    },
  ];

  return (
    <>
      {/* UI cho PC */}
      <div className="bg-white p-6 rounded-md shadow-md hidden md:block">
        <h2 className="text-xl font-semibold mb-4">Lịch sử đóng học phí</h2>
        <Table
          dataSource={data}
          columns={columns}
          pagination={{ pageSize: 5 }}
          rowKey="id"
          bordered
        />
      </div>

      {/* UI cho Mobile */}
      <div className="bg-white  rounded-md shadow-md md:hidden">
        <div className="space-y-4">
          {data.map((item: any) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 flex flex-col space-y-2"
            >
              <div className="flex justify-between">
                <span className="font-bold">Số thứ tự:</span>
                <span>{item.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Khóa học:</span>
                <span>{item.course}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Số buổi học:</span>
                <span>{item.sessions}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Học phí:</span>
                <span>{`${item.tuition.toLocaleString()} đ`}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Trạng thái:</span>
                <span
                  className={`px-2 py-1 rounded ${
                    item.status === "Đã đóng"
                      ? "bg-green-100 text-green-500"
                      : "bg-red-100 text-red-500"
                  }`}
                >
                  {item.status}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Người đóng:</span>
                <span>{item.payer}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Ngày đóng:</span>
                <span>{dayjs(item.paymentDate).format("DD/MM/YYYY")}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListFees;
