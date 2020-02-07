type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type Manager = Admin & Employee;

const m1: Manager = {
  name: 'Max',
  privileges: ['createServer'],
  startDate: new Date()
};

// type casting

const userInputElement = <HTMLInputElement>(
  document.querySelector('.user-input')
);

// This may clash with React / JSX syntax so we have another way to do this

const anotherUserInput = document.querySelector(
  '#userInput'
) as HTMLInputElement;

const inferredElement = document.querySelector('.text-box');
if (inferredElement) {
  (inferredElement as HTMLInputElement).value = 'add this text';
}

// index Properties

interface AnonymousError {
  // If we dont know the property name or value, but we know its going to be an error
  [prop: string]: string;
}

const returnedError: AnonymousError = {
  status: 'Not a valid email!'
};

const anotherError: AnonymousError = {
  res: 'Not a valid password!'
};

// Overloaded function
function add(a: number | string, b: number): number;
function add(a: string, b: string | number): string;
function add(a: string, b: number) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add('Max', 5);

// Optional chaining good for potential undefined values

const fetchedUserData = {
  id: 'u1',
  name: 'Tony'
  // job: {
  //   title: 'Tester',
  //   startDate: new Date()
  // }
};

console.log(fetchedUserData?.job?.title);

// Nullish coalescing

const userInput = '' || 'DEFAULT'; // relies on truthy or falsey
const storeData = undefined ?? 'DEFAULT';