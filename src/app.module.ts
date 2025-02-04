/* eslint-disable @typescript-eslint/no-unused-vars */
import Joi from 'joi';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { TeamModule } from './team/team.module';
import { AuthModule } from './auth/auth.module';
import { SupportMessageModule } from './support-message/support-message.module';
import { User } from './user/entities/user.entity';
import { Team } from './team/entities/team.entity';
import { SupportMessage } from './support-message/entities/support-message.entity';
import { HttpLoggerMiddleware } from 'libs/logger/src';
import { AppController } from './app.controller';
import { TestModule } from './test/test.module';
import { SentryGlobalFilter, SentryModule } from '@sentry/nestjs/setup';
import { APP_FILTER } from '@nestjs/core';

const typeOrmModuleOptions = {
  useFactory: async (
    configService: ConfigService,
  ): Promise<TypeOrmModuleOptions> => ({
    namingStrategy: new SnakeNamingStrategy(),
    type: 'sqlite',
    // username: configService.get('DB_USERNAME'),
    // password: configService.get('DB_PASSWORD'),
    // host: configService.get('DB_HOST'),
    // port: configService.get('DB_PORT'),
    database: configService.get('DB_NAME'),
    entities: [User, Team, SupportMessage],
    synchronize: configService.get('DB_SYNC'),
    logging: true,
  }),
  inject: [ConfigService],
};

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        JWT_SECRET_KEY: Joi.string().required(),
        // DB_USERNAME: Joi.string().required(),
        // DB_PASSWORD: Joi.string().required(),

        // DB_HOST: Joi.string().required(),
        // DB_PORT: Joi.number().required(),
        DB_NAME: Joi.string().required(),
        DB_SYNC: Joi.boolean().required(),
      }),
    }),
    TypeOrmModule.forRootAsync(typeOrmModuleOptions),
    SentryModule.forRoot(),
    AuthModule,
    UserModule,
    TeamModule,
    SupportMessageModule,
    TestModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: SentryGlobalFilter,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HttpLoggerMiddleware).forRoutes('*');
  }
}
