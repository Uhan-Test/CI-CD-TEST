import {
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Matches,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { ColorType } from './color';
import { CATEGORY, REGEX } from '.';
import { Type } from 'class-transformer';

class ContractCar {
  @IsUUID()
  @MaxLength(36)
  id: string;
  @IsString()
  @MaxLength(17)
  frameNo: string;
  @IsString()
  @MaxLength(100)
  maker: string;
  @IsString()
  @MaxLength(100)
  model: string;
  @IsEnum(CATEGORY.CarType)
  carType: CATEGORY.CarType;
  @ValidateNested()
  @Type(() => ColorType)
  color: ColorType;
  @IsEnum(CATEGORY.FuelCode)
  fuel: CATEGORY.FuelCode;
  @IsEnum(CATEGORY.DriveType)
  driveType: CATEGORY.DriveType;
  @IsEnum(CATEGORY.Transmission)
  transmission: CATEGORY.Transmission;
}

class ContractCustomer {
  @MaxLength(36)
  @IsUUID()
  id: string;
  @MaxLength(100)
  @IsString()
  no: string;
  @MaxLength(100)
  @IsString()
  name: string;
  @MaxLength(100)
  @IsString()
  shortName: string;
  @MaxLength(100)
  @IsString()
  localName: string;
  @IsOptional()
  @MaxLength(100)
  @IsString()
  surname: string;
  @IsEnum(CATEGORY.Gender)
  gender: CATEGORY.Gender;
  @IsString()
  @MaxLength(100)
  nation: string;
  @IsString()
  @MaxLength(100)
  province: string;
  @IsString()
  @MaxLength(100)
  district: string;
  @IsOptional()
  @MaxLength(100)
  @IsString()
  address: string;
  @IsOptional()
  @MaxLength(100)
  @IsString()
  village: string;
  @IsOptional()
  @MaxLength(100)
  @IsString()
  avenue: string;
  @IsOptional()
  @MaxLength(100)
  @IsString()
  houseNo: string;
  @IsOptional()
  @MaxLength(100)
  @IsString()
  houseAddressCode: string;
  @IsOptional()
  @MaxLength(100)
  @IsString()
  familyBookNo: string;
  @IsOptional()
  @MaxLength(100)
  @IsString()
  passportNo: string;
  @IsOptional()
  @IsDateString() // YYYY-MM-DD
  passportExp: Date;
  @IsOptional()
  @MaxLength(100)
  @IsString()
  idCardNo: string;
  @IsOptional()
  @IsDateString() // YYYY-MM-DD
  idCardExp: Date;
  @IsString()
  @MaxLength(100)
  occupation: string;
  @IsOptional()
  @IsDateString() // YYYY-MM-DD
  dateOfBirth: Date;
  @IsString()
  @MaxLength(100)
  customerCategory: string;
  @IsString()
  @MaxLength(100)
  customerType: string;
  @IsOptional()
  @MaxLength(100)
  @IsString()
  houseUnitFamily: string;
  @Matches(REGEX.PHONE)
  tel1: string;
  @IsOptional()
  @Matches(REGEX.PHONE)
  tel2: string;
  @IsOptional()
  @Matches(REGEX.PHONE)
  tel3: string;
  @IsOptional()
  @MaxLength(100)
  @IsString()
  fax: string;
  @IsOptional()
  @Matches(REGEX.EMAIL)
  email: string;
  @IsOptional()
  @MaxLength(200)
  @IsString()
  remark: string;
}

class ContractPayment {
  @IsString()
  @MaxLength(100)
  contractCurrency: string;
  @IsNumber()
  standardPrice: number;
  @IsNumber()
  promotionDiscount: number;
  @IsNumber()
  superPromotionDiscount: number;
  @IsNumber()
  salesPrice: number;
  @IsNumber()
  invoice: number;
  @IsNumber()
  firstPay: number;
  @MaxLength(100)
  @IsString()
  vehicleOwners: string;
  @IsNumber()
  remainingPayment: number;
  @IsEnum(CATEGORY.SalesType)
  salesType: CATEGORY.SalesType;
  @IsString()
  @MaxLength(100)
  bank: string;
  @IsNumber()
  interestRate: number;
  @IsNumber()
  overRate: number;
  @IsNumber()
  installmentPeriod: number;
  @IsString()
  @MaxLength(100)
  paymentCurrency: string;
  @IsDateString() // YYYY-MM-DD
  bookingDate: Date;
  @IsNumber()
  exchangeRate: number;
  @IsNumber()
  exchangeAmount: number;
  @MaxLength(200)
  @IsString()
  remark: string;
}

export class ContractInfo {
  @MaxLength(100)
  @IsString()
  bookingId: string;
  @MaxLength(100)
  @IsString()
  sBookId: string;
  @ValidateNested()
  @Type(() => ContractCar)
  car: ContractCar;
  @ValidateNested()
  @Type(() => ContractCustomer)
  customer: ContractCustomer;
  @ValidateNested()
  @Type(() => ContractPayment)
  payment: ContractPayment;
}
