'use client';

import CommonHeader from '@/components/CommonHeader';
import { Button, Checkbox, Input } from '@nextui-org/react';
import { useState } from 'react';
import Link from 'next/link';
import DropDown from '@/components/DropDown'; // Assuming you have this component
import HeaderDropDown from '@/components/HeaderDropDown';

const AnnualMembershipTwo = () => {
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
      <CommonHeader title='연회원권 상세보기' />
      <header>
        <div className='w-full bg-white border-y-1 border-grayLightBorder'>
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
          <Checkbox radius='sm'>
            <p className='font-bold text-xl'>고등 국어</p>
          </Checkbox>
          {/* First Row  */}
          <div className='flex mt-3 bg-white border-1    border-grayLightBorder justify-center items-center w-full   '>
            <div className='w-[400px] py-3  bg-bgGray flex items-center justify-center  border-r-1 border-grayLightBorder '>
              <Checkbox radius='sm'>모의고사</Checkbox>
            </div>

            <div className='flex-1 flex gap-6 text-center text-second-Gray px-6'>
              <Checkbox radius='sm'>고1 모의</Checkbox>
              <Checkbox radius='sm'>고2 모의</Checkbox>
              <Checkbox radius='sm'>고3 모의(교육청)</Checkbox>
              <Checkbox radius='sm'>고3 모의(평가원, 수능)</Checkbox>
            </div>
          </div>
          {/* Second Row */}

          <div className='flex bg-white border-1 h-[90px]    border-grayLightBorder justify-center items-center w-full   '>
            <div className='w-[400px] bg-bgGray  self-stretch flex'>
              <div className=' flex w-[200px] items-center justify-center text-center  border-r border-grayBorder'>
                <Checkbox radius='sm'>
                  <p className='font-bold'>EBS 교재</p>
                </Checkbox>
              </div>
              <div className=' flex w-[200px] items-center justify-center text-center  border-r border-grayBorder'>
                <Checkbox radius='sm'>
                  <p className='text-secondGray'>2026 수특, 수완</p>
                </Checkbox>
              </div>
            </div>

            <div className='flex-1 flex flex-col'>
              <div className='flex gap-10 items-center p-4'>
                {[
                  '2026 수특, 수완',
                  '2026 수특, 수완',
                  '2026 수특, 수완',
                  '2026 수특, 수완',
                ].map((label, index) => (
                  <Checkbox
                    key={index}
                    radius='sm'
                    classNames={{
                      label: 'whitespace-nowrap ',
                    }}
                  >
                    {label}
                  </Checkbox>
                ))}
              </div>
              <div className='flex gap-10 items-center px-4 pb-4'>
                {['2026 수특, 수완', '2026 수특, 수완'].map((label, index) => (
                  <Checkbox
                    key={index + 4}
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
          <div className='flex bg-white border-1 h-[180px]    border-grayLightBorder justify-center items-center w-full   '>
            <div className='w-[400px] bg-bgGray  self-stretch flex'>
              <div className=' flex w-[200px] items-center justify-center   border-r border-grayBorder'>
                <Checkbox radius='sm'>
                  <p className='font-bold'>교과서</p>
                </Checkbox>
              </div>
              <div className=' flex flex-col  w-[200px]   border-r border-grayBorder'>
                <div className=' flex items-center justify-center h-[60px]'>
                  <Checkbox radius='sm'>
                    <p className='text-secondGray'> 2022 공통국어</p>
                  </Checkbox>
                </div>

                <div className='flex-1 flex items-center justify-center border-t-2 w-[200px] '>
                  <Checkbox radius='sm'>
                    <p className='text-secondGray'> 2022 공통국어</p>
                  </Checkbox>
                </div>
              </div>
            </div>

            <div className='flex-1 self-stretch flex-col'>
              <div className='h-[60px]'>
                <div className='flex gap-10 items-center p-4'>
                  {['문학 목차'].map((label, index) => (
                    <Checkbox
                      key={index}
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
              <div className=' border-grayBorder border-t-1'>
                <div className='flex gap-10 items-center p-4'>
                  {[
                    '비상(박)',
                    '비상(강)',
                    '비상(박)',
                    '천재(김수)',
                    '천재(김종)',
                  ].map((label, index) => (
                    <Checkbox
                      key={index}
                      radius='sm'
                      classNames={{
                        label: 'whitespace-nowrap ',
                      }}
                    >
                      {label}
                    </Checkbox>
                  ))}
                </div>
                <div className='flex gap-10 items-center px-4 '>
                  {['지학사', '창비', '해냄', '해냄'].map((label, index) => (
                    <Checkbox
                      key={index + 4}
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
          </div>

          {/* ************************************************************************************************* */}
          {/* Second  Table */}

          <div className='flex bg-white border-1 h-[180px] mt-6   border-grayLightBorder justify-center items-center w-full   '>
            <div className='w-[400px] bg-bgGray  self-stretch flex'>
              <div className=' flex w-[200px] items-center justify-center   border-r border-grayBorder'>
                <Checkbox radius='sm'>
                  <p className='font-bold'>문학</p>
                </Checkbox>
              </div>
              <div className=' flex flex-col  w-[200px]   border-r border-grayBorder'>
                <div className=' flex items-center justify-center h-[60px]'>
                  <Checkbox radius='sm'>
                    <p className='text-secondGray'>작품 해설</p>
                  </Checkbox>
                </div>

                <div className='flex-1 flex items-center justify-center border-t-2 w-[200px] '>
                  <Checkbox radius='sm'>
                    <p className='text-secondGray'>문제</p>
                  </Checkbox>
                </div>
              </div>
            </div>

            <div className='flex-1 self-stretch flex-col'>
              <div className='h-[60px]'>
                <div className='flex gap-10 items-center p-4'>
                  {['작품 해설, 정리', '작품 해설, 정리'].map(
                    (label, index) => (
                      <Checkbox
                        key={index}
                        radius='sm'
                        classNames={{
                          label: 'whitespace-nowrap ',
                        }}
                      >
                        {label}
                      </Checkbox>
                    )
                  )}
                </div>
              </div>
              <div className=' border-grayBorder border-t-1'>
                <div className='flex gap-10 items-center p-4'>
                  {[
                    '실전 문제1',
                    '실전 문제1',
                    '실전 문제1',
                    '실전 문제1',
                    '실전 문제1',
                  ].map((label, index) => (
                    <Checkbox
                      key={index}
                      radius='sm'
                      classNames={{
                        label: 'whitespace-nowrap ',
                      }}
                    >
                      {label}
                    </Checkbox>
                  ))}
                </div>
                <div className='flex gap-10 items-center px-4 '>
                  {['종합 문제'].map((label, index) => (
                    <Checkbox
                      key={index + 4}
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
          </div>
          {/* rows to Last */}
          <div className='flex  bg-white border-b-1  border-x-1  border-grayLightBorder justify-center items-center w-full   '>
            <div className='w-[400px] py-3  bg-bgGray flex items-center justify-start px-8  border-r-1 border-grayLightBorder '>
              <Checkbox radius='sm'>
                <p className='font-bold text-right'>독서</p>
              </Checkbox>
            </div>

            <div className='flex-1 flex gap-6 text-center text-second-Gray px-6'>
              <Checkbox radius='sm'>기출 문제</Checkbox>
              <Checkbox radius='sm'>실전 문제</Checkbox>
            </div>
          </div>
          <div className='flex  bg-white border-b-1  border-x-1  border-grayLightBorder justify-center items-center w-full   '>
            <div className='w-[400px] py-3  bg-bgGray flex items-center justify-start px-8  border-r-1 border-grayLightBorder '>
              <Checkbox radius='sm'>
                <p className='font-bold'>화법과 작문</p>
              </Checkbox>
            </div>

            <div className='flex-1 flex gap-6 text-center text-second-Gray px-6'>
              <Checkbox radius='sm'>기출 문제</Checkbox>
              <Checkbox radius='sm'>실전 문제</Checkbox>
            </div>
          </div>
          <div className='flex  bg-white border-b-1  border-x-1  border-grayLightBorder justify-center items-center w-full   '>
            <div className='w-[400px] py-3  bg-bgGray flex items-center justify-start px-8 border-r-1 border-grayLightBorder '>
              <Checkbox radius='sm'>
                <p className='font-bold '>언어와 매체</p>
              </Checkbox>
            </div>

            <div className='flex-1 flex gap-6 text-center text-second-Gray px-6'>
              <Checkbox radius='sm'>기출 문제</Checkbox>
              <Checkbox radius='sm'>실전 문제</Checkbox>
            </div>
          </div>
          <div className='flex  bg-white border-b-1  border-x-1  border-grayLightBorder justify-center items-center w-full   '>
            <div className='w-[400px] py-3  bg-bgGray flex items-center justify-start px-8  border-r-1 border-grayLightBorder '>
              <Checkbox radius='sm'>
                <p className='font-bold'>문법</p>
              </Checkbox>
            </div>

            <div className='flex-1 flex gap-6 text-center text-second-Gray px-6'>
              <Checkbox radius='sm'>기출 문제</Checkbox>
              <Checkbox radius='sm'>실전 문제1</Checkbox>
              <Checkbox radius='sm'>실전 문제2</Checkbox>
            </div>
          </div>
          <div className='flex  bg-white border-b-1  border-x-1  border-grayLightBorder justify-center items-center w-full   '>
            <div className='w-[400px] py-3  bg-bgGray flex items-center justify-start px-8  border-r-1 border-grayLightBorder '>
              <Checkbox radius='sm'>
                <p className='font-bold'>기출 문제 해설</p>
              </Checkbox>
            </div>

            <div className='flex-1 flex gap-6 text-center text-second-Gray px-6'>
              <Checkbox radius='sm'>평가원 수능 기출문제 풀이</Checkbox>
            </div>
          </div>

          {/* last Row */}
          <div className='flex  bg-white border-b-1  border-x-1  border-grayLightBorder  items-center w-full   '>
            <div className='w-[400px] py-3 px-8  bg-bgGray flex items-center   border-r-1 border-grayLightBorder '>
              <Checkbox radius='sm'>
                <p className='font-bold  text-start'> 학습 자료</p>
              </Checkbox>
            </div>

            <div className='flex-1 flex gap-6 text-center text-second-Gray px-6'>
              <Checkbox radius='sm'>문학 개념</Checkbox>
              <Checkbox radius='sm'>문제 풀이 해법</Checkbox>
              <Checkbox radius='sm'>글의 장르</Checkbox>
              <Checkbox radius='sm'>수사법</Checkbox>
            </div>
          </div>

          <div className='p-4 border-t-[0.5px] border-grayBorder mt-6'>
            <Checkbox radius='sm'>
              <p className='font-bold text-xl'>중학 국어</p>
            </Checkbox>
          </div>

          <div className='flex bg-white border-x border-t  h-[80px]    border-grayLightBorder  items-center w-full   '>
            <div className='w-[350px] bg-bgGray  self-stretch flex'>
              <div className=' flex w-[200px] items-center justify-center text-center  border-r border-grayBorder'>
                <Checkbox radius='sm'>
                  <p className='font-bold'> 2022 중학 국어</p>
                </Checkbox>
              </div>
              <div className=' flex w-[150px] items-center justify-center text-center  border-r border-grayBorder'>
                <Checkbox radius='sm'>
                  <p className='text-secondGray'>1학년</p>
                </Checkbox>
              </div>
            </div>

            <div className='flex-1 flex flex-col'>
              <div className='flex gap-10 items-center p-4'>
                {['미(신)', '미(민)', '비(박현)', '천(정)', '천(노)', '지'].map(
                  (label, index) => (
                    <Checkbox
                      key={index}
                      radius='sm'
                      classNames={{
                        label: 'whitespace-nowrap ',
                      }}
                    >
                      {label}
                    </Checkbox>
                  )
                )}
              </div>
              <div className='flex gap-10 items-center px-4 pb-4'>
                {['동', '창', '해'].map((label, index) => (
                  <Checkbox
                    key={index + 4}
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

          <div className='flex bg-white border-1 h-[140px]    border-grayLightBorder justify-center items-center w-full   '>
            <div className='w-[350px] bg-bgGray   self-stretch flex'>
              <div className=' flex w-[200px] items-center justify-center   border-r border-grayBorder'>
                <Checkbox radius='sm'>
                  <p className='font-bold'>2022 중학 국어</p>
                </Checkbox>
              </div>
              <div className=' flex flex-col  w-[150px]   border-r border-grayBorder'>
                <div className=' flex flex-1 items-center justify-center '>
                  <Checkbox radius='sm'>
                    <p className='text-secondGray'>2학년</p>
                  </Checkbox>
                </div>

                <div className='flex-1 flex items-center justify-center border-t-2 w-[150px] '>
                  <Checkbox radius='sm'>
                    <p className='text-secondGray'>3학년</p>
                  </Checkbox>
                </div>
              </div>
            </div>

            <div className='flex-1  flex-col'>
              <div className='flex  gap-10 items-center p-4'>
                {['미(신)', '비(김)', '천(노)', '천(박)', '지(이)'].map(
                  (label, index) => (
                    <Checkbox
                      key={index}
                      radius='sm'
                      classNames={{
                        label: 'whitespace-nowrap ',
                      }}
                    >
                      {label}
                    </Checkbox>
                  )
                )}
              </div>

              <div className=' border-grayBorder border-t-1 flex-1'>
                <div className='flex gap-10 items-center p-4'>
                  {['미(신)', '비(김)', '천(노)', '천(박)', '지(이)'].map(
                    (label, index) => (
                      <Checkbox
                        key={index}
                        radius='sm'
                        classNames={{
                          label: 'whitespace-nowrap ',
                        }}
                      >
                        {label}
                      </Checkbox>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className='flex mt-6 gap-3 justify-end items-center'>
            <Button className='min-w-[28px] bg-mainBlack text-white rounded-md'>
              등록
            </Button>
          </div>
        </article>
      </main>
    </section>
  );
};

export default AnnualMembershipTwo;
