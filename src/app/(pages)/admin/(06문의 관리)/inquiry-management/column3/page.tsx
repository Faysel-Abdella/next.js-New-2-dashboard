import CommonHeader from '@/components/CommonHeader';
import { Button, Textarea } from '@nextui-org/react';
import React from 'react';

const InquiryManagementDetail2 = () => {
  return (
    <div>
      <CommonHeader title='1:1 문의 관리' />
      <div className='flex flex-col w-full border border-[#E5E7EB] rounded-md overflow-hidden'>
        {/* Name Row */}
        <div className='flex border-b border-[#E5E7EB]'>
          <div className='w-[15%] text-secondGray bg-bgGray p-4 flex items-center border-r border-[#E5E7EB]'>
            이름
          </div>
          <div className='flex-1 p-4'>홍길동</div>
          <div className='w-[15%] text-secondGray bg-bgGray p-4 flex items-center border-x border-[#E5E7EB]'>
            ID
          </div>
          <div className='flex-1 p-4'>idid123</div>
        </div>

        {/* Phone Row */}
        <div className='flex border-b border-[#E5E7EB]'>
          <div className='w-[15%] text-secondGray bg-bgGray p-4 flex items-center border-r border-[#E5E7EB]'>
            휴대폰 번호
          </div>
          <div className='flex-1 p-4'>01011112222</div>
          <div className='w-[15%] text-secondGray bg-bgGray p-4 flex items-center border-x border-[#E5E7EB]'>
            이메일
          </div>
          <div className='flex-1 p-4'>aaa123@aaa.com</div>
        </div>

        {/* Date Row */}
        <div className='flex border-b border-[#E5E7EB]'>
          <div className='w-[15%] text-secondGray bg-bgGray p-4 flex items-center border-r border-[#E5E7EB]'>
            작성일
          </div>
          <div className='flex-1 p-4'>2024-11-01 11:30:42</div>
          <div className='w-[15%] text-secondGray bg-bgGray p-4 flex items-center border-x border-[#E5E7EB]'>
            상태
          </div>
          <div className='flex-1 p-4'>
            <span className='text-[#42A8FD]'>대기중</span>
          </div>
        </div>

        {/* Title Row */}
        <div className='flex border-b border-[#E5E7EB]'>
          <div className='w-[15%] text-secondGray bg-bgGray p-4 flex items-center border-r border-[#E5E7EB]'>
            제목
          </div>
          <div className='flex-1 p-4'>제너로로픈일 초과</div>
        </div>

        {/* Content Row */}
        <div className='flex border-b border-[#E5E7EB]'>
          <div className='w-[15%]  text-secondGray bg-bgGray p-4 flex items-center border-r border-[#E5E7EB]'>
            내용
          </div>
          <div className='flex-1 p-4'>
            <div className='flex flex-col gap-1'>
              <div>제너로로픈일 초과에 대한 문의 내용</div>
              <div>제너로로픈일 초과에 대한 문의 내용</div>
              <div>제너로로픈일 초과에 대한 문의 내용</div>
            </div>
          </div>
        </div>

        <div className='flex border-b border-[#E5E7EB]'>
          <div className='w-[15%] text-secondGray bg-bgGray p-4 flex items-center border-r border-[#E5E7EB]'>
            작성일
          </div>
          <div className='flex-1 p-4'>2024-11-01 11:30:42</div>
          <div className='w-[15%] text-secondGray bg-bgGray p-4 flex items-center border-x border-[#E5E7EB]'>
            답변자
          </div>
          <div className='flex-1 p-4'>부관리자1</div>
        </div>
        {/* !!! last row  */}
        <div className='flex border-b border-[#E5E7EB]'>
          <div className='w-[15%] text-secondGray bg-bgGray p-4 flex items-center border-r border-[#E5E7EB]'>
            제목
          </div>
          <div className='flex-1 p-4'>
            안녕하세요 자유로 국어입니다. <br />
            문의주신 내용에 대한 답변입니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryManagementDetail2;
