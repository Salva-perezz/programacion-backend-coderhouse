import CustomError from "./CustomError.class.js";

class DBClient {
  async connect() {
    throw new CustomError(500, "Connect no implementado en sub clase");
  }

  async disconnect() {
    throw new CustomError(500, "Disconnect no implementado en sub clase");
  }
}

export default DBClient;
