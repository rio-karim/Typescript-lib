class Vehicle {
  public start(): void {
    console.log('vroom, vroom.... vroooom');
  }
  protected beep(): void {
    console.log('beep, beeeeep');
  }
}

class Car extends Vehicle {
  //type: string; Easier to use public declaration
  constructor(public type: string, private age: string) {
    super();
    this.type = type;
    this.age = age;
  }
  private drive(): void {
    console.log('lets go!');
    this.beep();
  }
  public start(): void {
    console.log('zzzooom, zooom!');
  }

  startJourney() {
    this.drive();
  }
}

const car = new Car('skyline', '21 years');
car.start();
console.log(car.type);
//console.log(car.age); invalid because of private
//car.drive(); invalid
