import NoticiaDAOFactory from "../classes/NoticiaDAOFactory.class.js";

const DAO = NoticiaDAOFactory.getDao();

class NoticiaController {
  async getNews(req, res) {
    try {
      const response = await DAO.getAll();

      res.json(response);
    } catch (err) {
      console.log(err);
      res.status(err.errorCode).send(err.message);
    }
  }

  async getNew(req, res) {
    try {
      const { id } = req.params;
      const response = await DAO.getOne(id);

      res.json(response);
    } catch (err) {
      res.status(err.errorCode).send(err.message);
    }
  }

  async createNew(req, res) {
    try {
      await DAO.create(req.body);

      res.json(true);
    } catch (err) {
      res.status(err.errorCode).send(err.message);
    }
  }
}

export default NoticiaController;
