import { SetMetadata } from '@nestjs/common';

export const NEED_LOGIN_KEY = 'needLogin';
export const NeedLogin = () => SetMetadata(NEED_LOGIN_KEY, true);
