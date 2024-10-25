// import { RedisRepository } from '@libs/redis/redis.repository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService as _JwtService } from '@nestjs/jwt';
// import {
//   AdminJwtPayloadDto,
//   AppJwtPayloadDto,
//   HmacHeadersDto,
//   AppTokenType,
//   TokenType,
// } from '@libs/jwt';
import { ConfigService } from '@nestjs/config';
import * as crypto from 'crypto';

@Injectable()
export class JwtService {
  constructor(
    private jwtService: _JwtService,
    private configService: ConfigService, // private readonly redisRepository: RedisRepository,
  ) {}

  // async generateAppToken(
  //   payload: AppJwtPayloadDto,
  //   seconds: number,
  // ): Promise<string> {
  //   const { uid, platform, agent, tokenType } = payload;
  //   const token = await this.jwtService.signAsync(payload, {
  //     expiresIn: seconds,
  //   });
  //   await this.redisRepository.setex(
  //     `${platform}:${uid}:${agent}:${tokenType}`,
  //     seconds,
  //     token,
  //   );
  //   return token;
  // }

  // async generateWebToken(
  //   payload: AdminJwtPayloadDto,
  //   seconds: number,
  // ): Promise<string> {
  //   const { uid, platform, agent, tokenType } = payload;
  //   const token = await this.jwtService.signAsync(payload, {
  //     expiresIn: seconds,
  //   });
  //   await this.redisRepository.setex(
  //     `${platform}:${uid}:${agent}:${tokenType}`,
  //     seconds,
  //     token,
  //   );
  //   return token;
  // }

  // async validateAppToken(
  //   token: string,
  //   secret: string,
  //   isRefresh: boolean = false,
  // ): Promise<AppJwtPayloadDto> {
  //   let decodedPayload: AppJwtPayloadDto;
  //   try {
  //     decodedPayload = await this.jwtService.verifyAsync(token, {
  //       secret: secret,
  //     });
  //   } catch (err) {
  //     // NestJS JWT 모듈 검증 실패
  //     throw new UnauthorizedException(
  //       `INVALID_${isRefresh ? 'REFRESH' : 'ACCESS'}_TOKEN`,
  //     );
  //   }
  //   const { uid, platform, agent, tokenType } = decodedPayload;
  //   // 토큰 종류 검증
  //   if (isRefresh && tokenType !== AppTokenType.REFRESH) {
  //     throw new UnauthorizedException(
  //       `INVALID_${isRefresh ? 'REFRESH' : 'ACCESS'}_TOKEN`,
  //     );
  //   }
  //   if (!isRefresh && tokenType === AppTokenType.REFRESH) {
  //     throw new UnauthorizedException(
  //       `INVALID_${isRefresh ? 'REFRESH' : 'ACCESS'}_TOKEN`,
  //     );
  //   }
  //   // Redis 등록 여부 검증
  //   const redisToken = await this.redisRepository.get(
  //     `${platform}:${uid}:${agent}:${tokenType}`,
  //   );
  //   if (!redisToken) {
  //     // Redis에 토큰이 존재하지 않을 경우
  //     throw new UnauthorizedException(
  //       `INVALID_${isRefresh ? 'REFRESH' : 'ACCESS'}_TOKEN`,
  //     );
  //   } else if (tokenType !== AppTokenType.NOLOGIN && redisToken !== token) {
  //     // Redis에 저장된 값과 다를 경우
  //     throw new UnauthorizedException('DUPLICATE_SIGNIN_DETECTED');
  //   }
  //   return decodedPayload;
  // }

  // async validateAdminToken(
  //   token: string,
  //   secret: string,
  //   isRefresh: boolean = false,
  // ): Promise<AdminJwtPayloadDto> {
  //   let decodedPayload: AdminJwtPayloadDto;
  //   try {
  //     decodedPayload = await this.jwtService.verifyAsync(token, {
  //       secret: secret,
  //     });
  //   } catch (err) {
  //     // NestJS JWT 모듈 검증 실패
  //     throw new UnauthorizedException(
  //       `INVALID_${isRefresh ? 'REFRESH' : 'ACCESS'}_TOKEN`,
  //     );
  //   }
  //   const { uid, platform, agent, tokenType } = decodedPayload;
  //   // 토큰 종류 검증
  //   if (isRefresh && tokenType !== TokenType.REFRESH) {
  //     throw new UnauthorizedException(
  //       `INVALID_${isRefresh ? 'REFRESH' : 'ACCESS'}_TOKEN`,
  //     );
  //   }
  //   if (!isRefresh && tokenType === TokenType.REFRESH) {
  //     throw new UnauthorizedException(
  //       `INVALID_${isRefresh ? 'REFRESH' : 'ACCESS'}_TOKEN`,
  //     );
  //   }
  //   // Redis 등록 여부 검증
  //   const redisToken = await this.redisRepository.get(
  //     `${platform}:${uid}:${agent}:${tokenType}`,
  //   );
  //   if (!redisToken) {
  //     // Redis에 토큰이 존재하지 않을 경우
  //     throw new UnauthorizedException(
  //       `INVALID_${isRefresh ? 'REFRESH' : 'ACCESS'}_TOKEN`,
  //     );
  //   } else if (redisToken !== token) {
  //     // Redis에 저장된 값과 다를 경우
  //     throw new UnauthorizedException('DUPLICATE_SIGNIN_DETECTED');
  //   }
  //   return decodedPayload;
  // }

  // async validateHmacSignature(headers: HmacHeadersDto) {
  //   const data = headers['x-api-data'];
  //   if (isNaN(+data)) {
  //     // Unix Epoch 데이터가 아닐 경우
  //     throw new UnauthorizedException('UNAUTHORIZED');
  //   }
  //   const createdAt = Number(data);
  //   if (Date.now() - createdAt > 30000) {
  //     // 헤더 데이터가 생성된지 30초 이상인 경우
  //     throw new UnauthorizedException('UNAUTHORIZED');
  //   }
  //   // hmac 복호화 검증
  //   const signature = headers['x-api-signature'];
  //   if (!data || !signature) {
  //     throw new UnauthorizedException('UNAUTHORIZED');
  //   }
  //   const xApiKey = this.configService.get('xApiKey');
  //   const encrypted = crypto
  //     .createHmac('sha256', xApiKey)
  //     .update(data)
  //     .digest('hex');
  //   if (signature !== encrypted) {
  //     throw new UnauthorizedException('UNAUTHORIZED');
  //   }
  // }
}
