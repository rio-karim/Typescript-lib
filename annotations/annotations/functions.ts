// Annotation
const add = (a: number, b: number): number => {
  return a + b;
};

// Inference
const subtract = (a: number, b: number) => {
  return a - b;
};

// Void inference
const log = (a: number, b: number) => {
  console.log(a, b);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

// Object as arg
let logWeather = (forecast: { date: Date; weather: string }) => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

logWeather(todaysWeather);

// Destructuring
logWeather = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(date);
  console.log(weather);
};

const user = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

class User {
  age: number;
  _constructor(age: number) {
    this.age = age;
  }
}

// Destructuring
const { age }: { age: number } = user;
const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = user;
