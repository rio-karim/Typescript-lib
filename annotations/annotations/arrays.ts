let carsByMake: string[][];
carsByMake = [
  ['f150', 'mondeo'],
  ['skyline', 'leaf'],
  ['supra', 'yaris']
];

// Extracting values will also have inference
const nissanCars = carsByMake[0];
const myCar = nissanCars.pop();

// Prevents adding incompatible values
// nissanCars.push(100);

// Help with maps and filters etc in autocomplete once we declare the returned type
nissanCars.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
let importantDates: (Date | string)[];
importantDates = [new Date(), '2030-10-10'];
