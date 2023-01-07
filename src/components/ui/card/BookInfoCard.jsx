import { BottomIcon, RightIcon } from "@/icons/index";
import { useState } from "react";

const BookInfoCard = ({ info }) => {
  const [show, setShow] = useState(false);

  return (
    <div className=" w-full bg-[#F4F4F4] rounded px-[10px] py-[14px]">
      <div
        onClick={() => {
          setShow(!show);
        }}
        className=" flex justify-between items-center cursor-pointer">
        <div
          className={`text-[#707090] text-[14px]     w-[75%]  ${
            show ? "" : "whitespace-nowrap overflow-hidden text-ellipsis "
          }`}>
          dasdasd asd asd as das das d a assacasdasd asd sas
        </div>
        <div className=" cursor-pointer">
          {show ? <BottomIcon /> : <RightIcon />}
        </div>
      </div>
      {show && (
        <div className=" mt-5">
          <div className=" flex justify-between items-center mb-[23px]">
            <div className=" w-[85px] h-[20px]  bg-[#82C786] rounded-[3px] text-white text-[12px] flex justify-center items-center">
              4 Editions
            </div>
            <div className=" text-[12px] text-[#AAAAAA]">
              First Published: 1925
            </div>
          </div>
          <div className=" text-[12px] text-[#AAAAAA] flex">
            <div className=" mr-3">123 Pages</div>
            <div>32 Hours Time</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookInfoCard;
