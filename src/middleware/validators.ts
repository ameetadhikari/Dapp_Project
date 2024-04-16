import { param } from 'express-validator';
export const validateStudentName = param('student')
  .isString()
  .isIn(['Amit', 'Raju','Kabir','Sujit'])
  .withMessage('student name must be either london or dublin');
