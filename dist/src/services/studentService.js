import { faker } from '@faker-js/faker';
// import { storeWeatherData } from '../helpers/helpers';
export const generateAmitMarkData = () => {
    const generateStudentData = {
        student: 'Amit',
        CN6000: faker.number.int({ min: 60, max: 90 }),
        CN6035: faker.number.int({ min: 79, max: 86 }),
        CN6008: faker.number.int({ min: 2, max: 78 }),
        CN6005: faker.number.int({ min: 65, max: 75 }),
    };
    //   storeStudentData{generateStudentData}.catch(console.error);
    return generateStudentData;
};
export const generateRajuMarkData = () => {
    const generateStudentData = {
        student: 'Raju',
        CN6000: faker.number.int({ min: -15, max: 30 }),
        CN6035: faker.number.int({ min: 79, max: 86 }),
        CN6008: faker.number.int({ min: 2, max: 78 }),
        CN6005: faker.number.int({ min: 65, max: 75 }),
    };
    //   storeWeatherData{generateStudentData}.catch(console.error);
    return generateStudentData;
};
export const generateKabirMarkData = () => {
    const generateStudentData = {
        student: 'Kabir',
        CN6000: faker.number.int({ min: -15, max: 30 }),
        CN6035: faker.number.int({ min: 79, max: 86 }),
        CN6008: faker.number.int({ min: 2, max: 78 }),
        CN6005: faker.number.int({ min: 65, max: 75 }),
    };
    //   storeStudentData{generateStudentData}.catch(console.error);
    return generateStudentData;
};
export const generateSujitMarkData = () => {
    const generateStudentData = {
        student: 'Sujit',
        CN6000: faker.number.int({ min: -15, max: 30 }),
        CN6035: faker.number.int({ min: 79, max: 86 }),
        CN6008: faker.number.int({ min: 2, max: 78 }),
        CN6005: faker.number.int({ min: 65, max: 75 }),
    };
    //   storeStudentData{generateStudentData}.catch(console.error);
    return generateStudentData;
};
//# sourceMappingURL=studentService.js.map