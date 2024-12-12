'use client';

import CommonHeader from '@/components/CommonHeader';
import InputNoLabel from '@/components/InputNoLabel';
import {
  Button,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from '@nextui-org/react';
import { useMemo, useState } from 'react';

import HeaderDropDown from '@/components/HeaderDropDown';
import row2Column1 from '@/data/tables/task2Row2';

const InquiryManagement = () => {
  const memberOptions = [
    { key: '1', label: '전체 회원' },
    { key: '2', label: '전체 회원2' },
  ];

  const viewOptions = [
    {
      key: '20',
      label: '10개씩 보기',
    },
    {
      key: '40',
      label: '20개씩 보기',
    },
    {
      key: '60',
      label: '50개씩 보기',
    },
    {
      key: '100',
      label: '100개씩 보기',
    },
  ];

  const viewOptionsDefault = viewOptions[0].key;

  const [viewValue, setViewValue] = useState(viewOptionsDefault);

  const [memberValue, setMemberValue] = useState(memberOptions[0].key);

  // Pagination Logic
  const [page, setPage] = useState(1);

  const rowsPerPage = parseInt(viewValue);

  const pages = Math.ceil(row2Column1.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(row2Column1.slice(start, end));
    return row2Column1.slice(start, end);
  }, [page, row2Column1, viewValue, rowsPerPage]);

  return (
    <section>
      <CommonHeader title='1:1 문의 관리' />

      <div className='w-fit  p-4 flex items-center gap-2 border rounded-xl border-[#CFD4DA]'>
        <p className='text-secondGray'>검색어</p>
        <InputNoLabel placeholder='입력' />
        <Button className='min-w-[28px] bg-secondGray text-white rounded-md'>
          검색
        </Button>
      </div>

      <main className='rounded-[20px] bg-white py-6 px-5 mt-6 '>
        <div className='flex items-center justify-between'>
          <div className='font-bold text-mainBlack'>
            <p>총 00건</p>
          </div>

          <div className='flex justify-center items-center gap-3'>
            <HeaderDropDown
              options={memberOptions}
              defaultSelectedKey={memberOptions[0].key}
              value={memberValue}
              setNewValue={setMemberValue}
              styles='w-[110px] '
              mainStyles='bg-transparent border border-grayBorder rounded-[5px]'
            />
            <HeaderDropDown
              options={viewOptions}
              defaultSelectedKey={viewOptionsDefault}
              value={viewValue}
              setNewValue={setViewValue}
              styles='w-[110px] '
              mainStyles='bg-transparent border border-grayBorder rounded-[5px]'
            />

            <div className='flex items-center gap-3'></div>
          </div>
        </div>

        <article className='mt-5'>
          <Table
            aria-label='Data Table'
            shadow='none'
            classNames={{
              th: [
                'font-bold text-base bg-[#EEEEEE] text-[#868F9A] h-[48px]  text-center',
              ],
              td: ['px-3  text-center font-normal text-base text-mainBlack '],
            }}
            bottomContent={
              <div className='flex w-full justify-center  mt-8'>
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color='primary'
                  page={page}
                  total={pages}
                  onChange={(page) => setPage(page)}
                />
              </div>
            }
          >
            <TableHeader>
              <TableColumn>번호</TableColumn>
              <TableColumn>제목</TableColumn>
              <TableColumn>Id</TableColumn>
              <TableColumn>이름</TableColumn>
              <TableColumn>휴대폰번호</TableColumn>
              <TableColumn>등록일자</TableColumn>
              <TableColumn>관리자</TableColumn>
              <TableColumn>상태</TableColumn>
            </TableHeader>
            <TableBody>
              {items.map((row) => (
                <TableRow key={row.id} className='border-b'>
                  <TableCell className='text-nowrap'>{row.id}</TableCell>
                  <TableCell className='text-nowrap text-[#42A8FD] underline'>
                    {row.title}
                  </TableCell>
                  <TableCell className='text-nowrap'>{row.userId}</TableCell>
                  <TableCell className='text-nowrap'>{row.name}</TableCell>
                  <TableCell className='text-nowrap'>
                    {row.phoneNumber}
                  </TableCell>
                  <TableCell className='text-nowrap'>
                    {row.registrationDate}
                  </TableCell>
                  <TableCell className='text-nowrap'>{row.admin}</TableCell>
                  <TableCell className='text-nowrap text-[#42A8FD] underline'>
                    {row.status}
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

export default InquiryManagement;
