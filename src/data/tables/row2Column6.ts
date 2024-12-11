const demo = [
  {
    id: 0,
    detail: "한거십팔곡(권호문) 1-19수 외 2건",
    paymentDate: "2024.10.05",
    paymentAmount: "3,000원",
    paymentMethod: "신용카드",
  },
];

const row2Column5 = [
  ...Array.from({ length: 70 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
  })),
];

export default row2Column5;
