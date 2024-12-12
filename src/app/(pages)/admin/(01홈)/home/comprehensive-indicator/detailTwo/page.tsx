'use client';

import CommonHeader from '@/components/CommonHeader';
import DropDown from '@/components/DropDown';
import InputNoLabel from '@/components/InputNoLabel';
import Link from 'next/link';
import Image from 'next/image';
import { GrRotateLeft } from 'react-icons/gr';
import {
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Checkbox,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
  RadioGroup,
  Radio,
  DatePicker,
  DateRangePicker,
} from '@nextui-org/react';
import { useState, useMemo } from 'react';

import task3Column3 from '@/data/tables/task3Column3';
import HeaderDropDown from '@/components/HeaderDropDown';
import InputWithLabel from '@/components/InputWithLabel';

const HomeIndicatorDetailTwo = () => {
  const {
    isOpen: isSuspensionBtn,
    onOpen: onSuspensionBtn,
    onOpenChange: onSuspensionBtnChange,
  } = useDisclosure();

  const {
    isOpen: isUnblockBtn,
    onOpen: onUnblockBtn,
    onOpenChange: onUnblockBtnChange,
  } = useDisclosure();

  const {
    isOpen: isBlueRefundOpen,
    onOpen: onBlueRefundOpen,
    onOpenChange: onBlueRefundOpenChange,
  } = useDisclosure();

  const {
    isOpen: isRedRefundOpen,
    onOpen: onRedRefundOpen,
    onOpenChange: onRedRefundOpenChange,
  } = useDisclosure();

  const nameOptions = [
    { key: '1', label: '이름' },
    { key: '2', label: '이름2' },
    { key: '3', label: '이름3' },
  ];

  const memberOptions = [
    { key: '1', label: '상태 전체' },
    { key: '2', label: '전체 회원2' },
  ];

  const viewOptions = [
    {
      key: '20',
      label: '유형 전체',
    },
    {
      key: '20',
      label: '20개씩 보기',
    },
    {
      key: '50',
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

  const pages = Math.ceil(task3Column3.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(task3Column3.slice(start, end));
    return task3Column3.slice(start, end);
  }, [page, task3Column3, viewValue, rowsPerPage]);

  // Selection Logic
  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
  const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
    number[]
  >([]);

  return (
    <section>
      <CommonHeader title='고1 모의' />

      <main className='rounded-[20px] bg-white py-6 px-5 mt-6 '>
        <div className='flex items-center justify-between'>
          <div className='flex h-fit items-center gap-2 text-secondGray'>
            <p className='text-grayText p-2 border-r-1 whitespace-nowrap'>
              게시일
            </p>
            <DateRangePicker
              className='max-w-xs'
              variant='bordered'
              size='md'
            />
            <button className='rounded-md border-1 px-4 py-2 bg-white'>
              <GrRotateLeft size={22} />
            </button>
            <button className='rounded-md px-3 py-2 whitespace-nowrap text-white bg-secondGray'>
              검색
            </button>
          </div>
        </div>

        <article className='mt-5'>
          {/* First Row  */}
          <div className='flex bg-bgGray  justify-center items-center w-full   '>
            {/* First Column */}
            <div className='w-[80px] text-center py-3 border-r border-grayBorder'>
              <span>번호</span>
            </div>

            {/* Second Column */}
            <div className='w-[300px] text-center py-3 border-r border-grayBorder '>
              <span>게시글 제목</span>
            </div>
            {/* Third Column */}
            <div className='w-[90px] text-center'>
              <span>
                연회원
                <br />
                점수
              </span>
            </div>
            {/* Fourth  Column */}
            <div className='w-[90px] text-center py-3 border-l border-grayBorder'>
              <span>연회원 점수</span>
            </div>

            {/* Fifth Column with Sub-columns */}
            <div className='w-[400px] flex flex-col border-x border-grayBorder'>
              <div className='border-b py-2 text-center w-full  border-grayBorder'>
                다운로드
              </div>
              <div className='flex '>
                <div className='w-[100px] py-2  text-center'>
                  <span>연희원</span>
                </div>
                <div className='w-[100px] py-2  text-center'>
                  <span>연희원 점수 합</span>
                </div>
                <div className='w-[100px] py-2  text-center'>
                  <span>개별 구매</span>
                </div>
                <div className='w-[100px] py-2 text-center'>
                  <span>포인트 합</span>
                </div>
              </div>
            </div>

            {/* Sixth Column */}
            <div className='w-[80px] py-3 border-r border-grayBorder text-center'>
              <span>
                다운로드
                <br /> 합
              </span>
            </div>

            {/* Seventh Column */}
            <div className='w-[80px]  py-3 text-center'>
              <span>조회수</span>
            </div>
          </div>
          <Table
            aria-label='Data Table'
            shadow='none'
            classNames={{
              th: ['h-0 p-0 m-0'], // Shrinks the header to zero height
              td: ['px-2 text-center font-normal text-base text-mainBlack'],
            }}
            bottomContent={
              <div className='flex w-full justify-center mt-8'>
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
            {/* Add an empty header */}
            <TableHeader>
              {Array.from({ length: 10 }, (_, index) => (
                <TableColumn key={index}> </TableColumn>
              ))}
            </TableHeader>

            <TableBody>
              {items.map((row) => (
                <TableRow key={row.serialNumber} className='border-b-1'>
                  <TableCell className='text-nowrap w-[80px] text-start '>
                    {row.serialNumber}
                  </TableCell>
                  <TableCell className='text-nowrap w-[300px] text-mainBlue underline text-start'>
                    {row.productName}
                  </TableCell>
                  <TableCell className='text-nowrap w-[90px] text-start'>
                    {row.price1}
                  </TableCell>
                  <TableCell className='text-nowrap w-[90px] text-start'>
                    {row.price2}
                  </TableCell>
                  <TableCell className='text-nowrap w-[100px] text-start'>
                    {row.quantity1}
                  </TableCell>
                  <TableCell className='text-nowrap w-[100px] text-start'>
                    {row.quantity2}
                  </TableCell>
                  <TableCell className='text-nowrap w-[100px] text-start'>
                    {row.quantity3}
                  </TableCell>
                  <TableCell className='text-nowrap w-[100px] text-start'>
                    {row.price3}
                  </TableCell>
                  <TableCell className='text-nowrap w-[80px] text-center'>
                    {row.total1}
                  </TableCell>
                  <TableCell className='text-nowrap w-[80px] text-center'>
                    {row.total2}
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

export default HomeIndicatorDetailTwo;
