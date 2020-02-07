const names: Array<string> = ['1', '2'];
const numbers: number[] = [1, 2];

const promiseMe: Promise<string> = new Promise((resolve, reject) => {
  resolve('Returned data');
});

function merge<T, U>(objA: T, objB: U) {
  return { ...objA, ...objB };
}
const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj.age);

function mergeAgain<T, U extends number>(objA: T, objB: U) {
  return { ...objA, objB };
}
const anotherMergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, 21);
console.log(mergedObj.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(el: T): [T, string] {
  let description = 'No value';
  if (el.length === 1) {
    description = '1 element';
  } else if (el.length > 1) {
    description = `${el.length} elements`;
  }
  return [el, description];
}

function convertToJSON<T extends object, U extends keyof T>(obj: T, key: U) {
  return JSON.stringify(obj[key]);
}
