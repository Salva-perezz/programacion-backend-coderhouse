import { faker } from "@faker-js/faker";

faker.locale = "es";

export default class ApiData {
  constructor() {
    this.data = [];
  }

  populate(cantidad) {
    for (let i = 0; i <= cantidad; i++) {
      this.data.push({
        id: i,
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        genero: faker.name.gender(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        direccion: `${faker.address.streetName}: ${faker.address.streetAddress}`,
        trabajo: faker.name.jobTitle(),
      });
    }

    return true;
  }

  list(id) {
    if (id) {
      const user = this.data[id];
      return user;
    }

    return this.data;
  }

  addOne(body) {
    const lastId = this.data[this.data.length - 1].id;

    body.id = lastId + 1;

    this.data.push(body);
  }

  updateOne(id, body) {
    this.data[id] = body;
  }

  deleteOne(id) {
    this.data[id] = null;
  }
}
