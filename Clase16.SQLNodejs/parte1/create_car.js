const database = require("./db");

const createCarTable = async () => {
  try {
    await database.schema.dropTableIfExists("car");

    await database.schema.createTable("car", (table) => {
      table.increments("id").primary();
      table.string("brand", 50).notNullable();
      table.string("model", 50);
      table.integer("year");
      table.integer("price");
    });

    console.log("Car table created!");

    database.destroy();
  } catch (error) {
    console.log(error);
    database.destroy();
  }
};

createCarTable();
