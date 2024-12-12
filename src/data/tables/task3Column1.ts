const demo = [
  {
    serialNumber: 11115, // 일련번호
    name: '홍길동', // 이름
    id: 'id123', // ID
    productName: '중고등 연회원', // 상품명
    paymentDate: '2024-11-1011:30:28', // 결제 일시
    price: 100000, // 가격
    status: '결제완료', // 상태
    paymentMethod: '카드', // 결제수단
    refund: '미환불', // 환불
  },
];

const task3Column1 = [
  ...Array.from({ length: 150 }, (_, index) => ({
    ...demo[0],
    serialNumber: index + 1, // Update serialNumber dynamically
    refund: index % 2 === 0 ? '환불' : '정보', // Alternate between 환불 and 정보
  })),
];

export default task3Column1;
