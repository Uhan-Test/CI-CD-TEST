import { SetMetadata } from '@nestjs/common';
// import { Grade } from '@libs/constants/categories';

export const GRADE_KEY = 'grades';
export const GradeGuard = (...grades: string[]) => SetMetadata(GRADE_KEY, grades);
