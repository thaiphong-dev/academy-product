import React from "react";
// import dynamic from "next/dynamic";
import CommonInfor from "./CommonInfor";
import StudentList from "./StudentList";

// const CommonInfor = dynamic(() => import("./CommonInfor"), {
//   ssr: false,
// });

// const StudentList = dynamic(() => import("./StudentList"), {
//   ssr: false,
// });

const Infomation = () => {
  return (
    <div className="space-y-[20px]">
      <CommonInfor />
      <StudentList />
    </div>
  );
};

export default Infomation;
