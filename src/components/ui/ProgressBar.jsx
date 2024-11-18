import React from "react";

const ProgressBar = ({ progress, height = "h-2", width = "w-full" }) => {
  return (
    <div className={`relative ${width} ${height} bg-gray-200 `}>
      <div
        className={`bg-[#B92B5D] absolute left-0 top-0 ${height} `}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
