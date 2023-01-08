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
          {info.title}
        </div>
        <div className=" cursor-pointer">
          {show ? <BottomIcon /> : <RightIcon />}
        </div>
      </div>
      {show && (
        <div className=" mt-5">
          <div className=" flex justify-between items-center mb-[23px]">
            <div className=" w-[85px] h-[20px]  bg-[#82C786] rounded-[3px] text-white text-[12px] flex justify-center items-center">
              {info.edition_count} Editions
            </div>
            <div className=" text-[12px] text-[#AAAAAA]">
              {info.first_publish_year && (
                <div>First Published: {info.first_publish_year}</div>
              )}
            </div>
          </div>
          <div className=" text-[12px] text-[#AAAAAA] flex">
            {info.number_of_pages_median && (
              <div className=" mr-3">{info.number_of_pages_median} pages</div>
            )}
            <div>32 hours read time</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookInfoCard;
