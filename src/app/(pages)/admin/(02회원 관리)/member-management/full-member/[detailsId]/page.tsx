"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
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
} from "@nextui-org/react";

import CommonHeader from "@/components/CommonHeader";
import InputNoLabel from "@/components/InputNoLabel";
import row2Column2 from "@/data/tables/row2Column2";
import row2Column3 from "@/data/tables/row2Column3";
import assets from "@/assets";

const FullMemberDetails = () => {
  const [basicInfo, setBasicInfo] = useState(true);
  const [isDetailChecked, setIsDetailChecked] = useState(false);

  // Pagination Logic
  const [page, setPage] = useState(1);
  const [pageTwo, setPageTwo] = useState(1);

  const rowsPerPage = 15;
  const rowsPerPageTwo = 20;

  const pages = Math.ceil(row2Column2.length / rowsPerPage);
  const pagesTwo = Math.ceil(row2Column3.length / rowsPerPageTwo);

  const [currentData, setCurrentData] = useState<any>();

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(row2Column2.slice(start, end));
    return row2Column2.slice(start, end);
  }, [page, row2Column2, rowsPerPage]);

  const firstHalf = useMemo(() => {
    const start = (pageTwo - 1) * rowsPerPageTwo;
    const end = start + rowsPerPageTwo;

    return row2Column3.slice(start, end);
  }, [pageTwo, rowsPerPageTwo, row2Column3]);

  const secondHalf = useMemo(() => {
    const start = pageTwo * rowsPerPageTwo;
    const end = start + rowsPerPageTwo;

    return row2Column3.slice(start, end);
  }, [pageTwo, rowsPerPageTwo, row2Column3]);

  // Selection Logic
  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
  const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
    number[]
  >([]);

  const labelStyle =
    "bg-bgGray w-24 py-4 mr-2 my-auto text-center font-bold  text-secondGray";
  const valueStyle = " text-mainBlack";
  return (
    <section>
      <CommonHeader title="회원 상세보기" />

      <header className="flex items-center justify-between ">
        <div className="flex items-center gap-1 bg-bgGray p-1 rounded-lg ">
          <button
            className={`font-bold px-3 py-2 ${basicInfo ? " bg-white text-mainBlue rounded-lg" : "bg-transparent text-secondGray"}`}
            onClick={() => setBasicInfo(true)}
          >
            기본 정보
          </button>
          <button
            className={`font-bold px-3 py-2 ${!basicInfo ? " bg-white text-mainBlue rounded-lg" : "bg-transparent text-secondGray"}`}
            onClick={() => setBasicInfo(false)}
          >
            이용자료 목록
          </button>
        </div>
        <div className="flex items-center gap-5">
          <p className="text-secondGray underline underline-offset-2">
            활동 정지
          </p>
          <p className="text-secondGray underline underline-offset-2">
            강제 탈퇴
          </p>
        </div>
      </header>

      <main>
        {basicInfo ? (
          <section>
            <article className="mt-5">
              <Table
                aria-label="Data Table"
                shadow="none"
                classNames={{
                  th: [
                    "font-bold text-base bg-[#EEEEEE] text-[#868F9A] h-[48px]  text-center",
                  ],
                  td: [" text-center font-normal text-base text-mainBlack "],
                }}
              >
                <TableHeader>
                  <TableColumn className="flex justify-center items-center">
                    <Checkbox
                      isSelected={isDetailChecked}
                      onClick={() => setIsDetailChecked(!isDetailChecked)}
                    ></Checkbox>
                  </TableColumn>
                  <TableColumn>ID</TableColumn>
                  <TableColumn>이름</TableColumn>
                  <TableColumn>휴대폰번호</TableColumn>
                  <TableColumn>가입일</TableColumn>
                  <TableColumn>최종 방문일</TableColumn>
                  <TableColumn>누적방문</TableColumn>
                  <TableColumn>등급</TableColumn>
                  <TableColumn>게시글</TableColumn>
                  <TableColumn>댓글</TableColumn>
                  <TableColumn>좋아요</TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-b-1">
                    <TableCell>
                      <Checkbox
                        isSelected={isDetailChecked}
                        onClick={() => setIsDetailChecked(!isDetailChecked)}
                      ></Checkbox>
                    </TableCell>
                    <TableCell className="text-nowrap">idid1234</TableCell>
                    <TableCell className="text-nowrap">홍길동</TableCell>
                    <TableCell className="text-nowrap">01011112222</TableCell>
                    <TableCell className="text-nowrap">YYYY-MM-DD </TableCell>
                    <TableCell className="text-nowrap">YYYY-MM-DD</TableCell>
                    <TableCell className="text-nowrap">20</TableCell>
                    <TableCell className="text-nowrap">고등 연회원</TableCell>
                    <TableCell className="text-nowrap">5</TableCell>
                    <TableCell className="text-nowrap">10</TableCell>
                    <TableCell className="text-nowrap">20</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </article>

            <section>
              <div className="mt-4 flex items-center justify-between w-full border-y border-grayLightBorder pr-16">
                <div className="flex items-center w-1/3">
                  <p className={`${labelStyle}`}>이메일</p>
                  <InputNoLabel />
                </div>
                <div className="flex items-center w-1/3">
                  <p className={`${labelStyle}`}>이메일</p>
                  <p className={`${valueStyle}`}>여</p>
                </div>
                <div className="flex items-center w-1/3">
                  <p className={`${labelStyle}`}>이메일</p>
                  <p className={`${valueStyle}`}>YYYY-MM-DD </p>
                </div>
              </div>
              <div className=" flex items-center justify-between border-b border-grayLightBorder pr-16">
                <div className="flex items-center">
                  <p className={`${labelStyle}`}>보유 포인트</p>
                  <InputNoLabel defaultValue="1,000" />
                  <p className="mx-2">P</p>
                  <button className="py-2 px-3 bg-secondGray rounded-md text-white">
                    내역
                  </button>
                </div>
              </div>
              <div className=" flex items-center justify-between w-full border-b border-grayLightBorder pr-16">
                <div className="flex items-center w-1/3">
                  <p className={`${labelStyle}`}>연회원권</p>
                  <p className={`${valueStyle}`}>고등 연회원(카페)</p>
                </div>
                <div className="flex items-center w-1/3">
                  <p className={`${labelStyle}`}>결제일</p>
                  <p className={`${valueStyle}`}>YYYY-MM-DD HH:MM:SS</p>
                </div>
                <div className="flex items-center w-1/3">
                  <p className={`${labelStyle}`}>카페 아이디</p>
                  <p className={`${valueStyle}`}>aaa123 </p>
                </div>
              </div>
              <div className=" flex items-center justify-between w-full border-b border-grayLightBorder pr-16">
                <div className="flex items-center w-1/3">
                  <p className={`${labelStyle}`}>사용한 점수</p>
                  <p className={`${valueStyle}`}>10점</p>
                </div>
                <div className="flex items-center w-1/3">
                  <p className={`${labelStyle}`}>잔여 점수</p>
                  <InputNoLabel inputStyles="w-full" />
                  <p className="ml-2">점</p>
                </div>
                <div className="flex items-center w-1/3">
                  <p className={`${labelStyle}`}>누적 포인트</p>
                  <p className={`${valueStyle}`}>10,000P</p>
                </div>
              </div>

              <div className="flex justify-end items-center">
                <button className="bg-mainBlack text-white rounded-md py-2 px-3 mt-4">
                  수정
                </button>
              </div>
            </section>

            <article className="mt-5">
              <h4 className="font-bold text-secondGray mb-2">누적 결제 내역</h4>
              <Table
                aria-label="Data Table"
                shadow="none"
                classNames={{
                  th: [
                    "font-bold text-base bg-[#EEEEEE] text-[#868F9A] h-[48px]  text-center",
                  ],
                  td: [
                    "px-3  text-center font-normal text-base text-mainBlack ",
                  ],
                }}
                bottomContent={
                  <div className="flex w-full justify-center  mt-8">
                    <Pagination
                      isCompact
                      showControls
                      showShadow
                      color="secondary"
                      page={page}
                      total={pages}
                      onChange={(page) => setPage(page)}
                    />
                  </div>
                }
              >
                <TableHeader>
                  <TableColumn>내용</TableColumn>
                  <TableColumn>결제일</TableColumn>
                  <TableColumn>결제 금액</TableColumn>
                  <TableColumn>결제 수단</TableColumn>
                </TableHeader>
                <TableBody>
                  {items.map((row) => (
                    <TableRow key={row.id} className="border-b-1">
                      <TableCell className="text-nowrap">
                        {row.detail}
                      </TableCell>
                      <TableCell className="text-nowrap">
                        {row.paymentDate}
                      </TableCell>
                      <TableCell className="text-nowrap">
                        {row.paymentAmount}
                      </TableCell>
                      <TableCell className="text-nowrap">
                        {row.paymentMethod}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </article>
          </section>
        ) : (
          <section>
            <article className="m-0 ">
              {row2Column3.length <= 21 && (
                <Table
                  aria-label="Data Table"
                  shadow="none"
                  classNames={{
                    th: [
                      "relative font-bold text-[14px] bg-[#F3F4F6] text-[#868F9A] h-[44px] text-center",
                      "after:content-[''] after:absolute after:right-0 after:top-2 after:bottom-2 after:w-[1px] after:bg-gray-300",
                    ],
                    td: [
                      "px-6 text-center font-normal text-base text-[#363941]",
                    ],
                  }}
                  bottomContent={
                    <div className="flex w-full justify-center mt-8">
                      <Pagination
                        isCompact
                        showControls
                        showShadow
                        color="primary"
                        page={pageTwo}
                        total={pagesTwo}
                        onChange={(page) => setPageTwo(page)}
                      />
                    </div>
                  }
                >
                  <TableHeader>
                    <TableColumn>제목</TableColumn>
                    <TableColumn>다운로드일</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {row2Column3.map((row) => (
                      <TableRow key={row.id} className="border-b-1">
                        <TableCell>
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-nowrap">{row.title}</span>
                            <Image
                              src={assets.download}
                              alt="Clip Image"
                              width={12}
                              height={12}
                            />
                          </div>
                        </TableCell>
                        <TableCell className="text-nowrap">
                          {row.downloadDate}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}

              {row2Column3.length >= 22 && (
                <Table
                  aria-label="Data Table"
                  shadow="none"
                  classNames={{
                    th: [
                      "relative font-bold text-[14px] bg-[#F3F4F6] text-[#868F9A] h-[44px] text-center",
                      "after:content-[''] after:absolute after:right-0 after:top-2 after:bottom-2 after:w-[1px] after:bg-gray-300",
                    ],
                    td: [
                      "px-6 text-center font-normal text-base text-[#363941]",
                    ],
                  }}
                  bottomContent={
                    <div className="flex w-full justify-center mt-8">
                      <Pagination
                        isCompact
                        showControls
                        showShadow
                        color="primary"
                        page={pageTwo}
                        total={pagesTwo}
                        onChange={(page) => setPageTwo(page)}
                      />
                    </div>
                  }
                >
                  <TableHeader>
                    <TableColumn>제목</TableColumn>
                    <TableColumn>다운로드일</TableColumn>
                    {/* Second main column */}
                    <TableColumn className="border-l-[20px] border-white">
                      제목
                    </TableColumn>
                    <TableColumn>다운로드일</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {firstHalf.map((row, index) => (
                      <TableRow key={row.id} className="border-b-1">
                        <TableCell>
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-nowrap">{row.title}</span>
                            <Image
                              src={assets.download}
                              alt="Clip Image"
                              width={12}
                              height={12}
                            />
                          </div>
                        </TableCell>
                        <TableCell className="text-nowrap">
                          {row.downloadDate}
                        </TableCell>

                        {/* Second main column */}

                        <TableCell>
                          {secondHalf[index] && (
                            <div className="flex items-center justify-center gap-2">
                              <span className="text-nowrap">{row.title}</span>
                              <Image
                                src={assets.download}
                                alt="Clip Image"
                                width={12}
                                height={12}
                              />
                            </div>
                          )}
                        </TableCell>
                        <TableCell className="text-nowrap">
                          {secondHalf[index] && secondHalf[index].downloadDate}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </article>
          </section>
        )}
      </main>
    </section>
  );
};

export default FullMemberDetails;
