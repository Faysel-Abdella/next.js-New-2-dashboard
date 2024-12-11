'use client';

import CommonHeader from '@/components/CommonHeader';
import {
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@nextui-org/react';
import { useState } from 'react';
import Link from 'next/link';
import DropDown from '@/components/DropDown'; // Assuming you have this component
import HeaderDropDown from '@/components/HeaderDropDown';

const AnnualMembership = () => {
  const [viewValue, setViewValue] = useState('10');

  const items = [
    {
      id: 1,
      category: '중고등 연회원',
      content: '중고등 자료',
      score: '1년 동안2,000점 사용',
      price: '270,000',
      details: '상세보기',
    },
    {
      id: 2,
      category: '중고등 연회원',
      content: '중고등 자료',
      score: '1년 동안2,000점 사용',
      price: '270,000',
      details: '상세보기',
    },
    {
      id: 3,
      category: '중고등 연회원',
      content: '중고등 자료',
      score: '1년 동안2,000점 사용',
      price: '270,000',
      details: '상세보기',
    },
    {
      id: 4,
      category: '중고등 연회원',
      content: '중고등 자료',
      score: '1년 동안2,000점 사용',
      price: '270,000',
      details: '상세보기',
    },
  ];

  const viewOptions = [
    { key: '10', label: '10개씩 보기' },
    { key: '20', label: '20개씩 보기' },
    { key: '50', label: '50개씩 보기' },
    { key: '100', label: '100개씩 보기' },
  ];
  const viewOptionsDefault = viewOptions[0].key;
  return (
    <section>
      <CommonHeader title='연회원권 관리' />

      <main className='rounded-[20px] bg-white py-6 px-5 mt-6'>
        <div className='flex items-center justify-between'>
          <div className='flex h-fit items-center gap-2 text-secondGray'>
            <button className='text-mainBlack font-bold'>정지 해제</button>
          </div>

          <div className='flex justify-center items-center gap-3'>
            {/* Dropdown added here */}
            <HeaderDropDown
              options={viewOptions}
              defaultSelectedKey={viewOptionsDefault}
              value={viewValue}
              setNewValue={setViewValue}
              styles='w-[110px] '
              mainStyles='bg-transparent border border-grayBorder rounded-[5px]'
            />
            <Link href='/admin/'>
              <Button className='min-w-[28px] bg-mainBlack text-white rounded-md'>
                등록
              </Button>
            </Link>
          </div>
        </div>

        <article className='mt-5'>
          <Table
            aria-label='Data Table'
            shadow='none'
            classNames={{
              th: [
                'font-bold text-base bg-[#EEEEEE] text-[#868F9A] h-[48px] text-center',
              ],
              td: ['px-3 text-center font-normal text-base text-mainBlack'],
            }}
          >
            <TableHeader>
              <TableColumn>번호</TableColumn>
              <TableColumn>구분</TableColumn>
              <TableColumn>내용</TableColumn>
              <TableColumn>점수</TableColumn>
              <TableColumn>가격</TableColumn>
              <TableColumn>상세보기</TableColumn>
            </TableHeader>

            <TableBody>
              {items.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.content}</TableCell>
                  <TableCell>{row.score}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell className='text-[#42A8FD] underline'>
                    {row.details}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </article>
      </main>
    </section>
  );
};

export default AnnualMembership;
