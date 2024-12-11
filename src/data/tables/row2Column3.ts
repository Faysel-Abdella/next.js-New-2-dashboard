const demo = [
  {
    id: 0,
    title: "2024-10월(고1) 국어 문제 파일",
    downloadDate: "11.01",
  },
];

const row2Column3 = [
  ...Array.from({ length: 100 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
  })),
];

export default row2Column3;
