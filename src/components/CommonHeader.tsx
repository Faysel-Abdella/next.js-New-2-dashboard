import React from "react";

interface CommonHeaderProps {
  title: string;
}

const CommonHeader: React.FC<CommonHeaderProps> = ({ title }) => {
  return (
    <>
      <div className="flex justify-end ">
        <button className=" text-base font-normal text-[#868F9A]">
          로그아웃
        </button>
      </div>
      <h2 className="mt-4 mb-5  text-left text-2xl font-bold leading-8 text-mainBlack">
        {title}
      </h2>
    </>
  );
};

export default CommonHeader;
