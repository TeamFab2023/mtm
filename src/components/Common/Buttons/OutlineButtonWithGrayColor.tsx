"use client";
import React, { useState } from "react";

interface OutlineButtonWithGrayColorPropsType {
  text: string;
  leftIcon?: JSX.Element;
}

const OutlineButtonWithGrayColor: React.FC<OutlineButtonWithGrayColorPropsType> = ({
  text,
  leftIcon,
}) => {
  const [backgroundColor, setBackgroundColor] = useState<boolean>(false);
  return (
    <button
      className={`flex px-[16px] pt-[0.1px] mr-0.5 h-10 leading-7 items-center border-x border-t border-gray-300 ${
        backgroundColor ? "bg-white text-[#29d2bf]" : "text-customGray-100 bg-transparent"
      } shadow-[0 2px 0 rgba(0,0,0,.045)] font-normal text-center cursor-pointer transition-all  text-[14px] border-[1px solid #d9d9d9]  hover:text-[#29d2bf]  ease-in-out gap-[6px] shrink-0`}
      onClick={() => setBackgroundColor(true)}
      onBlur={() => setBackgroundColor(false)}
    >
      {leftIcon && <div>{leftIcon}</div>}
      <p>{text}</p>
    </button>
  );
};

export default OutlineButtonWithGrayColor;
