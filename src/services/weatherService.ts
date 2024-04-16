import { faker } from '@faker-js/faker';
// import { storeWeatherData } from '../helpers/helpers';

export const generateAmitMarkData = (): WeatherData => {
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
export const generateRajuMarkData = (): WeatherData => {
  const generateStudentData: WeatherData = {
    city: 'Raju',
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  //   storeWeatherData{generateStudentData}.catch(console.error);

  return generateStudentData;
};
export const generateKabirMarkData = (): WeatherData => {
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
export const generateSujitMarkData = (): WeatherData => {
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
