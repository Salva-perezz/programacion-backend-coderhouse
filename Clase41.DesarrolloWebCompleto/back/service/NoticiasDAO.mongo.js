import CustomError from "../classes/CustomError.class.js";
import DAO from "../classes/DAO.class.js";
import MongoClient from "../classes/MongoClient.class.js";
import Noticia from "../models/noticia.model.js";

let instance;

class NoticiasDAOMongo extends DAO {
  constructor() {
    super();
    this.collection = Noticia;
    this.db = new MongoClient();
  }

  async getAll() {
    try {
      await this.db.connect();

      const response = await this.collection.find();

      return response;
    } catch (err) {
      throw new CustomError(500, err);
    } finally {
      await this.db.disconnect();
    }
  }

  async getOne(id) {
    try {
      const response = await this.collection.findById({ _id: id });

      return response;
    } catch (err) {
      throw new CustomError(500, err);
    } finally {
      await this.db.disconnect();
    }
  }

  async create(noticia) {
    try {
      console.log(noticia);
      const nuevaNoticia = new this.collection(noticia);

      await nuevaNoticia.save();

      return response;
    } catch (err) {
      console.log(err);
      throw new CustomError(500, err);
    } finally {
      await this.db.disconnect();
    }
  }

  static getInstance() {
    if (!instance) instance = new NoticiasDAOMongo();

    return instance;
  }
}

export default NoticiasDAOMongo;
