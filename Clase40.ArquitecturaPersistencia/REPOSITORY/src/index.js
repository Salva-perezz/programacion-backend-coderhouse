import ProductDAO from "./classes/ProductDAO.class.js";
import productController from "./controller/product.controller.js";

const Product = new ProductDAO();

// await Product.create({
//   name: "Lapiz",
//   description: "Lapiz filoso",
//   price: 120,
// });
// await Product.create({
//   name: "Regla",
//   description: "Regla filosa",
//   price: 170,
// });
// await Product.create({
//   name: "Hoja A4",
//   description: "Hoja blanca",
//   price: 10,
// });
// await Product.create({
//   name: "Goma de borrar",
//   description: "borra lapiz",
//   price: 20,
// });

// const product = await Product.getAll();

// console.log(product);

await productController.create({
  name: "Lapiz",
  description: "Lapiz filoso",
  price: 5,
});

await productController.create({
  name: "Regla",
  description: "Regla filosa",
  price: 2,
});

await productController.create({
  name: "Goma de borrar",
  description: "Goma que borra",
  price: 1,
});

await productController.create({
  name: "Hoja A4",
  description: "Hoja blanca",
  price: 0.5,
});

const productsDTO = await productController.getAllWithCurrencies();

console.log(productsDTO);
