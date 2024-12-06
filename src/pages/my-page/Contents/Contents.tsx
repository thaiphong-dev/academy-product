import React, { useMemo } from "react";
import Infomation from "./Information";
import TuitionFees from "./TuitionFees";
import { useRouter } from "next/router";

const Contents = () => {
  const router = useRouter();
  const { tab } = router.query;
  const renderTab = useMemo(() => {
    switch (tab) {
      case "registerInfor":
        return <Infomation />;
      case "tuitionFee":
        return <TuitionFees />;
      default:
        return <Infomation />;
    }
  }, [tab]);
  return <div className="w-full md:ml-[40px] ">{renderTab}</div>;
};

export default Contents;
