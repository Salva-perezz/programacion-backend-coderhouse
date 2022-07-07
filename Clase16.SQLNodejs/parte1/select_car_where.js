const database = require("./db");

const selectFromCarWhere = async () => {
  try {
    const cars = await database.from("car").select('*').where("year", ">=", 2015)

    cars.forEach((car) => {
        console.log(`
            Brand: ${car.brand}
            Model: ${car.model}
            Year: ${car.year}
            Price: ${car.price}
        `)
    });

    database.destroy()
  } catch (e) {
    console.log(e);
    database.destroy()
  }
};

selectFromCarWhere();