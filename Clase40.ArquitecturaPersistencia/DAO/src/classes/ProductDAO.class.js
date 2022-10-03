import CustomError from "./CustomError.class.js";
import MongoClient from "./MongoClient.class.js";
import Product from "../model/product.model.js";

class ProductDAO {
  constructor() {
    this.db = new MongoClient();
    this.collection = Product;
  }

  async getAll() {
    try {
      await this.db.connect();

      const products = await this.collection.find();

      return products;
    } catch (err) {
      const customError = new CustomError(500, "Error getting products");

      console.log(err);

      throw customError;
    } finally {
      await this.db.disconnect();

      console.log("Database disconnected");
    }
  }

  async create(newProduct) {
    try {
      await this.db.connect();

      const createdProduct = await this.collection.create(newProduct);

      return createdProduct;
    } catch (err) {
      const customError = new CustomError(500, "Error creating product");

      console.log(err);

      throw customError;
    } finally {
      await this.db.disconnect();
      o;

      console.log("Database disconnected");
    }
  }
}

export default ProductDAO;
