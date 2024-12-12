'use client';

import CommonHeader from '@/components/CommonHeader';

import { FaCalendar } from 'react-icons/fa';
import { IoReload } from 'react-icons/io5';
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  DatePicker,
  DateRangePicker,
} from '@nextui-org/react';
import { useState } from 'react';

const HomeIndicator = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [activeCalendarIndex, setActiveCalendarIndex] = useState<number | null>(
  //   null
  // );
  // const [dateRanges, setDateRanges] = useState<DateRange[]>(
  //   Array(4).fill({ from: undefined, to: undefined })
  // );

  const handleOpenModal = () => {
    // setActiveCalendarIndex(index);
    setIsModalOpen(true);
  };

  // const handleDateChange = (dateRange: DateRange) => {
  //   if (activeCalendarIndex !== null) {
  //     const newDateRanges = [...dateRanges];
  //     newDateRanges[activeCalendarIndex] = dateRange;
  //     setDateRanges(newDateRanges);
  //   }
  // };

  // const handleReset = () => {
  //   if (activeCalendarIndex !== null) {
  //     const newDateRanges = [...dateRanges];
  //     newDateRanges[activeCalendarIndex] = { from: undefined, to: undefined };
  //     setDateRanges(newDateRanges);
  //   }
  // };
  const [higherLanguage, setHigherLanguage] = useState(true);

  return (
    <section>
      <CommonHeader title='전체 회원 관리' />
      <header>
        <div className='flex w-[190px] items-center gap-1 bg-bgGray p-1 rounded-lg '>
          <button
            className={`font-bold px-3 py-2 ${higherLanguage ? ' bg-white text-mainBlue rounded-lg' : 'bg-transparent text-secondGray'}`}
            onClick={() => setHigherLanguage(true)}
          >
            고등 국어
          </button>
          <button
            className={`font-bold px-3 py-2 ${!higherLanguage ? ' bg-white text-mainBlue rounded-lg' : 'bg-transparent text-secondGray'}`}
            onClick={() => setHigherLanguage(false)}
          >
            중학 국어
          </button>
        </div>
      </header>

      <div className='mt-2'>
        <div className='flex items-center justify-end'>
          <Button className='min-w-[28px] bg-mainBlack text-white rounded-md'>
            등록
          </Button>
        </div>
      </div>

      <main className=' mt-2 '>
        {/* First Row  */}
        <div className='flex bg-bgGray  justify-center items-center w-full   '>
          {/* First Column */}
          <div className='w-[180px] text-center py-3 border-r border-grayBorder'>
            <span>그룹(하위그룹)</span>
          </div>

          {/* Second Column */}
          <div className='w-[180px] text-center py-3 '>
            <span>제시문</span>
          </div>

          {/* Third Column with Sub-columns */}
          <div className='w-[500px] flex flex-col py- border-x border-grayBorder'>
            <div className='border-b py-2 text-center w-full  border-grayBorder'>
              다운로드
            </div>
            <div className='flex '>
              <div className='w-[125px] py-2  text-center'>
                <span>연희원</span>
              </div>
              <div className='w-[125px] py-2  text-center'>
                <span>연희원 점수 합</span>
              </div>
              <div className='w-[125px] py-2  text-center'>
                <span>개별 구매</span>
              </div>
              <div className='w-[125px] py-2 text-center'>
                <span>포인트 합</span>
              </div>
            </div>
          </div>

          {/* Fourth Column */}
          <div className='w-[160px] py-3 border-r border-grayBorder text-center'>
            <span>다운로드 합</span>
          </div>

          {/* Fifth Column */}
          <div className='w-[160px]  py-3 text-center'>
            <span>기간</span>
          </div>
        </div>

        {/* Second Row  */}
        <div className='flex  border-b  justify-center items-center w-full   '>
          {/* First Column */}
          <div className='w-[180px] self-stretch flex items-center justify-center text-center  border-r border-grayBorder'>
            <span>고1 모의</span>
          </div>

          {/* Second Column */}
          <div className='w-[180px] self-stretch  text-center '>
            <div className='flex flex-col'>
              <span className='text-mainBlue underline py-2'>고1 모의</span>
              <span className='text-mainBlue underline py-2'>
                고3 모의(교육청)
              </span>
              <span className='text-mainBlue underline py-2'>고2 모의</span>
              <span className='text-mainBlue underline py-2 whitespace-nowrap'>
                고3 모의(교육청)
              </span>
            </div>
          </div>

          {/* Third Column with Sub-columns */}
          <div className='w-[500px] '>
            {[0, 1, 2, 3].map((index) => (
              <div className='flex ' key={index}>
                <div className='w-[125px] py-2  text-center'>
                  <span>120</span>
                </div>
                <div className='w-[125px] py-2  text-center'>
                  <span>240</span>
                </div>
                <div className='w-[125px] py-2  text-center'>
                  <span>6000</span>
                </div>
                <div className='w-[125px] py-2 text-center'>
                  <span>11800</span>
                </div>
              </div>
            ))}
          </div>
          {/* Fourth Column */}
          <div className='w-[160px] self-stretch    text-center'>
            <div className='flex flex-col'>
              {[0, 1, 2, 3].map((index) => (
                <span className='py-2' key={index}>
                  180
                </span>
              ))}
            </div>
          </div>

          {/* Fifth Column */}
          <div className='w-[160px] self-stretch   text-center'>
            <div className='flex flex-col gap-2'>
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  className='w-[160px] self-stretch flex items-center justify-center py-2'
                  // onClick={() => handleOpenModal(index)}
                >
                  <FaCalendar className='text-gray-400' />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Third Row  */}
        <div className='flex  border-b  justify-center items-center w-full   '>
          {/* First Column */}
          <div className='w-[180px] self-stretch flex'>
            <div className=' flex w-[90px] items-center justify-center text-center  border-r border-grayBorder'>
              <span>EBS 교재</span>
            </div>
            <div className=' flex w-[90px] items-center justify-center text-center  border-r border-grayBorder'>
              <span>
                수능특강
                <br />
                수능완성
              </span>
            </div>
          </div>

          {/* Second Column */}
          <div className='w-[180px] self-stretch  text-center '>
            <div className='flex flex-col'>
              <span className='text-mainBlue underline py-2'>고1 모의</span>
              <span className='text-mainBlue underline py-2'>
                고3 모의(교육청)
              </span>
              <span className='text-mainBlue underline py-2'>고2 모의</span>
              <span className='text-mainBlue underline py-2 whitespace-nowrap'>
                고3 모의(교육청)
              </span>
            </div>
          </div>

          {/* Third Column with Sub-columns */}
          <div className='w-[500px] '>
            {[0, 1, 2, 3].map((index) => (
              <div className='flex ' key={index}>
                <div className='w-[125px] py-2  text-center'>
                  <span>120</span>
                </div>
                <div className='w-[125px] py-2  text-center'>
                  <span>240</span>
                </div>
                <div className='w-[125px] py-2  text-center'>
                  <span>6000</span>
                </div>
                <div className='w-[125px] py-2 text-center'>
                  <span>11800</span>
                </div>
              </div>
            ))}
          </div>
          {/* Fourth Column */}
          <div className='w-[160px] self-stretch    text-center'>
            <div className='flex flex-col'>
              {[0, 1, 2, 3].map((index) => (
                <span className='py-2' key={index}>
                  180
                </span>
              ))}
            </div>
          </div>

          {/* Fifth Column */}
          <div className='w-[160px] self-stretch   text-center'>
            <div className='flex flex-col gap-2'>
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  className='w-[160px] self-stretch flex items-center justify-center py-2'
                  onClick={() => handleOpenModal()}
                >
                  <FaCalendar className='text-gray-400' />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Fourth Row  */}
        <div className='flex  border-b  justify-center items-center w-full   '>
          {/* First Column */}
          <div className='w-[180px] self-stretch flex'>
            <div className=' flex w-[90px] items-center justify-center text-center  border-r border-grayBorder'>
              교과서
            </div>
            <div className=' flex flex-col w-[90px] items-center justify-center text-center  border-r border-grayBorder'>
              <div className='flex-1 flex justify-center items-center self-stretch border-b-2 '>
                2022
                <br />
                공통국어
              </div>
              <div className='pb-1 whitespace-nowrap '>
                2015 <br />
                문학 교과서
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className='w-[180px] self-stretch  text-center '>
            <div className='flex flex-col'>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
                <span className='text-mainBlue underline py-2' key={index}>
                  고2 모의
                </span>
              ))}
            </div>
          </div>

          {/* Third Column with Sub-columns */}
          <div className='w-[500px] '>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
              <div className='flex ' key={index}>
                <div className='w-[125px] py-2  text-center'>
                  <span>120</span>
                </div>
                <div className='w-[125px] py-2  text-center'>
                  <span>240</span>
                </div>
                <div className='w-[125px] py-2  text-center'>
                  <span>6000</span>
                </div>
                <div className='w-[125px] py-2 text-center'>
                  <span>11800</span>
                </div>
              </div>
            ))}
          </div>
          {/* Fourth Column */}
          <div className='w-[160px] self-stretch    text-center'>
            <div className='flex flex-col'>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
                <span className='py-2' key={index}>
                  180
                </span>
              ))}
            </div>
          </div>

          {/* Fifth Column */}
          <div className='w-[160px] self-stretch   text-center'>
            <div className='flex flex-col gap-2'>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
                <button
                  key={index}
                  className='w-[160px] self-stretch flex items-center justify-center py-2'
                  onClick={() => handleOpenModal()}
                >
                  <FaCalendar className='text-gray-400' />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Fifth Row */}
        <div className='flex  border-b  justify-center items-center w-full   '>
          {/* First Column */}
          <div className='w-[180px] self-stretch flex'>
            <div className=' flex w-[90px] items-center justify-center text-center  border-r border-grayBorder'>
              문학
            </div>
            <div className=' flex flex-col w-[90px] items-center justify-center text-center  border-r border-grayBorder'>
              <div className=' h-[80px] flex items-center border-b-2'>
                작품해설 <br />
                정리
              </div>
              <div className=' flex-1  flex items-center whitespace-nowrap '>
                문제
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className='w-[180px] self-stretch  text-center '>
            <div className='flex flex-col'>
              {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
                <span className='text-mainBlue underline py-2' key={index}>
                  고2 모의
                </span>
              ))}
            </div>
          </div>

          {/* Third Column with Sub-columns */}
          <div className='w-[500px] '>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
              <div className='flex ' key={index}>
                <div className='w-[125px] py-2  text-center'>
                  <span>120</span>
                </div>
                <div className='w-[125px] py-2  text-center'>
                  <span>240</span>
                </div>
                <div className='w-[125px] py-2  text-center'>
                  <span>6000</span>
                </div>
                <div className='w-[125px] py-2 text-center'>
                  <span>11800</span>
                </div>
              </div>
            ))}
          </div>
          {/* Fourth Column */}
          <div className='w-[160px] self-stretch    text-center'>
            <div className='flex flex-col'>
              {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
                <span className='py-2' key={index}>
                  180
                </span>
              ))}
            </div>
          </div>

          {/* Fifth Column */}
          <div className='w-[160px] self-stretch   text-center'>
            <div className='flex flex-col gap-2'>
              {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
                <button
                  key={index}
                  className='w-[160px] self-stretch flex items-center justify-center py-2'
                  onClick={() => handleOpenModal()}
                >
                  <FaCalendar className='text-gray-400' />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sixth Row */}
        <div className='flex  border-b  justify-center items-center w-full   '>
          {/* First Column */}
          <div className='w-[180px] flex items-center justify-center text-center  border-r border-grayBorder self-stretch'>
            독서
          </div>

          {/* Second Column */}
          <div className='w-[180px] self-stretch  text-center '>
            <div className='flex flex-col'>
              {[0, 1].map((index) => (
                <span className='text-mainBlue underline py-2' key={index}>
                  고2 모의
                </span>
              ))}
            </div>
          </div>

          {/* Third Column with Sub-columns */}
          <div className='w-[500px] '>
            {[0, 1].map((index) => (
              <div className='flex ' key={index}>
                <div className='w-[125px] py-2  text-center'>
                  <span>120</span>
                </div>
                <div className='w-[125px] py-2  text-center'>
                  <span>240</span>
                </div>
                <div className='w-[125px] py-2  text-center'>
                  <span>6000</span>
                </div>
                <div className='w-[125px] py-2 text-center'>
                  <span>11800</span>
                </div>
              </div>
            ))}
          </div>
          {/* Fourth Column */}
          <div className='w-[160px] self-stretch    text-center'>
            <div className='flex flex-col'>
              {[0, 1].map((index) => (
                <span className='py-2' key={index}>
                  180
                </span>
              ))}
            </div>
          </div>

          {/* Fifth Column */}
          <div className='w-[160px] self-stretch   text-center'>
            <div className='flex flex-col gap-2'>
              {[0, 1].map((index) => (
                <button
                  key={index}
                  className='w-[160px] self-stretch flex items-center justify-center py-2'
                  onClick={() => handleOpenModal()}
                >
                  <FaCalendar className='text-gray-400' />
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Seventh Row */}
        <div className='flex  border-b  justify-center items-center w-full   '>
          {/* First Column */}
          <div className='w-[180px] flex items-center justify-center text-center  border-r border-grayBorder self-stretch'>
            화법과 작문
          </div>

          {/* Second Column */}
          <div className='w-[180px] self-stretch  text-center '>
            <div className='flex flex-col'>
              {[0, 1].map((index) => (
                <span className='text-mainBlue underline py-2' key={index}>
                  고2 모의
                </span>
              ))}
            </div>
          </div>

          {/* Third Column with Sub-columns */}
          <div className='w-[500px] '>
            {[0, 1].map((index) => (
              <div className='flex ' key={index}>
                <div className='w-[125px] py-2  text-center'>
                  <span>120</span>
                </div>
                <div className='w-[125px] py-2  text-center'>
                  <span>240</span>
                </div>
                <div className='w-[125px] py-2  text-center'>
                  <span>6000</span>
                </div>
                <div className='w-[125px] py-2 text-center'>
                  <span>11800</span>
                </div>
              </div>
            ))}
          </div>
          {/* Fourth Column */}
          <div className='w-[160px] self-stretch    text-center'>
            <div className='flex flex-col'>
              {[0, 1].map((index) => (
                <span className='py-2' key={index}>
                  180
                </span>
              ))}
            </div>
          </div>

          {/* Fifth Column */}
          <div className='w-[160px] self-stretch   text-center'>
            <div className='flex flex-col gap-2'>
              {[0, 1].map((index) => (
                <button
                  key={index}
                  className='w-[160px] self-stretch flex items-center justify-center py-2'
                  onClick={() => handleOpenModal()}
                >
                  <FaCalendar className='text-gray-400' />
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* eightth Row */}
        <div className='flex  border-b  justify-center items-center w-full   '>
          {/* First Column */}
          <div className='w-[180px] flex items-center justify-center text-center  border-r border-grayBorder self-stretch'>
            언어와 매체
          </div>

          {/* Second Column */}
          <div className='w-[180px] self-stretch  text-center '>
            <div className='flex flex-col'>
              {[0, 1].map((index) => (
                <span className='text-mainBlue underline py-2' key={index}>
                  고2 모의
                </span>
              ))}
            </div>
          </div>

          {/* Third Column with Sub-columns */}
          <div className='w-[500px] '>
            {[0, 1].map((index) => (
              <div className='flex ' key={index}>
                <div className='w-[125px] py-2  text-center'>
                  <span>120</span>
                </div>
                <div className='w-[125px] py-2  text-center'>
                  <span>240</span>
                </div>
                <div className='w-[125px] py-2  text-center'>
                  <span>6000</span>
                </div>
                <div className='w-[125px] py-2 text-center'>
                  <span>11800</span>
                </div>
              </div>
            ))}
          </div>
          {/* Fourth Column */}
          <div className='w-[160px] self-stretch    text-center'>
            <div className='flex flex-col'>
              {[0, 1].map((index) => (
                <span className='py-2' key={index}>
                  180
                </span>
              ))}
            </div>
          </div>

          {/* Fifth Column */}
          <div className='w-[160px] self-stretch   text-center'>
            <div className='flex flex-col gap-2'>
              {[0, 1].map((index) => (
                <button
                  key={index}
                  className='w-[160px] self-stretch flex items-center justify-center py-2'
                  onClick={() => handleOpenModal()}
                >
                  <FaCalendar className='text-gray-400' />
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* ninth Row */}
        <div className='flex  border-b  justify-center items-center w-full   '>
          {/* First Column */}
          <div className='w-[180px] flex items-center justify-center text-center  border-r border-grayBorder self-stretch'>
            언어와 매체
          </div>

          {/* Second Column */}
          <div className='w-[180px] self-stretch  text-center '>
            <div className='flex flex-col'>
              {[0, 1, 3].map((index) => (
                <span className='text-mainBlue underline py-2' key={index}>
                  고2 모의
                </span>
              ))}
            </div>
          </div>

          {/* Third Column with Sub-columns */}
          <div className='w-[500px] '>
            {[0, 1, 3].map((index) => (
              <div className='flex ' key={index}>
                <div className='w-[125px] py-2  text-center'>
                  <span>120</span>
                </div>
                <div className='w-[125px] py-2  text-center'>
                  <span>240</span>
                </div>
                <div className='w-[125px] py-2  text-center'>
                  <span>6000</span>
                </div>
                <div className='w-[125px] py-2 text-center'>
                  <span>11800</span>
                </div>
              </div>
            ))}
          </div>
          {/* Fourth Column */}
          <div className='w-[160px] self-stretch    text-center'>
            <div className='flex flex-col'>
              {[0, 1, 3].map((index) => (
                <span className='py-2' key={index}>
                  180
                </span>
              ))}
            </div>
          </div>

          {/* Fifth Column */}
          <div className='w-[160px] self-stretch   text-center'>
            <div className='flex flex-col gap-2'>
              {[0, 1, 3].map((index) => (
                <button
                  key={index}
                  className='w-[160px] self-stretch flex items-center justify-center py-2'
                  onClick={() => handleOpenModal()}
                >
                  <FaCalendar className='text-gray-400' />
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* thenth Row */}
        <div className='flex  border-b  justify-center items-center w-full   '>
          {/* First Column */}
          <div className='w-[180px] flex items-center justify-center text-center  border-r border-grayBorder self-stretch'>
            기출 문제 해설
          </div>

          {/* Second Column */}
          <div className='w-[180px] self-stretch  text-center '>
            <div className='flex flex-col'>
              {[0].map((index) => (
                <span
                  className='text-mainBlue whitespace-nowrap underline px-1 py-2'
                  key={index}
                >
                  평가원 수능 기출 문제 풀이
                </span>
              ))}
            </div>
          </div>

          {/* Third Column with Sub-columns */}
          <div className='w-[500px] '>
            {[0].map((index) => (
              <div className='flex ' key={index}>
                <div className='w-[125px] py-2  text-center'>
                  <span>120</span>
                </div>
                <div className='w-[125px] py-2  text-center'>
                  <span>240</span>
                </div>
                <div className='w-[125px] py-2  text-center'>
                  <span>6000</span>
                </div>
                <div className='w-[125px] py-2 text-center'>
                  <span>11800</span>
                </div>
              </div>
            ))}
          </div>
          {/* Fourth Column */}
          <div className='w-[160px] self-stretch    text-center'>
            <div className='flex flex-col'>
              {[0].map((index) => (
                <span className='py-2' key={index}>
                  180
                </span>
              ))}
            </div>
          </div>

          {/* Fifth Column */}
          <div className='w-[160px] self-stretch   text-center'>
            <div className='flex flex-col gap-2'>
              {[0].map((index) => (
                <button
                  key={index}
                  className='w-[160px] self-stretch flex items-center justify-center py-2'
                  onClick={() => handleOpenModal()}
                >
                  <FaCalendar className='text-gray-400' />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Eleventh Row */}
        <div className='flex  border-b  justify-center items-center w-full   '>
          {/* First Column */}
          <div className='w-[180px] flex items-center justify-center text-center  border-r border-grayBorder self-stretch'>
            학습 자료
          </div>

          {/* Second Column */}
          <div className='w-[180px] self-stretch  text-center '>
            <div className='flex flex-col'>
              {[0, 1, 2, 3].map((index) => (
                <span className='text-mainBlue underline py-2' key={index}>
                  고2 모의
                </span>
              ))}
            </div>
          </div>

          {/* Third Column with Sub-columns */}
          <div className='w-[500px] '>
            {[0, 1, 2, 3].map((index) => (
              <div className='flex ' key={index}>
                <div className='w-[125px] py-2  text-center'>
                  <span>120</span>
                </div>
                <div className='w-[125px] py-2  text-center'>
                  <span>240</span>
                </div>
                <div className='w-[125px] py-2  text-center'>
                  <span>6000</span>
                </div>
                <div className='w-[125px] py-2 text-center'>
                  <span>11800</span>
                </div>
              </div>
            ))}
          </div>
          {/* Fourth Column */}
          <div className='w-[160px] self-stretch    text-center'>
            <div className='flex flex-col'>
              {[0, 1, 2, 3].map((index) => (
                <span className='py-2' key={index}>
                  180
                </span>
              ))}
            </div>
          </div>

          {/* Fifth Column */}
          <div className='w-[160px] self-stretch   text-center'>
            <div className='flex flex-col gap-2'>
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  className='w-[160px] self-stretch flex items-center justify-center py-2'
                  onClick={() => handleOpenModal()}
                >
                  <FaCalendar className='text-gray-400' />
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className='bg-white rounded-xl'
        size='md'
      >
        <ModalContent>
          <ModalBody className='p-6'>
            <div className='space-y-6'>
              <h3 className='text-xl font-bold text-center'>기간 설정</h3>

              <div className='flex items-center justify-center gap-2'>
                <DateRangePicker
                  // value={
                  //   activeCalendarIndex !== null
                  //     ? dateRanges[activeCalendarIndex]
                  //     : undefined
                  // }
                  // onValueChange={handleDateChange}
                  className='max-w-full'
                />
                <button
                  // onClick={handleReset}
                  className='p-2 border border-gray-200 rounded-lg hover:bg-gray-50'
                >
                  <IoReload className='text-gray-400' />
                </button>
              </div>

              <div className='flex justify-center'>
                <Button
                  className='bg-[#2B2D36] text-white px-8 rounded-lg'
                  onClick={() => setIsModalOpen(false)}
                >
                  확인
                </Button>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </section>
  );
};

export default HomeIndicator;
