import React from "react";

interface ButtonPropsTypes {
  text: string;
}

const Button: React.FC<ButtonPropsTypes> = ({ text }) => {
  return (
    <button
      className={`flex px-[15px] pt-[0.1px] h-[32px] leading-7 items-center bg-skyBlue-100 border-skyBlue-100 shadow-[0 2px 0 rgba(0,0,0,.045)] font-normal text-center cursor-pointer transition-all  text-[14px] rounded-[4px] border-[1px solid #d9d9d9] text-white gap-[6px] shrink-0`}
    >
      <p>{text}</p>
    </button>
  );
};

export default Button;
