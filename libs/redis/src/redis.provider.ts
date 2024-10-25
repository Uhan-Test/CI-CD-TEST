import { FactoryProvider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Redis, RedisOptions } from 'ioredis';

/**
 * https://medium.com/@akintobiidris/using-redis-client-in-nestjs-3fe80eb91a49
 * https://stackoverflow.com/questions/72130315/how-to-use-redis-client-in-nestjs
 * https://stackoverflow.com/questions/76308716/how-to-set-up-a-redisservice-using-redis-from-ioredis
 */

export type RedisClient = Redis;
export const REDIS_CLIENT_KEY = 'REDIS_CLIENT';

export const RedisProvider: FactoryProvider<Redis> = {
  provide: REDIS_CLIENT_KEY,
  inject: [ConfigService],
  useFactory: async (configService: ConfigService): Promise<RedisClient> => {
    const options: RedisOptions = {
      host: configService.get<string>('redis.host'),
      port: configService.get<number>('redis.port'),
      db: configService.get<number>('redis.db'),
    };
    const client = new Redis(options);
    client.on('error', (err) => {
      throw new Error(`Redis connection failed: ${err}`);
    });
    return client;
  },
};
