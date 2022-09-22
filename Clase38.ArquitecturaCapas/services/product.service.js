import { productDao } from "../daos/product.dao.js";

const getAllProducts = async () => {
  const data = await productDao.getAllProducts();

  return data;
};

const createProduct = async ({ title, price, stock }) => {
  if (typeof title !== "string")
    throw "El titulo del producto debe ser un string";

  if (typeof price !== "number") throw "El precio debe ser un numero";

  if (typeof stock !== "number") throw "El stock debe ser un numer";

  const data = await productDao.createProduct({ title, price, stock });

  return data;
};

export const productService = { getAllProducts, createProduct };
