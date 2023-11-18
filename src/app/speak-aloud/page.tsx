import Button from "@/components/Common/Buttons/Button";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="max-w-[1100px] mx-auto">
      <div className="pt-[30px] pb-[100px]">
        {/* Read Aloud Top Section Starts */}
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
              <Button text="Study Guide" isLeftIcon={true} />
            </div>
            <div className="h-[8px] w-full"></div>
            <div className="text-[16px] text-customGray-100 leading-normal">
              Look at the text below. In 40 seconds, you must read this text aloud as naturally and
              clearly as possible. You have 40 seconds to read aloud.
            </div>
          </div>
        </div>
        {/* Read Aloud Top Section End */}

        {/* This is Divider */}
        <div className="border-t my-[24px]"></div>

        {/* Exercise Section */}
        <div className="">
          <div>#1327</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default page;
