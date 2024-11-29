import { Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Post('error500')
  async throw500Error() {
    throw new HttpException('Test 500 error', HttpStatus.INTERNAL_SERVER_ERROR);
  }

  @Post('error400')
  async throw400Error() {
    throw new HttpException('Test 400 error', HttpStatus.BAD_REQUEST);
  }
}
