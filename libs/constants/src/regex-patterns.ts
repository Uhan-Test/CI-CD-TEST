export const EMAIL = /^[\w\.-]+@[\w-]+(\.\w{2,4}){1,2}$/;
export const IMAGE = /^image\//;
export const JWT = /^[\w\W]*\.[\w\W]*\.[\w\W]*$/;
// https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
export const SEMVER =
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
export const S3_KEY =
  /^.*\/[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}\.\w{2,4}$/;
export const UUID = '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}'; // URL Path
export const PHONE = /^\d{1,3}\s\d{9,10}$/;
export const AUTHCODE = /^\d{6}$/;
export const COLORCODE = 'DM[0-9]{6}';
