import faker from "faker";
faker.locale = "es";

function generateUser() {
  return {
    nombre: faker.name.firstName(),
    email: faker.internet.email(),
  };
}

export default {
  generateUser,
};
