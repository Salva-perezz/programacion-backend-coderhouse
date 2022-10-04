import NoticiasDAOMongo from "../service/NoticiasDAO.mongo.js";

class NoticiaDAOFactory {
  static getDao() {
    if (process.argv[2] === "MONGO") return NoticiasDAOMongo.getInstance();
  }
}

export default NoticiaDAOFactory;
