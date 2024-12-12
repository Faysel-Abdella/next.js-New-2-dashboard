const demo = [
  {
    id: 0,
    title: '초과 재다운로드일 초과',
    userId: 'idid1234',
    name: '홍길동',
    phoneNumber: '01011112222',
    registrationDate: 'YYYY-MM-DD',
    admin: '부관리자1',
    status: '답변완료',
  },
];
const task2Row2 = [
  ...Array.from({ length: 150 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
  })),
];

export default task2Row2;
