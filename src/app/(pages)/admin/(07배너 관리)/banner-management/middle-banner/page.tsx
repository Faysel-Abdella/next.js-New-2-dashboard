import CommonHeader from '@/components/CommonHeader';
import { Button, Switch, Textarea } from '@nextui-org/react';
import React from 'react';

const MiddleBannerManagement = () => {
  return (
    <div>
      <CommonHeader title='메인 배너' />
      <div className='w-full  overflow-hidden'>
        {/* Header */}
        <div className='flex bg-bgGray text-secondGray border-b border-[#E5E7EB]'>
          <div className='flex-1 text-start p-3'>구분</div>
          <div className='flex-1 text-start p-3'>이미지</div>
          <div className='flex-1 text-start p-3'>링크</div>
          <div className='flex-1  p-3 text-start'>사용 여부</div>
          <div className='flex-1 p-3 text-center'>상세보기</div>
        </div>

        {/* List Items */}
        {['3단배너(좌)', '3단배너(중)', '3단배너(우)', '띠배너'].map(
          (item, index) => (
            <div
              key={index}
              className='flex items-center border-b border-[#E5E7EB] '
            >
              <div className='flex-1 p-4'>{item}</div>
              <div className='flex-1 p-4'>-</div>
              <div className='flex-1 p-4'>-</div>
              <div className='flex-1  p-4'>
                <Switch size='md' />
              </div>
              <div className='flex-1 flex justify-center p-4 '>
                <button className='text-[#0EA5E9] hover:underline underline'>
                  상세보기
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default MiddleBannerManagement;
