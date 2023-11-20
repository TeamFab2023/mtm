"use client";
import Button from "@/components/Common/Buttons/Button";
import ButtonWithLeftIcon from "@/components/Common/Buttons/ButtonWithLeftIcon";
import OutlineButtonWithGrayColor from "@/components/Common/Buttons/OutlineButtonWithGrayColor";
import OutlineButtonWithLeftIcon from "@/components/Common/Buttons/OutlineButtonWithLeftIcon";
import OutlineButtonWithRedColor from "@/components/Common/Buttons/OutlineButtonWithRedColor";
import SearchInputWithButton from "@/components/Common/Inputs/SearchInputWithButton";
import Image from "next/image";
import { FaRegCopy } from "react-icons/fa";
import { RiCoupon5Fill } from "react-icons/ri";
import { BiMessageRoundedDots } from "react-icons/bi";
import { TfiMenuAlt } from "react-icons/tfi";
import { PiNotepad } from "react-icons/pi";

const page = () => {
  return (
    <div className="max-w-[1100px] mx-auto">
      <div className="pt-[30px] pb-[100px]">
        {/* Read Aloud Top Section */}
        <div className="flex leading-none">
          <div className="mr-5 shrink-0">
            <Image
              src={
                "https://dl26yht2ovo33.cloudfront.net/public/admin/practice_assets/q_images/ra_s_ai.png"
              }
              alt="read icon image"
              width={80}
              height={80}
            />
          </div>
          <div>
            <div className="flex gap-3">
              <h2 className="text-[22px] font-medium text-customGray-100 font-customFont">
                Read Aloud
              </h2>
              <ButtonWithLeftIcon text="Study Guide" isLeftIcon={true} />
            </div>
            <div className="h-[8px] w-full"></div>
            <div className="text-[16px] text-customGray-100 leading-normal">
              Look at the text below. In 40 seconds, you must read this text aloud as naturally and
              clearly as possible. You have 40 seconds to read aloud.
            </div>
          </div>
        </div>

        {/* This is Divider */}
        <div className="border-t my-[24px]"></div>

        {/* Exercise Section */}
        <div className="flex justify-between">
          <div>#1327 Sea Levels</div>
          <div>
            <Button text="Tested (6)" />
          </div>
        </div>

        {/* This is Divider */}

        <div className="h-5 w-full"></div>

        {/* Audio Component */}
        <div>
          <audio controls src=""></audio>
        </div>

        {/* This is Divider */}

        <div className="h-2 w-full"></div>

        <div>
          <p className="text-base text-[#333] font-customFont">
            AI Scoring and Audio Answer Download is available after submission.
          </p>
        </div>

        {/* This is Divider */}

        <div className="h-8 w-full"></div>

        {/* This is Buttons Section */}

        <div className="flex justify-between text-[14px]">
          <div className="flex justify-between gap-4">
            <Button text="Submit" />
            <Button text="Re-do" />
            <OutlineButtonWithLeftIcon text="Translation" leftIcon={<FaRegCopy />} />
            <OutlineButtonWithLeftIcon text="Demo" />
          </div>
          <div className="flex justify-between gap-4">
            <OutlineButtonWithRedColor text="x 5" leftIcon={<RiCoupon5Fill />} />
            <Button text="Previous" />
            <SearchInputWithButton />
            <Button text="Next" />
          </div>
        </div>

        {/* This is Divider */}

        <div className="h-8 w-full"></div>

        {/* This is Discussion Section */}

        <div className="flex items-center my-4">
          <div className="flex w-10 border-t border-gray-300"></div>
          <span className="mx-3 font-semibold">Discussion</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* This is Discussion Navbar */}

        <div className="flex border-b border-gray-300">
          <OutlineButtonWithGrayColor text="Discussion" leftIcon={<BiMessageRoundedDots />} />
          <OutlineButtonWithGrayColor text="Board" leftIcon={<TfiMenuAlt />} />
          <OutlineButtonWithGrayColor text="Me" leftIcon={<PiNotepad />} />
        </div>
      </div>
    </div>
  );
};

export default page;
