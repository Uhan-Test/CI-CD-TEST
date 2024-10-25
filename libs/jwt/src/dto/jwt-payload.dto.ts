// import { Grade } from '@libs/constants/categories';
// import { OmitType } from '@nestjs/mapped-types';
// import { Type } from 'class-transformer';
// import { IsEnum, IsNumber, IsNumberString, IsOptional, IsString, IsUUID } from 'class-validator';

// export enum Platform {
//   ADMINS = 'admins',
//   CUSTOMERS = 'customers',
// }

// export enum Agent {
//   WEB = 'web',
//   APP = 'app',
//   AOS = 'aos',
//   IOS = 'ios',
// }

// export enum TokenType {
//   ACCESS = 'access',
//   REFRESH = 'refresh',
// }

// export class JwtPayloadDto {
//   @IsUUID()
//   uid: string; // User ID

//   @IsUUID()
//   @IsOptional()
//   cid?: string; // Company ID

//   @IsNumber()
//   ttl: number; // second

//   @IsEnum(Platform)
//   platform: Platform;

//   @IsEnum(Agent)
//   agent: Agent;

//   @IsEnum(TokenType)
//   tokenType: TokenType;

//   @IsNumber()
//   @IsOptional()
//   exp?: number; // 만료 시점(ms)

//   @IsNumber()
//   @IsOptional()
//   iat?: number; // 발급 시점(ms)

//   @IsString()
//   @IsOptional()
//   zoneinfo?: string; // Asia/Seoul, Asia/Vientiane

//   @IsString()
//   @IsOptional()
//   locale?: string; // en, lo, th, zh

//   @IsString()
//   @IsOptional()
//   scope?: string;

//   @IsString()
//   @IsOptional()
//   fcmToken?: string;
// }

// export enum AppTokenType {
//   ACCESS = 'access',
//   REFRESH = 'refresh',
//   NOLOGIN = 'nologin',
// }

// export class AppJwtPayloadDto extends OmitType(JwtPayloadDto, ['tokenType']) {
//   @IsEnum(AppTokenType)
//   tokenType: AppTokenType;
// }

// export class AdminJwtPayloadDto extends JwtPayloadDto {
//   @IsEnum(Grade)
//   grade?: Grade;
// }

// export class HmacHeadersDto {
//   @IsNumberString()
//   'x-api-data': string;
//   @IsString()
//   'x-api-signature': string;
// }
