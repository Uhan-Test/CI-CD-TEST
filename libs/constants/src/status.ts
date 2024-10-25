/**
 * BOOLEANS
 */

export enum Bool {
  FALSE = 0,
  TRUE = 1,
}

/**
 * STATES
 */

// 계약 상태
export enum ContractStatus {
  PRELEAD = 0, // Frame number와 매칭되지 않은 상태 (오프라인에서 주문을 진행하는 경우, 고객 정보만 연결)
  LEAD = 1, // Frame number와 매칭되어 있는 상태 (이후 상태는 모두 Frame number 매칭 완료)
  BOOKING = 2, // 차량 판매 금액의 10% 지불한 상태
  WAIT_SALES_APPROVAL = 3, // 은행 할부 심사 대기 상태
  CONFIRM = 4, // 할부 심사가 통과가 되거나 차량 판매 금액 100% 지불한 상태
  COMPLETED = 5, // 보증금 및 First pay(amount)를 모두 지불했으며, (할부 결제 시) 은행 할부 심사 통과 되었으며 고객이 차량을 인수한 상태
  CANCEL_INCOME = 6, // 고객이 계약 취소하고자 할 때, `PRELEAD` 또는 `LEAD` 상태에서 취소한 상태
  CANCEL_REFUND = 7, // 할부 심사가 거절 되었을 때, `BOOKING`, `WAIT_SALES_APPROVAL` 상태에서 취소한 상태
  CANCEL_TRANSFER_TO_NEW_CONTRACT = 8, // 계약은 했으나 다른 차량으로 계약을 이행하고자 할 때, `PRELEAD`, `LEAD`, `BOOKING`, `WAIT_SALES_APPROVAL` 상태에서 취소한 상태
}

// 1:1 문의 처리 상태
export enum InquiryStatus {
  WAITING = 0, // 답변 대기
  COMPLETED = 1, // 답변 완료
}

// 결제 상태
export enum PaymentHistoryStatus {
  COMPLETED = 0,
  WAITING = 1,
  IN_PROGRESS = 2,
}

// 신차 모델 상태
export enum NewCarModelStatus {
  WAITING = 0,
  ON_SALES = 1,
  CLOSED = 2,
}

// 신차 차량 상태
export enum NewCarStockStatus {
  AVAILABLE = 0,
  LEAD = 1,
  BOOKING = 2,
  WAIT_SALES_APPROVAL = 3,
  CONFIRM = 4,
  COMPLETED = 5,
}

// 중고차 구매 상태
export enum UsedCarPurchaseStatus {
  WAITING = 0,
  COMPLETED = 1,
}

// 중고차 상태 (상품화상태 + 차량 상태)
export enum UsedCarStockStatus {
  WAITING = 0,
  INSPECTION = 1,
  REPAIRING = 2,
  PAINTING = 3,
  PRODUCTIZATION = 4,
  CONFIRMED = 5,
  AVAILABLE = 6,
  COMPLETED = 7,
}
