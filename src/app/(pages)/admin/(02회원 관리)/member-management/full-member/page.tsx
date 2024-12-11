"use client";

import CommonHeader from "@/components/CommonHeader";
import DropDown from "@/components/DropDown";
import InputNoLabel from "@/components/InputNoLabel";
import Link from "next/link";
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
import { useState, useMemo } from "react";

import row2Column1 from "@/data/tables/row2Column1";
import HeaderDropDown from "@/components/HeaderDropDown";
import InputWithLabel from "@/components/InputWithLabel";

const FullMemberManagement = () => {
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

  const nameOptions = [
    { key: "1", label: "이름" },
    { key: "2", label: "이름2" },
    { key: "3", label: "이름3" },
  ];

  const memberOptions = [
    { key: "1", label: "전체 회원" },
    { key: "2", label: "전체 회원2" },
  ];

  const viewOptions = [
    {
      key: "10",
      label: "10개씩 보기",
    },
    {
      key: "20",
      label: "20개씩 보기",
    },
    {
      key: "50",
      label: "50개씩 보기",
    },
    {
      key: "100",
      label: "100개씩 보기",
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

  // Selection Logic
  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
  const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
    number[]
  >([]);

  return (
    <section>
      <CommonHeader title="전체 회원 관리" />

      <div className="w-fit  p-4 flex items-center gap-2 border rounded-xl border-[#CFD4DA]">
        <DropDown
          options={nameOptions}
          defaultSelectedKeys={nameOptions[0].key}
          selectStyles="w-[120px]"
        />
        <InputNoLabel placeholder="입력" />
        <Button className="min-w-[28px] bg-secondGray text-white rounded-md">
          검색
        </Button>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-base text-mainBlack">
            가입 회원수 000명
          </h3>
          <Link href="/admin/member-management/full-member/register">
            <Button className="min-w-[28px] bg-mainBlack text-white rounded-md">
              등록
            </Button>
          </Link>
        </div>
      </div>

      <main className="rounded-[20px] bg-white py-6 px-5 mt-6 ">
        <div className="flex items-center justify-between">
          <div className="flex h-fit items-center gap-2 text-secondGray">
            <p>선택 멤버를</p>
            <DropDown
              options={memberOptions}
              defaultSelectedKeys={memberOptions[0].key}
              selectStyles="w-[120px]"
            />
            <p>(으)로</p>
            <button className="rounded-md px-3 py-2 bg-bgGray">변경</button>
            <div className="w-[1px] h-9 bg-[#CFD4DA]" />
            <button
              className="rounded-md px-3 py-2 bg-bgGray"
              onClick={onSuspensionBtn}
            >
              활동 정지
            </button>
            <button
              className="rounded-md px-3 py-2 bg-bgGray"
              onClick={onUnblockBtn}
            >
              강제 탈퇴
            </button>
          </div>

          <div className="flex justify-center items-center gap-3">
            <HeaderDropDown
              options={memberOptions}
              defaultSelectedKey={memberOptions[0].key}
              value={memberValue}
              setNewValue={setMemberValue}
              styles="w-[110px] "
              mainStyles="bg-transparent border border-grayBorder rounded-[5px]"
            />
            <HeaderDropDown
              options={viewOptions}
              defaultSelectedKey={viewOptionsDefault}
              value={viewValue}
              setNewValue={setViewValue}
              styles="w-[110px] "
              mainStyles="bg-transparent border border-grayBorder rounded-[5px]"
            />

            <div className="flex items-center gap-3"></div>
          </div>
        </div>

        <article className="mt-5">
          <Table
            aria-label="Data Table"
            shadow="none"
            classNames={{
              th: [
                "font-bold text-base bg-[#EEEEEE] text-[#868F9A] h-[48px]  text-center",
              ],
              td: ["px-3  text-center font-normal text-base text-mainBlack "],
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
              <TableColumn className="flex justify-center items-center">
                <Checkbox
                  onClick={() => {
                    if (allListCheckedPageNumbers.includes(page)) {
                      setAllListCheckedPageNumbers(
                        allListCheckedPageNumbers.filter(
                          (number) => number !== page
                        )
                      );
                      setClickedRowIds(
                        clickedRowIds.filter(
                          (id) =>
                            !currentData
                              .map((item: any) => item.number)
                              .includes(id)
                        )
                      );
                    } else {
                      setClickedRowIds([
                        ...clickedRowIds,
                        ...currentData.map((item: any) => item.number),
                      ]);
                      setAllListCheckedPageNumbers([
                        ...allListCheckedPageNumbers,
                        page,
                      ]);
                    }
                  }}
                  className={`size-[14px] rounded-[2px] bg-transparent`}
                  isSelected={allListCheckedPageNumbers.includes(page)}
                ></Checkbox>
              </TableColumn>
              <TableColumn>ID</TableColumn>
              <TableColumn>이름</TableColumn>
              <TableColumn>휴대폰번호</TableColumn>
              <TableColumn>가입일</TableColumn>
              <TableColumn>최종 방문일</TableColumn>
              <TableColumn>
                <button className="flex items-center gap-1">
                  <p>누적방문 </p>
                  <span className="text-xs">▼</span>
                </button>
              </TableColumn>
              <TableColumn>등급</TableColumn>
              <TableColumn>
                <button className="flex items-center gap-1">
                  <p>게시글 </p>
                  <span className="text-xs">▼</span>
                </button>
              </TableColumn>
              <TableColumn>
                <button className="flex items-center gap-1">
                  <p>댓글 </p>
                  <span className="text-xs">▼</span>
                </button>
              </TableColumn>
              <TableColumn>
                <button className="flex items-center gap-1">
                  <p>좋아요 </p>
                  <span className="text-xs">▼</span>
                </button>
              </TableColumn>
              <TableColumn>상세보기</TableColumn>
            </TableHeader>
            <TableBody>
              {items.map((row) => (
                <TableRow key={row.id} className="border-b-1">
                  <TableCell>
                    <Checkbox
                      className={`text-center size-[14px] rounded-[2px]`}
                      onClick={() => {
                        if (clickedRowIds.includes(row.number)) {
                          setClickedRowIds(
                            clickedRowIds.filter((id) => id !== row.number)
                          );
                        } else {
                          setClickedRowIds([...clickedRowIds, row.number]);
                        }
                      }}
                      isSelected={clickedRowIds.includes(row.number)}
                    ></Checkbox>
                  </TableCell>
                  <TableCell className="text-nowrap">
                    {row.identifier}
                  </TableCell>
                  <TableCell className="text-nowrap">{row.name}</TableCell>
                  <TableCell className="text-nowrap">
                    {row.phoneNumber}
                  </TableCell>
                  <TableCell className="text-nowrap">{row.joinDate}</TableCell>
                  <TableCell className="text-nowrap">
                    {row.lastVisitDate}
                  </TableCell>
                  <TableCell className="text-nowrap">
                    {row.cumulativeVisits}
                  </TableCell>
                  <TableCell className="text-nowrap">{row.rating}</TableCell>
                  <TableCell className="text-nowrap">{row.post}</TableCell>
                  <TableCell className="text-nowrap">{row.comment}</TableCell>
                  <TableCell className="text-nowrap">{row.great}</TableCell>
                  <TableCell>
                    <Link
                      href="/admin/member-management/full-member/1"
                      className="text-mainBlue underline underline-offset-2"
                    >
                      {row.viewDetails}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </article>
      </main>

      <Modal
        isOpen={isSuspensionBtn}
        placement="center"
        onOpenChange={onSuspensionBtnChange}
        hideCloseButton
        classNames={{
          base: ["min-w-[500px] pt-10 px-4"],
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <header>
                  <h3 className="font-bold text-xl text-center text-mainBlack mb-7">
                    활동 정지
                  </h3>
                </header>
                <div className="flex items-start">
                  <h4 className="w-20 font-bold text-sm text-secondGray">
                    제재기간
                  </h4>
                  <RadioGroup
                    orientation="horizontal"
                    size="lg"
                    className="space-x-7"
                  >
                    <Radio value="7">7일</Radio>
                    <Radio value="30">30일</Radio>
                    <Radio value="영구">영구</Radio>
                  </RadioGroup>
                </div>
                <div className="mt-3 ">
                  <InputWithLabel
                    label="제재사유"
                    labelStyles="w-20 font-bold text-sm text-secondGray"
                    placeholder="입력"
                    inputStyles="w-[310px]"
                  />
                </div>
                <div className="mt-7 flex justify-center items-center gap-3">
                  <button
                    className="  py-2   px-3 rounded-md bg-[#F3F4F6]  text-base text-secondGray"
                    onClick={() => {
                      onSuspensionBtnChange();
                    }}
                  >
                    취소
                  </button>
                  <button
                    className=" py-2 px-3 rounded-md bg-mainBlack  text-base text-white"
                    onClick={() => {
                      onSuspensionBtnChange();
                    }}
                  >
                    확인
                  </button>
                </div>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Modal
        isOpen={isUnblockBtn}
        placement="center"
        onOpenChange={onUnblockBtnChange}
        hideCloseButton
        classNames={{
          base: ["max-w-[330px] pt-10 flex items-center justify-center"],
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <header>
                  <h3 className="font-bold text-xl text-center text-mainBlack mb-7">
                    차단을 해제하시겠습니까?
                  </h3>
                </header>

                <div className=" flex justify-center items-center gap-3">
                  <button
                    className="  py-2   px-3 rounded-md bg-[#F3F4F6]  text-base text-secondGray"
                    onClick={() => {
                      onUnblockBtnChange();
                    }}
                  >
                    취소
                  </button>
                  <button
                    className=" py-2 px-3 rounded-md bg-mainBlack  text-base text-white"
                    onClick={() => {
                      onUnblockBtnChange();
                    }}
                  >
                    해제
                  </button>
                </div>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};

export default FullMemberManagement;
