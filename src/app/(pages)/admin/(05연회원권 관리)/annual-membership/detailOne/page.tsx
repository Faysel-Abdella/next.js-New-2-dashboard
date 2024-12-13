'use client';

import CommonHeader from '@/components/CommonHeader';
import { Button, Checkbox, Input } from '@nextui-org/react';
import { useState } from 'react';
import Link from 'next/link';
import DropDown from '@/components/DropDown'; // Assuming you have this component
import HeaderDropDown from '@/components/HeaderDropDown';

const AnnualMembershipOne = () => {
  const [viewValue, setViewValue] = useState('10');

  const viewOptions = [
    { key: '10', label: '10개씩 보기' },
    { key: '20', label: '20개씩 보기' },
    { key: '50', label: '50개씩 보기' },
    { key: '100', label: '100개씩 보기' },
  ];
  const viewOptionsDefault = viewOptions[0].key;
  return (
    <section>
      <CommonHeader title='' />
      <header>
        <div className='w-full bg-white border-y-2 border-grayLightBorder'>
          {/* Top row with three input groups */}
          <div className='flex gap-4 border-b-2 h-[60px] border-grayLightBorder '>
            <div className='w-1/3 flex gap-2'>
              <div className='w-[180px] bg-bgGray text-gray-600 flex items-center justify-center'>
                이름
              </div>
              <div className='flex items-center justify-center w-full'>
                <Input
                  defaultValue='고등 연회원'
                  classNames={{
                    input: 'bg-white',
                    inputWrapper:
                      'border-2 border-grayLightBorder bg-white shadow-none rounded-[7px]',
                  }}
                />
              </div>
            </div>
            <div className='w-1/3 flex gap-2'>
              <div className='w-[180px] bg-bgGray text-gray-600 flex items-center justify-center'>
                이름
              </div>
              <div className='flex items-center justify-center w-full'>
                <Input
                  defaultValue='고등 연회원'
                  classNames={{
                    input: 'bg-white',
                    inputWrapper:
                      'border-2 border-grayLightBorder bg-white shadow-none rounded-[7px]',
                  }}
                />
              </div>
            </div>
            <div className='w-1/3 flex gap-2'>
              <div className='w-[180px] bg-bgGray text-gray-600 flex items-center justify-center'>
                이름
              </div>
              <div className='flex items-center justify-center w-full'>
                <Input
                  defaultValue='고등 연회원'
                  classNames={{
                    input: 'bg-white',
                    inputWrapper:
                      'border-2 border-grayLightBorder bg-white shadow-none rounded-[7px]',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Bottom row with full-width input */}
          <div className='flex gap-4 h-[60px]  '>
            <div className='w-[120px] bg-bgGray text-gray-600 flex items-center justify-center'>
              이름
            </div>
            <div className='flex items-center justify-center flex-1'>
              <Input
                defaultValue='고등 연회원'
                classNames={{
                  input: 'bg-white rounded-sm',
                  inputWrapper:
                    'border-2 border-grayLightBorder bg-white shadow-none rounded-[7px]',
                }}
              />
            </div>
          </div>
        </div>
      </header>

      <main className='rounded-[20px] bg-white py-6 px-5 mt-6'>
        <h3 className='text-[#868F9A] text-xl font-bold mb-4'>
          이용 가능 게시판
        </h3>

        <article className='mt-5'>
          <Checkbox defaultSelected radius='sm'>
            Option
          </Checkbox>
          {/* First Row  */}
          <div className='flex mt-3 bg-white border-1    border-grayLightBorder justify-center items-center w-full   '>
            <div className='w-[400px] py-3  bg-bgGray flex items-center justify-center  border-r-1 border-grayLightBorder '>
              <Checkbox defaultSelected radius='sm'>
                모의고사
              </Checkbox>
            </div>

            <div className='flex-1 flex gap-6 text-center text-second-Gray px-6'>
              <Checkbox defaultSelected radius='sm'>
                고1 모의
              </Checkbox>
              <Checkbox defaultSelected radius='sm'>
                고2 모의
              </Checkbox>
              <Checkbox defaultSelected radius='sm'>
                고3 모의(교육청)
              </Checkbox>
              <Checkbox defaultSelected radius='sm'>
                고3 모의(평가원, 수능)
              </Checkbox>
            </div>
          </div>
          {/* Second Row */}

          <div className='flex bg-white border-1    border-grayLightBorder justify-center items-center w-full   '>
            <div className='w-[400px] self-stretch flex'>
              <div className=' flex w-[200px] items-center justify-center text-center  border-r border-grayBorder'>
                <Checkbox defaultSelected radius='sm'>
                  EBS 교재
                </Checkbox>
              </div>
              <div className=' flex w-[200px] items-center justify-center text-center  border-r border-grayBorder'>
                <Checkbox defaultSelected radius='sm'>
                  2026 수특, 수완
                </Checkbox>
              </div>
            </div>

            <div className='flex-1 flex flex-col gap-3'>
              <div className='flex justify-between items-center p-4'>
                {['test', 'test', 'test', 'test'].map((label, index) => (
                  <Checkbox
                    key={index}
                    defaultSelected
                    radius='sm'
                    classNames={{
                      label: 'whitespace-nowrap ',
                    }}
                  >
                    {label}
                  </Checkbox>
                ))}
              </div>
              <div className='flex gap-8 items-center px-4 pb-4'>
                {['test', 'test'].map((label, index) => (
                  <Checkbox
                    key={index + 4}
                    defaultSelected
                    radius='sm'
                    classNames={{
                      label: 'whitespace-nowrap ',
                    }}
                  >
                    {label}
                  </Checkbox>
                ))}
              </div>
            </div>
          </div>
          {/* Third Row */}
        </article>
      </main>
    </section>
  );
};

export default AnnualMembershipOne;
