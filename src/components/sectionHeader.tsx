import React, { FC } from "react";

const SectionHeader: FC<{ content: string }> = ({ content }) => {
  return (
    <div>
      <div className=" flex justify-center mx-auto my-10">
        <h1 className="scroll-m-20 text-2xl font-extrabold text-center tracking-tight lg:text-3xl capitalize text-gray-950">
          {content}
          <br />
          <div className="h-1 w-20 bg-myNavy m-2 "></div>
        </h1>
      
      </div>
      
    </div>
  );
};

export default SectionHeader;
