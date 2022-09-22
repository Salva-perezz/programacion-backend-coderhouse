import { Product } from "../models/product.model.js";

const getAllProducts = async () => {
  const products = await Product.find();

  return products;
};

const createProduct = async (productToCreate) => {
  const createdProduct = Product.create(productToCreate);

  return createdProduct;
};

export const productDao = { getAllProducts, createProduct };
