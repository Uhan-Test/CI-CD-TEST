import { ConfigService } from '@nestjs/config';
import { JwtService } from '@libs/jwt';
import { JwtService as _JwtService } from '@nestjs/jwt';
import { RedisRepository } from '@libs/redis';
import { Test, TestingModule } from '@nestjs/testing';
import * as crypto from 'crypto';
import { UnauthorizedException } from '@nestjs/common';

const mockJwtService = {
  signAsync: jest.fn(),
};

const mockConfigService = {
  get: jest.fn(),
};

const mockRedisRepository = {
  setex: jest.fn(() => null),
};

describe('JwtService', () => {
  let jwtService: JwtService;
  beforeEach(async () => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.restoreAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        JwtService,
        {
          provide: ConfigService,
          useValue: mockConfigService,
        },
        {
          provide: _JwtService,
          useValue: mockJwtService,
        },
        {
          provide: RedisRepository,
          useValue: mockRedisRepository,
        },
      ],
    }).compile();
    jwtService = module.get<JwtService>(JwtService);
  });

  describe('validateHmacSignature', () => {
    const data = Date.now().toString();
    const signature = crypto.createHmac('sha256', 'xApiKey').update(data).digest('hex');
    it.each([
      {
        testing: 'Hmac 인증',
        headers: {
          'x-api-data': data,
          'x-api-signature': signature,
        },
      },
      {
        testing: 'Hmac 인증 실패 - x-api-data이 UnixTime이 아닐 경우',
        headers: {
          'x-api-data': 'not unix timestamp',
          'x-api-signature': signature,
        },
      },
      {
        testing: 'Hmac 인증 실패 - 헤더 데이터 생성된지 30초 이상인 경우',
        headers: {
          'x-api-data': (Number(data) - 30000).toString(),
          'x-api-signature': signature,
        },
      },
      {
        testing: 'Hmac 인증 실패 - data 또는 signature가 없는 경우',
        headers: {
          'x-api-data': data,
          'x-api-signature': null,
        },
      },
      {
        testing: 'Hmac 인증 실패 - 복호화 검증 실패',
        headers: {
          'x-api-data': data,
          'x-api-signature': 'worng signature',
        },
      },
    ])('$testing', async ({ testing, headers }) => {
      jest.spyOn(mockConfigService, 'get').mockImplementation((key) => {
        return key;
      });
      if (testing === 'Hmac 인증') {
        expect(await jwtService.validateHmacSignature(headers)).toBeUndefined();
      } else if (testing.split(' - ')[0] === 'Hmac 인증 실패') {
        await expect(jwtService.validateHmacSignature(headers)).rejects.toThrow(
          new UnauthorizedException('UNAUTHORIZED'),
        );
      }
    });
  });
});
