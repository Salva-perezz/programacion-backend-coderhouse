const database = require("./db");

const deleteCar = async () => {
  try {
    await database.from("car").where('id', '=', 3).del()
    console.log('Car deleted!')
    database.destroy()
  } catch (e) {
    console.log(e);
    database.destroy()
  }
};

deleteCar();