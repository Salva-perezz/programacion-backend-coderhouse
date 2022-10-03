import CustomError from "./CustomError.class.js";

class DBClient {
  async connect() {
    throw new CustomError(500, "Connect method not implemented in sub class");
  }

  async disconnect() {
    throw new CustomError(
      500,
      "Disconnect method not implemented in sub class"
    );
  }
}

export default DBClient;
