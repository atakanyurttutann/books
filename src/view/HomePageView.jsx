import { ColumnCard, BookInfoCard } from "@/components/ui/card";
import React from "react";

const HomePageView = () => {
  return (
    <div className=" custom-container ">
      <div className=" w-full mt-[63px]  font-robotoRegular ">
        <div className=" flex items-center">
          <div className=" text-[28px] text-[#707090] mr-10">Lorem Board</div>
          <div className="text-[#1E272E] text-[15px] mr-3">books of</div>
          <input className=" border-b outline-none mr-3" />
          <button className=" w-[67px] h-[22px]  flex justify-center items-center bg-[#373A3B] text-white rounded text-[12px]">
            sumbit
          </button>
        </div>

        <div className=" grid grid-cols-4 gap-[40px] mt-10 ">
          <ColumnCard>
            <BookInfoCard />
          </ColumnCard>
        </div>
      </div>
    </div>
  );
};

export default HomePageView;
