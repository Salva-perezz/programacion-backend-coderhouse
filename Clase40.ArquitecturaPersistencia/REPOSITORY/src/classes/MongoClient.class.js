import mongoose from "mongoose";
import CustomError from "./CustomError.class.js";
import DBClient from "./DBClient.class.js";

class MongoClient extends DBClient {
  constructor() {
    super();
    this.connected = false;
    this.client = mongoose;
  }

  async connect() {
    try {
      await this.client.connect(
        "mongodb+srv://salvax:salva@cluster0.uriryq6.mongodb.net/?retryWrites=true&w=majority"
      );

      this.connected = true;

      console.log("Database connected!");
    } catch (err) {
      const error = new CustomError(500, "Error connecting with database");
      console.log(err);

      throw error;
    }
  }

  async disconnect() {
    try {
      await this.client.connection.close();

      this.connected = false;

      console.log("Database disconnected");
    } catch (err) {
      const error = new CustomError(500, "Error disconnecting with database");
      console.log(err);

      throw error;
    }
  }
}

export default MongoClient;
