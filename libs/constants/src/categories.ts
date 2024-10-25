export enum AppScreen {
  USED_CAR_PURCHASE = '0',
  USED_CAR_SELL = '1',
  NEW_CAR_SELL = '2',
}

export enum CarType {
  TRUCK_PICKUP = 'TRUCK/PICKUP',
  TRUCK = 'TRUCK',
  SUV = 'SUV',
  PICKUP = 'PICKUP',
  SEDAN = 'SEDAN',
  ROADSTER = 'ROADSTER',
  VAN = 'VAN',
  BUS = 'BUS',
  OTHER = 'OTHER',
}

export enum Collection {
  DEPOSIT = 'Deposit', // SD790100, 보증금
  FIRST_PAY = 'First Pay', // SD790200, 선수금
  REFUND = 'Refund', // SD790510, 환불
}

export enum CollectionType {
  CASH = 'Cash', // SD795100, Cash
  CHEQUE = 'Cheque', // SD795200, [번호]수표번호
  CREDIT = 'Credit', // SD795400, 할부
  CREDIT_CARD = 'Credit Card', // SD795500, [번호]카드번호
  VOUCHER = 'Voucher', // SD795700, [번호]Voucher번호-사용안함
  BANK = 'Bank', // SD795900, [번호]계좌번호
  RETURN = 'Return', // SD795950, Return Invoice-사용안함
  REFUND = 'Refund', // SD795960, 고객환불
}

export enum Currency {
  LAK = 'LAK', // LAK
  USD = 'USD', // USD
  THB = 'THB', // THB
}

export enum FuelCode {
  GAS = 'GAS',
  DIESEL = 'DIESEL',
  HYBRID = 'HYBRID',
  ELECTRIC = 'ELECTRIC',
  OTHER = 'OTHER',
}

export enum Fuel {
  GAS = 'Gasoline',
  DIESEL = 'Diesel',
  HYBRID = 'Hybrid',
  ELECTRIC = 'Electric',
  OTHER = 'Other',
}

export enum Transmission {
  AT = 'AT',
  CVT = 'CVT',
  IVT = 'IVT',
  MT = 'MT',
  OTHER = 'Other',
}

// 구동 방식
export enum DriveType {
  TWO_WD = '2WD', // 2WD, 전륜 또는 후륜 구동(FF, FR, RR 등)
  FOUR_WD = '4WD', // 4WD, 4륜 구동(AWD, 4WD 등)
}

export enum BranchType {
  DIRECT = 0, // 직영
  SUB_DIRECT = 1, // 가맹
  CONSIGNMENT = 2, // 위탁판매
}

// 광고 배너 타입
export enum CommercialType {
  TOP = 0, // 상단 배너
  MIDDLE = 1, // 중단 배너
  NATIVE = 2, // 네이티브 배너
}

// 회원 등록 경로
export enum CompanyCode {
  APP = '00',
  KDC = '01',
  GMS = '91',
  WEB = '99',
}

// 성별
export enum Gender {
  OTHER = 0, // 기타
  MALE = 1, // 남성
  FEMALE = 2, // 여성
}

// 어드민 등급
export enum Grade {
  NEW_CAR_SALES_MANAGER = 0,
  USED_CAR_SALES_MANAGER = 1,
  BRANCH_MANAGER = 2,
  GENERAL_BRANCH_MANAGER = 3,
  OPERATION_MANAGER = 4,
  GENERAL_MANAGER = 5,
}

// 배너 클릭 시 연결될 링크 구분
export enum LinkType {
  URL = 0, // 외부 링크 URL
  NOTICE = 1, // 공지사항 UUID
}

// 신차/중고차 구분
export enum NewOrUsed {
  NONE = 0, // 해당없음
  NEW = 1, // 신차
  USED = 2, // 중고차
  BOTH = 3, // 모두
}

// 알림 대상
export enum NotificationTarget {
  ALL = 0, // 전체
  MARKETING = 1, // 마케팅 수신 동의 인력
  SELECT = 2, // 특정 인력
}

// 정렬 방식
export enum UsedCarSort {
  LATEST = 0, // 최신순
  CHEAP = 1, // 가격 낮은 순
  EXPENSIVE = 2, // 가격 비싼 순
  LOW_MILEAGE = 3, // 마일리지 낮은 순
  HIGH_MILEAGE = 4, // 마일리지 높은 순
}

// 대금납부 방식
export enum SalesType {
  LUMP_SUM = 0, //  일시불, 현금을 이용한 수납 방법, 해당 건 선택 시 은행 선택,이자율, 할부개월수 선택 불가 처리
  LUMP_SUM_BANK = 1, //  타사매각, 대출 기관으로부터 대출을 받아 수납하는 방법이며 고정 이자율이 적용 됨, IB를 포함한 모든 대출 기관에서 제공
  LUMP_SUM_BANK_EFFECTIVE_RATE = 2, //  대출 기관으로부터 대출을 받아 수납하는 방법이며 고정되지 않은 이자율이 적용 됨, IB만 제공
  CREDIT = 3, //  자사할부, KOLAO 내부 직원이 차량을 구매할 때 적용하는 수납 방법으로 은행명은 신차의 경우 'KDC'이며 중고차의 경우 'GMS' 무이자
  PROMOTION = 4, //  ERP에 등록되어 있는 무언가(Ex. 오토바이)를 무료 사은품으로 증정할 때 사용되는 수납 방법.
}
