"use client";

import CommonHeader from "@/components/CommonHeader";
import DropDown from "@/components/DropDown";
import InputNoLabel from "@/components/InputNoLabel";

const MemberRegister = () => {
  const labelStyle =
    "bg-bgGray w-28 py-4 mr-2 my-auto text-center font-bold  text-secondGray";
  const valueStyle = " text-mainBlack";

  const selectOptions = [
    { label: "선택", key: "1" },
    { label: "고등 연회원", key: "2" },
    { label: "중학 연회원", key: "3" },
    { label: "중고등 연회원", key: "4" },
    { label: "일반회원", key: "4" },
    { label: "관리자", key: "4" },
  ];

  return (
    <section>
      <CommonHeader title="회원 등록" />

      <section>
        <div className="mt-4  flex items-center justify-between w-full border-y border-grayLightBorder pr-16">
          <div className="flex items-center w-1/2">
            <p className={`${labelStyle}`}>이름</p>
            <InputNoLabel placeholder="입력" inputStyles="w-[300px]" />
          </div>
          <div className="flex items-center w-1/2">
            <p className={`${labelStyle}`}>ID</p>
            <InputNoLabel placeholder="입력" inputStyles="w-[300px]" />
            <button className="py-2 px-3 text-secondGray rounded-md bg-bgGray mx-2">
              중복확인
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between w-full border-b border-grayLightBorder pr-16">
          <div className="flex items-center w-1/2">
            <p className={`${labelStyle}`}>비밀번호</p>
            <InputNoLabel placeholder="입력" inputStyles="w-[300px]" />
          </div>
          <div className="flex items-center w-1/2">
            <p className={`${labelStyle}`}>비밀번호 확인</p>
            <InputNoLabel placeholder="입력" inputStyles="w-[300px]" />
          </div>
        </div>
        <div className="flex items-center justify-between w-full border-b border-grayLightBorder pr-16">
          <div className="flex items-center w-1/2">
            <p className={`${labelStyle}`}>휴대폰 번호</p>
            <InputNoLabel placeholder="입력" inputStyles="w-[300px]" />
          </div>
          <div className="flex items-center w-1/2">
            <p className={`${labelStyle}`}>이메일</p>
            <InputNoLabel placeholder="입력" inputStyles="w-[300px]" />
          </div>
        </div>
        <div className="flex items-center justify-between w-full border-b border-grayLightBorder pr-16">
          <div className="flex items-center w-1/2">
            <p className={`${labelStyle}`}>생년월일</p>
            <InputNoLabel
              placeholder="입력"
              inputStyles="w-[300px]"
              type="date"
            />
          </div>
          <div className="flex items-center w-1/2">
            <p className={`${labelStyle}`}>성별</p>
            <InputNoLabel placeholder="입력" inputStyles="w-[300px]" />
          </div>
        </div>

        <div className="flex items-center justify-between w-full border-b border-grayLightBorder pr-16">
          <div className="flex items-center w-1/2">
            <p className={`${labelStyle}`}>등급</p>
            <DropDown
              options={selectOptions}
              defaultSelectedKeys="1"
              selectStyles="w-[300px]"
            />
          </div>
          <div className="flex items-center w-1/2"></div>
        </div>

        <div className="flex justify-end items-center">
          <button className="bg-mainBlack text-white rounded-md py-2 px-3 mt-4">
            수정
          </button>
        </div>
      </section>
    </section>
  );
};

export default MemberRegister;
