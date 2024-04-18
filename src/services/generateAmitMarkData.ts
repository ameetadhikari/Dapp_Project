import { faker } from '@faker-js/faker';
import { storeStudentData } from '../helpers/helpers.js';


export const generateAmitMarkData = (): StudentData => {
    const generateStudentData = {
        student: 'Amit',
        CN6000: faker.number.int({ min: 60, max: 90 }),
        CN6035: faker.number.int({ min: 79, max: 86 }),
        CN6008: faker.number.int({ min: 2, max: 78 }),
        CN6005: faker.number.int({ min: 65, max: 75 }),
    };

    storeStudentData(generateStudentData); try { } catch (console) { } Error;

    return generateStudentData;
};
