import CommonHeader from '@/components/CommonHeader';
import { Button, Textarea } from '@nextui-org/react';
import React from 'react';

const MainBannerManagement = () => {
  return (
    <div>
      <CommonHeader title='메인 배너' />
      <div className='flex w-full border-y-2 border-[#E5E7EB]'>
        {/* Left sidebar - 15% width */}
        <div className='w-[10%] flex items-center justify-center bg-bgGray text-secondGray p-4 border-r border-[#E5E7EB]'>
          이미지
        </div>

        {/* Right content area - 85% width */}
        <div className='flex-1'>
          <div className='flex flex-col p-4 gap-2'>
            {/* File finder button */}
            <div>
              <button className='px-3 py-1.5 text-sm bg-bgGray text-secondGray border border-[#E5E7EB] rounded'>
                파일 찾기
              </button>
            </div>

            {/* Preview area */}
            <div className='w-[75%] h-[120px] bg-[#FFEDED] rounded'></div>
          </div>
        </div>
      </div>

      <div className='flex justify-end mt-4'>
        <Button className='min-w-[28px] bg-mainBlack text-white rounded-md'>
          수정
        </Button>
      </div>
    </div>
  );
};

export default MainBannerManagement;
