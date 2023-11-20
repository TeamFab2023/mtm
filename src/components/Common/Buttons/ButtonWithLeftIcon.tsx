import React from "react";
import { PiGraduationCapLight } from "react-icons/pi";

interface ButtonWithLeftIconPropsTypes {
  text: string;
  isLeftIcon?: boolean;
}

const ButtonWithLeftIcon: React.FC<ButtonWithLeftIconPropsTypes> = ({ text, isLeftIcon }) => {
  return (
    <button
      className={`flex px-[14px] pt-[0.1px] h-[28px] leading-7 items-center bg-skyBlue-100 border-skyBlue-100 shadow-[0 2px 0 rgba(0,0,0,.045)] font-normal text-center cursor-pointer transition-all  text-[14px] rounded-[4px] border-[1px solid #d9d9d9] text-white gap-[6px] shrink-0`}
    >
      {isLeftIcon && <PiGraduationCapLight />}
      <p>{text}</p>
    </button>
  );
};

export default ButtonWithLeftIcon;
