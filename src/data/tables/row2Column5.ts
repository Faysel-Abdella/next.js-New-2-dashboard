const demo = [
  {
    id: 0,
    identifier: "idid1234",
    name: "홍길동",
    phoneNumber: "01011112222",
    joinDate: "YYYY-MM-DD ",
    lastVisitDate: "YYYY-MM-DD ",
    cumulativeVisits: "20",
    rating: "중고등 연회원",
    stopDate: "YYYY-MM-DD ",
    viewDetails: "상세보기",
  },
];

const row2Column5 = [
  ...Array.from({ length: 70 }, (_, index) => ({
    ...demo[0],
    number: index + 1,
    id: index + 1,
  })),
];

export default row2Column5;
