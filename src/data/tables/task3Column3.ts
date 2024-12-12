const demo = [
  {
    serialNumber: 111111, // 일련번호
    productName: '한길샘출판(적중물) 1-19수', // 상품명
    price1: 0.5, // 첫 번째 가격
    price2: 3000, // 두 번째 가격
    quantity1: 120, // 수량 1
    quantity2: 240, // 수량 2
    quantity3: 60, // 수량 3
    price3: 6000, // 세 번째 가격
    total1: 180, // 총합 1
    total2: 180, // 총합 2
  },
];

const task3Column3 = [
  ...Array.from({ length: 150 }, (_, index) => ({
    ...demo[0],
    serialNumber: 111111 + index, // Increment serial number dynamically
  })),
];

export default task3Column3;
