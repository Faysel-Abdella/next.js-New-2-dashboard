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
    post: 5,
    comment: 10,
    great: 20,
    viewDetails: "상세보기",
  },
];

const row2Column1 = [
  ...Array.from({ length: 70 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
  })),
];

export default row2Column1;
