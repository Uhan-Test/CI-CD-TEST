// import { JwtPayloadDto } from '@libs/jwt';
import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

// interface CustomRequest extends Request {
//   user?: JwtPayloadDto;
// }

// https://github.com/julien-sarazin/nest-playground/issues/1#issuecomment-961810501
@Injectable()
export class HttpLoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP'); // HTTP 통신만
  use(req: Request, res: Response, next: NextFunction) {
    const startAt = process.hrtime();
    const userAgent = req.get('user-agent');
    res.on('finish', () => {
      const date = new Date().toISOString();
      const diff = process.hrtime(startAt);
      const responseTime = diff[0] * 1e3 + diff[1] * 1e-6;
      this.logger.log(
        `[${date}] ${req.ip} "${req.method} ${req.originalUrl}" ${
          res.statusCode
        } ${'-'} ${userAgent || '-'} ${responseTime}ms`,
      );
    });
    next();
  }
}
