import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { exitQuiz_action } from "@/store/actions/quiz.actions";

const Header = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);

  const [info, setInfo] = useState(null);

  useEffect(() => {
    // Check if running on client side and then access localStorage
    if (typeof window !== "undefined") {
      setInfo(userInfo);
    }
  }, [userInfo]); // Run only once when the component mounts

  return (
    <header className="bg-[#F3F3E9] p-7 flex items-center justify-between h-[80px] border border-b border-[#D9D9D9]">
      <div className="flex items-center space-x-2 ml-0 lg:ml-[2.2rem]">
        <Image
          src={"/assets/logo.svg"}
          width={127}
          height={23}
          alt="logo"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      {/* Right-aligned border button */}
      <div className="flex items-center">
        {info?.subject && !info?.result && (
          <Button
            text="Exit Quiz"
            onClick={() => {
              dispatch(exitQuiz_action());
            }}
            color="primary"
            size="medium"
            border={true}
          />
        )}
        {info?.result && (
          <div className="flex items-center gap-2 p-4">
            {/* Circle with the initial letter of the username */}
            <div className="w-[40px] h-[40px] rounded-full bg-[#373052] text-white flex items-center justify-center text-sm sm:text-lg">
              {info?.username?.charAt(0).toUpperCase()}
            </div>
            {/* Username Text */}
            <div className="text-[#373052] text-sm sm:text-lg">
              {info?.username}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
