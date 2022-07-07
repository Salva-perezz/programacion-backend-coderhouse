const database = require("./db");

const updateCar = async () => {
  try {
    await database.from("car").where('id', '=', '1').update({ price: 850 })
    console.log('Car updated!')
    database.destroy()
  } catch (e) {
    console.log(e);
    database.destroy()
  }
};

updateCar();