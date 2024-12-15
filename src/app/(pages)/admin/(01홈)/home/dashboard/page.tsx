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

import task3Column1 from '@/data/tables/task3Column1';
import HeaderDropDown from '@/components/HeaderDropDown';
import InputWithLabel from '@/components/InputWithLabel';
import assets from '@/assets';

const HomeDashboard = () => {
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
    { key: '1', label: '유형 전체' },
    { key: '2', label: '고등연회원권' },
    { key: '3', label: '고등연회원권(카페)' },
    { key: '4', label: '고등연회원권(재구매)' },
    { key: '5', label: '중학연회원권' },
    { key: '6', label: '중고등연회원권' },
    { key: '7', label: '개별구매' },
  ];

  const memberOptions = [
    { key: '1', label: '상태 전체' },
    { key: '2', label: '결제완료' },
    { key: '3', label: '환불' },
  ];

  const nameOptionsDefault = nameOptions[0].key;

  const [viewValue, setViewValue] = useState(nameOptionsDefault);

  const [memberValue, setMemberValue] = useState(memberOptions[0].key);

  // Pagination Logic
  const [page, setPage] = useState(1);

  const rowsPerPage = 20;

  const pages = Math.ceil(task3Column1.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(task3Column1.slice(start, end));
    return task3Column1.slice(start, end);
  }, [page, task3Column1, viewValue, rowsPerPage]);

  // Selection Logic
  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
  const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
    number[]
  >([]);

  return (
    <section>
      <CommonHeader title='대시보드' />

      <div className='w-fit  p-4 flex items-center gap-2 border rounded-xl border-[#CFD4DA]'>
        <p className='text-grayText'>아이디</p>
        <InputNoLabel placeholder='입력' />
        <Button className='min-w-[28px] bg-secondGray text-white rounded-md'>
          검색
        </Button>
      </div>

      <main className='rounded-[20px] bg-white py-6 px-5 pl-0 mt-6 '>
        <div className='flex items-center justify-between'>
          <div className='flex h-fit items-center gap-2 text-secondGray'>
            <div className='flex items-center'>
              <InputNoLabel type='date' />
              <p className='px-3'>~</p>
              <InputNoLabel type='date' />
            </div>
            <button className='rounded-md border-1 px-4 py-2 bg-white'>
              <GrRotateLeft size={22} />
            </button>
            <button className='rounded-md px-3 py-2 whitespace-nowrap text-white bg-secondGray'>
              검색
            </button>
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
              options={nameOptions}
              defaultSelectedKey={nameOptionsDefault}
              value={viewValue}
              setNewValue={setViewValue}
              styles='w-[150px] '
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
              td: [' text-center font-normal text-base text-mainBlack '],
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
              <TableColumn>일련번호</TableColumn>
              <TableColumn>이름</TableColumn>
              <TableColumn>ID</TableColumn>
              <TableColumn>상품명</TableColumn>
              <TableColumn>결제 일시</TableColumn>
              <TableColumn>가격</TableColumn>
              <TableColumn>상태</TableColumn>
              <TableColumn>결제수단</TableColumn>
              <TableColumn>환불</TableColumn>
            </TableHeader>

            <TableBody>
              {items.map((row) => (
                <TableRow key={row.id} className='border-b-1'>
                  <TableCell className='text-nowrap'>
                    {row.serialNumber}
                  </TableCell>
                  <TableCell className='text-nowrap text-mainBlue underline underline-offset-2'>
                    {row.name}
                  </TableCell>
                  <TableCell className='text-nowrap'>{row.id}</TableCell>
                  <TableCell className='text-nowrap flex gap-1'>
                    {row.productName}
                    {row.serialNumber === '001' && (
                      <Image src={assets.flag} alt='flag' />
                    )}
                  </TableCell>
                  <TableCell className='text-nowrap'>
                    {row.paymentDate}
                  </TableCell>
                  <TableCell className='text-nowrap'>{row.price}</TableCell>
                  <TableCell className='text-nowrap'>{row.status}</TableCell>
                  <TableCell className='text-nowrap'>
                    {row.paymentMethod}
                  </TableCell>
                  <TableCell>
                    <button
                      onClick={() =>
                        row.refund === '환불'
                          ? onRedRefundOpen()
                          : onBlueRefundOpen()
                      }
                      className={
                        row.refund === '환불'
                          ? 'text-red-500 underline underline-offset-2'
                          : 'underline underline-offset-2 text-mainBlue'
                      }
                    >
                      {row.refund}
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </article>
      </main>

      <Modal
        isOpen={isBlueRefundOpen}
        onOpenChange={onBlueRefundOpenChange}
        placement='center'
        hideCloseButton
        classNames={{
          base: ['pb-10 min-w-[300px] py-5 px-8'],
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <header>
                  <h3 className='font-bold text-xl text-center text-mainBlack '>
                    환불하기
                  </h3>
                </header>
                <div></div>
                <div className='flex items-center gap-12'>
                  <h4 className=' font-bold text-sm text-secondGray'>
                    제재기간
                  </h4>
                  <p>2024-11-01 10:30:52</p>
                </div>
                <div className='flex items-center gap-12'>
                  <h4 className=' font-bold text-sm text-secondGray'>
                    환불일시
                  </h4>
                  <p>환불일시</p>
                </div>
                <div className='mt-7 flex justify-end items-center gap-3'>
                  <button
                    className=' py-2 px-3 rounded-md bg-mainBlack  text-base text-white'
                    onClick={() => {
                      onSuspensionBtnChange();
                    }}
                  >
                    닫기
                  </button>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>

      <Modal
        isOpen={isRedRefundOpen}
        onOpenChange={onRedRefundOpenChange}
        placement='center'
        hideCloseButton
        classNames={{
          base: [' min-w-[500px] pb-10 pt-10 px-4'],
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <h3 className='font-bold text-xl text-center text-mainBlack '>
                  환불하기
                </h3>
                <div className='mt-3 '>
                  <InputWithLabel
                    label='제재사유'
                    labelStyles='w-20 font-bold text-sm text-secondGray'
                    placeholder='입력'
                    inputStyles='w-[310px]'
                  />
                </div>
                <div className='mt-7 flex justify-center items-center gap-3'>
                  <button
                    className='  py-2   px-3 rounded-md bg-[#F3F4F6]  text-base text-secondGray'
                    onClick={() => {
                      onSuspensionBtnChange();
                    }}
                  >
                    취소
                  </button>
                  <button
                    className=' py-2 px-3 rounded-md bg-mainBlack  text-base text-white'
                    onClick={() => {
                      onSuspensionBtnChange();
                    }}
                  >
                    확인
                  </button>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};

export default HomeDashboard;
