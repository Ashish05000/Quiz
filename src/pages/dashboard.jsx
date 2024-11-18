import React from "react";
import UserInfo from "@/components/UserInfo.jsx";
import { useSelector } from "react-redux";
import Quiz from "@/components/Quiz";
import Result from "@/components/Result";

const DashBoardPage = () => {
  const userInfo = useSelector((state) => state.userInfo);
  return (
    <>
      {/* Only render UserInfo if userInfo is not available */}
      {!userInfo.subject && <UserInfo />}
      {userInfo.subject && !userInfo.result && <Quiz userInfo={userInfo} />}
      {userInfo?.result && <Result result={userInfo?.result} />}
    </>
  );
};

export default DashBoardPage;
