import React from "react";
// import dynamic from "next/dynamic";
import StudentList from "./StudentList";

// const CommonInfor = dynamic(() => import("./CommonInfor"), {
//   ssr: false,
// });

// const StudentList = dynamic(() => import("./StudentList"), {
//   ssr: false,
// });

const TuitionFees = () => {
  return (
    <div className="space-y-[20px]">
      <StudentList />
    </div>
  );
};

export default TuitionFees;
