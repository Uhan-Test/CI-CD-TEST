// Array로 반환하는 형태
export const array = [
  {
    code: 'lo',
    name: 'ພາສາລາວ',
  },
  {
    code: 'en',
    name: 'English',
  },
];
// 개별 객체로 반환하는 형태
export const LO = { code: 'lo', name: 'ພາສາລາວ' };
export const EN = { code: 'en', name: 'English' };
// 언어코드
export enum Code {
  EN = 'en', // 영어
  LO = 'lo', // 라오어
  KO = 'ko', // 한국어
}
