/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
import { Table, Checkbox, Modal, Card } from "antd/lib";
// import dynamic from "next/dynamic";
import { SmoothScrollTo } from "@/utils/scroll";
import ScheduleWithNavigation from "./Schedule";
import infor from "../../../../data/infor.json";

// const Schedule = dynamic(() => import("./Schedule"), {
//   ssr: false,
// });

interface Schedule {
  dateStudy: string;
  isPaid: boolean;
  courseTime: string;
}
interface Student {
  id: number;
  name: string;
  gender: string;
  age: number;
  course: string;
  remainingSessions: number;
  schedule?: Schedule[];
}

const StudentList = () => {
  const data = infor.studentList;

  const [selectedId, setSelectedId] = useState<number>(data[0]?.id);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const scheduleRef = useRef<HTMLDivElement | null>(null);

  const handleCheckboxChange = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedId(id);
      if (scheduleRef.current) {
        SmoothScrollTo(scheduleRef.current);
      }
    } else {
      setSelectedId(-1);
    }
  };

  const handleCardClick = (id: number) => {
    setSelectedId(id);
    setIsModalVisible(true); // Show modal when card is clicked
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const columns: any = [
    {
      title: <></>,
      dataIndex: "checkbox",
      render: (_: any, record: Student) => (
        <Checkbox
          onChange={(e) => handleCheckboxChange(record.id, e.target.checked)}
          checked={selectedId === record.id}
        />
      ),
      width: 50,
      align: "center",
      className: "text-center",
    },
    { title: "Họ và Tên", dataIndex: "name", key: "name" },
    {
      title: "Giới tính",
      dataIndex: "gender",
      key: "gender",
      className: "text-center",
      align: "center",
    },
    {
      title: "Tuổi",
      dataIndex: "age",
      key: "age",
      className: "text-center",
      align: "center",
    },
    {
      title: "Khóa Học",
      dataIndex: "course",
      key: "course",
      className: "text-center",
      align: "center",
    },
    {
      title: "Số buổi học còn lại",
      dataIndex: "remainingSessions",
      key: "remainingSessions",
      className: "text-center",
      align: "center",
    },
  ];

  return (
    <>
      {/* ui for PC */}
      <div className="bg-white p-[20px] drop-shadow rounded-[10px] hidden md:block">
        <h1 className="text-xl font-semibold mb-4">Danh sách học viên</h1>
        <Table
          rowKey="id"
          dataSource={data}
          columns={columns}
          pagination={false}
          bordered
        />
        <div ref={scheduleRef} className="mt-4">
          <ScheduleWithNavigation
            data={data.find((x) => x?.id === selectedId)?.schedule}
          />
        </div>
      </div>

      {/* ui for Mobile */}
      <div className="bg-white p-[20px] drop-shadow rounded-[10px] md:hidden">
        <h1 className="text-xl font-semibold mb-4">Danh sách học viên</h1>
        {data.map((student) => (
          <Card
            key={student.id}
            title={
              <div className="font-bold text-lg text-center">
                {student.name}
              </div>
            }
            extra={
              <span className="text-sm text-gray-600">{student.course}</span>
            }
            onClick={() => handleCardClick(student.id)}
            className="mb-4 cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
            bordered
            style={{
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <div className="flex justify-between mb-2">
              <p>
                <strong>Giới tính:</strong> {student.gender}
              </p>
              <p>
                <strong>Tuổi:</strong> {student.age}
              </p>
            </div>
            <div className="flex justify-between">
              <p>
                <strong>Số buổi còn lại:</strong> {student.remainingSessions}
              </p>
              <p
                style={{
                  color: student.remainingSessions > 0 ? "#16a34a" : "red",
                }}
                className="text-green-600 font-semibold"
              >
                {student.remainingSessions > 0
                  ? "Còn buổi học"
                  : "Hết buổi học"}
              </p>
            </div>
          </Card>
        ))}

        <Modal
          title={`Lịch học của ${data.find((x) => x?.id === selectedId)?.name}`}
          open={isModalVisible}
          onCancel={handleCloseModal}
          footer={null}
          style={{ top: 20 }}
        >
          <ScheduleWithNavigation
            data={data.find((x) => x?.id === selectedId)?.schedule}
          />
        </Modal>
      </div>
    </>
  );
};
export default StudentList;
