import React from "react";
import randomColor from "randomcolor"; // import the script

const ColumnCard = ({ children, title = "1925" }) => {
  const color = randomColor();
  return (
    <div>
      <div
        style={{ borderTop: `4px solid ${color}` }}
        className="  w-full  shadow py-[20px] px-[10px]   rounded">
        <div className=" text-[20px] text-[#707090] mb-5">{title}</div>
        {children}
      </div>
    </div>
  );
};

export default ColumnCard;
