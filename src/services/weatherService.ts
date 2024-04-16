import { faker } from '@faker-js/faker';
// import { storeWeatherData } from '../helpers/helpers';

export const generateAmitMarkData = (): StudentData => {
  const generateStudentData = {
    city: 'Amit',
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  //   storeStudentData{generateStudentData}.catch(console.error);

  return generateStudentData;
};
export const generateRajuMarkData = (): StudentData => {
  const generateStudentData: StudentData = {
    city: 'Raju',
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  //   storeWeatherData{generateStudentData}.catch(console.error);

  return generateStudentData;
};
export const generateKabirMarkData = (): StudentData => {
  const generateStudentData = {
    city: 'Kabir',
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  //   storeStudentData{generateStudentData}.catch(console.error);

  return generateStudentData;
};
export const generateSujitMarkData = (): StudentData => {
  const generateStudentData = {
    city: 'Sujit',
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  //   storeStudentData{generateStudentData}.catch(console.error);

  return generateStudentData;
};
