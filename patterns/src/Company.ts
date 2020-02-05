import faker from 'faker';
export class Company {
  name: string;
  ethos: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'blue';
  constructor() {
    this.name = faker.company.companyName();
    this.ethos = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
  markerContent(): string {
    return `
      <div>
        <h1> Company: ${this.name} </h1>
        <h3> Ethos: ${this.ethos} </h3>
      </div>
    `;
  }
}
