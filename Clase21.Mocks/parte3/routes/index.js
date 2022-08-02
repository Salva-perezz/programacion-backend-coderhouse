import { Router } from "express";
import ApiData from "../contenedor/index.js";

const router = Router();

const ApiMocks = new ApiData();

router.route("/usuarios/popular").post((req, res, next) => {
  try {
    const cantidad = req.query.cant ? Number(req.query.cant) : 50;

    ApiMocks.populate(cantidad);

    res.status(201).send("Data inserted!");
  } catch (err) {
    next({ message: err.message, statusCode: 500 });
  }
});

router
  .route("/usuarios/:id?")
  .get((req, res, next) => {
    try {
      const id = req.params.id ? Number(req.params.id) : null;

      const response = ApiMocks.list(id);

      res.json(response);
    } catch (err) {
      console.log(err);
      next({ message: err.message, statusCode: 500 });
    }
  })
  .put((req, res) => {
    ApiMocks.updateOne(Number(req.params.id), req.body);

    res.sendStatus(200);
  })
  .delete((req, res) => {
    ApiMocks.deleteOne(Number(req.params.id));

    res.sendStatus(200);
  });

router.route("/usuarios").post((req, res) => {
  ApiMocks.addOne(req.body);

  res.sendStatus(201);
});

export default router;
