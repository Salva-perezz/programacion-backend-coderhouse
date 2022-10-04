import { Router } from "express";
import NoticiaController from "../controller/noticia.controller.js";

const router = Router();

class RouterNoticia {
  constructor() {
    this.controller = new NoticiaController();
  }

  start() {
    router.get("/", this.controller.getNews);
    router.get("/:id", this.controller.getNew);
    router.post("/", this.controller.createNew);

    return router;
  }
}

export default RouterNoticia;
