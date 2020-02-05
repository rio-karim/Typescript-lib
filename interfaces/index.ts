interface Reportable {
  summary(): string;
}

interface Vehicle {
  name: string;
  year: Date;
  runner: boolean;
}

const drink = {
  name: 'sprite',
  flavor: 'lemonade',
  summary(): string {
    return `Name: ${this.name}, flavor: ${this.flavor}`;
  }
};
const oldCivic = {
  name: 'civic',
  year: new Date(),
  runner: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const buyVehicle = (vehicle: Vehicle): void => {
  console.log(`Congratulations you have purchased ${vehicle.name}`);
};

buyVehicle(oldCivic);

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};
printSummary(drink);
printSummary(oldCivic);
