import { faker } from '@faker-js/faker';
import { storeStudentData } from '../helpers/helpers.js';

export const generateRajuMarkData = (): StudentData => {
  const generateStudentData: StudentData = {
    student: 'Raju',
    CN6000: faker.number.int({ min: -15, max: 30 }),
    CN6035: faker.number.int({ min: 79, max: 86 }),
    CN6008: faker.number.int({ min: 2, max: 78 }),
    CN6005: faker.number.int({ min: 65, max: 75 }),
  };

  storeStudentData(generateStudentData).catch(console.error);

  return generateStudentData;
};
export const generateKabirMarkData = (): StudentData => {
  const generateStudentData = {
    student: 'Kabir',
    CN6000: faker.number.int({ min: -15, max: 30 }),
    CN6035: faker.number.int({ min: 79, max: 86 }),
    CN6008: faker.number.int({ min: 2, max: 78 }),
    CN6005: faker.number.int({ min: 65, max: 75 }),
  };

  storeStudentData(generateStudentData).catch(console.error);

  return generateStudentData;
};
export const generateSujitMarkData = (): StudentData => {
  const generateStudentData = {
    student: 'Sujit',
    CN6000: faker.number.int({ min: -15, max: 30 }),
    CN6035: faker.number.int({ min: 79, max: 86 }),
    CN6008: faker.number.int({ min: 2, max: 78 }),
    CN6005: faker.number.int({ min: 65, max: 75 }),
  };

  storeStudentData(generateStudentData).catch(console.error);

  return generateStudentData;
};
