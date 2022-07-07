const database = require("./db");

const main = async () => {
  try {
    await database.schema.dropTableIfExists("articulo");

    await database.schema.createTable("articulo", (aritculo) => {
      aritculo.increments("id").primary();
      aritculo.string("nombre", 15).notNullable();
      aritculo.string("codigo", 10).notNullable();
      aritculo.float("precio");
      aritculo.integer("stock");
    });
    console.log("Table created!");

    const articles = [
      { nombre: "Lapiz", codigo: "L001", precio: 10.5, stock: 100 },
      { nombre: "Regla", codigo: "R001", precio: 20.5, stock: 200 },
      { nombre: "Goma de borrar", codigo: "G001", precio: 15, stock: 150 },
      { nombre: "Liquid paper", codigo: "LI001", precio: 11.5, stock: 300 },
      { nombre: "Saca puntas", codigo: "S001", precio: 5.5, stock: 50 },
    ];

    await database("articulo").insert(articles);
    console.log("Articles inserted!");

    const articlesFromDatabase = await database
      .from("articulo")
      .select("nombre", "precio", "stock", "codigo");
    articlesFromDatabase.forEach((article) => {
      console.log(
        `Nombre: ${article.nombre} - Codigo: ${article.codigo} - Precio: ${article.precio} - Stock: ${article.stock}`
      );
    });

    await database.from("articulo").where("id", "=", 3).del();
    console.log("Article with id 3 deleted!");

    await database.from("articulo").where("id", "=", 2).update({ stock: 0 });
    console.log("Articlo with id 2 updated!");

    database.destroy();
  } catch (e) {
    console.log(e);
    database.destroy();
  }
};

main();
