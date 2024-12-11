import CommonHeader from '@/components/CommonHeader';
import { Button, Input, Switch } from '@nextui-org/react';

const MiddleBannerManagementDetailTwo = () => {
  return (
    <div>
      <CommonHeader title='중간 배너 상세보기' />
      <div className='w-full border-y-2 border-[#E5E7EB]  overflow-hidden'>
        {/* Image Upload Row */}
        <div className='flex border-b-2 border-[#E5E7EB]'>
          <div className='w-[140px] bg-bgGray text-secondGray  flex items-center justify-center border-r border-[#E5E7EB]'>
            이미지
          </div>
          <div className='flex-1 p-2'>
            <Button
              size='sm'
              className='bg-bgGray text-secondGray text-sm  rounded px-3 py-5'
            >
              파일 찾기
            </Button>
          </div>
        </div>

        {/* Link Input Row */}
        <div className='flex border-b-2 border-[#E5E7EB]'>
          <div className='w-[140px] bg-bgGray text-secondGray  flex items-center justify-center border-r border-[#E5E7EB]'>
            링크
          </div>
          <div className=' p-2'>
            <Input
              placeholder='입력'
              variant='bordered'
              style={{ width: '400px' }}
              // width={400}
              classNames={{
                input: 'text-sm',
                inputWrapper: 'border-[#E5E7EB] shadow-none h-10',
              }}
            />
          </div>
        </div>

        {/* Toggle Switch Row */}
        <div className='flex '>
          <div className='w-[140px] bg-bgGray text-secondGray  flex items-center justify-center border-r border-[#E5E7EB]'>
            사용 여부
          </div>
          <div className='flex-1 p-2'>
            <Switch size='md' />
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

export default MiddleBannerManagementDetailTwo;
