import React from "react";

const ColumnCard = ({ children, title = "1925" }) => {
  return (
    <div>
      <div className="  w-full  shadow py-[20px] px-[10px]  border-t-4 border-orange-600 rounded">
        <div className=" text-[20px] text-[#707090] mb-5">{title}</div>
        {children}
      </div>
    </div>
  );
};

export default ColumnCard;
