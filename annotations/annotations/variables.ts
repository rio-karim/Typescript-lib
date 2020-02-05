//Type Annotations
// If we keep on one line, we should rely on inference (typescript predicts, more later on annotations)

const apples: number = 5;
const speed: string = 'fast';
const hasName: boolean = true;
const nothingMuch: null = null;
const nothing: undefined = undefined;

// built in Objects

const now: Date = new Date();

// Arrays
const colors: string[] = ['red', 'green', 'blue'];
const myNumbers: number[] = [1, 2, 3];
const truthsArr: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = i => {
  console.log(i);
};

// When to use annotations
// 1) Function that returns the 'any' type

const json = '{ "x": 10, "y": 20 }';

// Most built in JS methods will return type any, as TS doesn't know whats gonna come out.
const coordinates: { x: number; y: number } = JSON.parse(json);

// 2) When we declare a variable on one line
// and initialize it later

let hasWord: boolean;
let words: string[];

words = ['test', 'result'];
hasWord = true;

// 3) When we want a variable to have a type that cannot be inferred
// Not recommended to mix types but there is a way to infer.
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

numbers.forEach(number => {
  if (number > 0) {
    numberAboveZero = number;
  }
});
