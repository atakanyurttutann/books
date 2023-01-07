import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className=" w-full h-[60px] bg-[#F4F4F4] flex justify-center items-center">
      <Image src={"/logo.png"} width="113" height={"34"} alt="logo" />
    </div>
  );
};

export default Header;
