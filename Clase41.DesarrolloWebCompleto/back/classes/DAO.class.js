import CustomError from "./CustomError.class.js";

class DAO {
  async getAll() {
    throw new CustomError(500, "Falta implementar getAll en sub clase");
  }

  async getOne() {
    throw new CustomError(500, "Falta implementar getOne en sub clase");
  }

  async create() {
    throw new CustomError(500, "Falta implementar create en sub clase");
  }

  async update() {
    throw new CustomError(500, "Falta implementar update en sub clase");
  }

  async delete() {
    throw new CustomError(500, "Falta implementar delete en sub clase");
  }

  async deleteAll() {
    throw new CustomError(500, "Falta implementar deleteAll en sub clase");
  }
}

export default DAO;
