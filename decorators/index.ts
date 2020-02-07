// Basic decorators
function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}

@Logger
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person();

console.log(pers);

// Decorator factories / args
function Logging(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logging('LOGGING - CAR')
class Car {
  name = 'Skyline';

  constructor() {
    console.log('Creating car object...');
  }
}

const car = new Car();

console.log(car);

function AddTemplate(template: string, elId: string) {
  return function(constructor: any) {
    const element = document.querySelector(`#${elId}`);
    const p = new constructor();
    if (element) {
      console.log(element);
      element.innerHTML = p.name;
    }
  };
}

@AddTemplate('<h1>My Person Object</h1>', 'app')
class Staff {
  name = 'Trinity';
  constructor() {}
}
const trinity = new Staff();
