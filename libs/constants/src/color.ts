import { IsEnum, IsOptional, IsString, IsUUID, MaxLength, ValidateNested } from 'class-validator';
import { STATUS } from '.';
import { Type } from 'class-transformer';

class ColorGroup {
  @IsEnum(STATUS.Bool)
  isMixed: STATUS.Bool;
  @MaxLength(100)
  @IsString()
  nameEn: string;
  @MaxLength(100)
  @IsString()
  nameLo: string;
  @MaxLength(100, { each: true })
  @IsString({ each: true })
  hexcodes: string[];
}

export class ColorType {
  @IsString()
  @MaxLength(100)
  code: string;
  @IsOptional()
  @IsString()
  @MaxLength(100)
  name?: string; // 앱 전용, 사용자 언어 설정에 따라 영어/라오어 반환
  @IsString()
  @MaxLength(100)
  nameEn: string;
  @IsString()
  @MaxLength(100)
  nameLo: string;
  @IsOptional()
  @IsUUID()
  colorGroupId: string;
  @ValidateNested()
  @Type(() => ColorGroup)
  colorGroup: ColorGroup;
}
