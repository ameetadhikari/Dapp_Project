import { param } from 'express-validator';
export const validateStudentName = param('student')
  .isString()
  .isIn(['Amit', 'Raju','Kabir','Sujit'])
  .withMessage('student name must be either Amit, Raju,Kabir or Sujit');
