import React from "react";

interface OutlineButtonWithLeftIconPropsType {
  text: string;
  leftIcon?: JSX.Element;
}

const OutlineButtonWithLeftIcon: React.FC<OutlineButtonWithLeftIconPropsType> = ({
  text,
  leftIcon,
}) => {
  return (
    <button className="flex px-[15px] pt-[0.1px] h-[32px] leading-7 items-center border border-[#3eb2e3] shadow-[0 2px 0 rgba(0,0,0,.045)] font-normal text-center cursor-pointer transition-all  text-[14px] rounded-[4px] border-[1px solid #d9d9d9] text-[#3eb2e3] gap-[6px] shrink-0`">
      {leftIcon && <div>{leftIcon}</div>}
      <p>{text}</p>
    </button>
  );
};

export default OutlineButtonWithLeftIcon;
