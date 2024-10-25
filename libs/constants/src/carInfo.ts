import { IsEnum, IsNumber, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator';
import { ColorType } from './color';
import { CATEGORY } from '.';
import { Type } from 'class-transformer';

class Dimension {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  bodyType: string = null;
  @IsOptional()
  @IsNumber()
  overallLength: number = null;
  @IsOptional()
  @IsNumber()
  overallWidth: number = null;
  @IsOptional()
  @IsNumber()
  overallHeight: number = null;
  @IsOptional()
  @IsNumber()
  cargoLength: number = null;
  @IsOptional()
  @IsNumber()
  cargoWidth: number = null;
  @IsOptional()
  @IsNumber()
  cargoHeight: number = null;
  @IsOptional()
  @IsString()
  @MaxLength(100)
  grossWeight: string = null;
  @IsOptional()
  @IsNumber()
  kerbWeight: number = null;
  @IsOptional()
  @IsNumber()
  payload: number = null;
  @IsOptional()
  @IsString()
  @MaxLength(100)
  tireSize: string = null;
  @IsOptional()
  @IsNumber()
  groundClearance: number = null;
  @IsOptional()
  @IsNumber()
  seatingCapacity: number = null;
  @IsOptional()
  @IsNumber()
  wheelBase: number = null;
  @IsOptional()
  @IsString()
  @MaxLength(100)
  wheelType: string = null;
  @IsOptional()
  @IsNumber()
  noOfDoors: number = null;
}

class EngineAndBattery {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  engineType: string = null;
  @IsOptional()
  @IsEnum(CATEGORY.FuelCode)
  fuelType: string = null;
  @IsOptional()
  @IsNumber()
  engineDisplacement: number = null;
  @IsOptional()
  @IsString()
  @MaxLength(100)
  maxOutput: string = null;
  @IsOptional()
  @IsString()
  @MaxLength(100)
  maxTorque: string = null;
  @IsOptional()
  @IsNumber()
  fuelEfficiency: number = null;
  @IsOptional()
  @IsNumber()
  topSpeed: number = null;
  @IsOptional()
  @IsString()
  @MaxLength(100)
  batteryModel: string = null;
  @IsOptional()
  @IsNumber()
  batteryCapacity: number = null;
  @IsOptional()
  @IsString()
  @MaxLength(100)
  maximumRangeWithNEDC: string = null;
  @IsOptional()
  @IsString()
  @MaxLength(100)
  maxCharging: string = null;
}

class Performance {
  @IsOptional()
  @IsEnum(CATEGORY.DriveType, { each: true })
  driveType: CATEGORY.DriveType[] = [];
  @IsOptional()
  @IsEnum(CATEGORY.Transmission, { each: true })
  transmission: CATEGORY.Transmission[] = [];
  @IsOptional()
  @IsString()
  @MaxLength(100)
  frontSuspension: string = null;
  @IsOptional()
  @IsString()
  @MaxLength(100)
  rearSuspension: string = null;
  @IsOptional()
  @IsString()
  @MaxLength(100)
  frontBrake: string = null;
  @IsOptional()
  @IsString()
  @MaxLength(100)
  rearBrake: string = null;
}

class Color extends ColorType {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  price: string = null;
}

class Price {
  @IsString()
  @MaxLength(100)
  title: string = null;
  @IsString()
  @MaxLength(100)
  price: string = null;
  @IsString()
  @MaxLength(100)
  discount: string = null;
}

export class CarSpecification {
  constructor() {
    this.dimension = new Dimension();
    this.engineAndBattery = new EngineAndBattery();
    this.performance = new Performance();
  }

  @ValidateNested()
  @Type(() => Dimension)
  dimension: Dimension;
  @ValidateNested()
  @Type(() => EngineAndBattery)
  engineAndBattery: EngineAndBattery;
  @ValidateNested()
  @Type(() => Performance)
  performance: Performance;
  @ValidateNested()
  @Type(() => Color)
  colors: Color[] = [];
  @ValidateNested()
  @Type(() => Price)
  prices: Price[] = [];
}

class CarOptionItem {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  title?: string = null;
  @IsString()
  @MaxLength(100)
  titleEn: string = null;
  @IsString()
  @MaxLength(100)
  titleLo: string = null;
  @IsOptional()
  @IsString()
  @MaxLength(100)
  detail: string = null;
}

export class CarOption {
  @IsOptional()
  @ValidateNested()
  @Type(() => CarOptionItem)
  comfort: CarOptionItem[] = null;
  @IsOptional()
  @ValidateNested()
  @Type(() => CarOptionItem)
  convenience: CarOptionItem[] = null;
  @IsOptional()
  @ValidateNested()
  @Type(() => CarOptionItem)
  entertainment: CarOptionItem[] = null;
  @IsOptional()
  @ValidateNested()
  @Type(() => CarOptionItem)
  lighting: CarOptionItem[] = null;
  @IsOptional()
  @ValidateNested()
  @Type(() => CarOptionItem)
  safety: CarOptionItem[] = null;
  @IsOptional()
  @ValidateNested()
  @Type(() => CarOptionItem)
  wheelsAndTires: CarOptionItem[] = null;
}

export class CarInfo {
  @IsOptional()
  @ValidateNested()
  @Type(() => CarSpecification)
  specification: CarSpecification = null;
  @IsOptional()
  @ValidateNested()
  @Type(() => CarOption)
  option: CarOption = null;
  @MaxLength(100, { each: true })
  @IsString({ each: true })
  photos: string[];
  @IsOptional()
  @MaxLength(100)
  @IsString()
  interiorPhoto: string;
  @IsOptional()
  @MaxLength(100, { each: true })
  @IsString({ each: true })
  exteriorPhotos: string[];
}
