import { Router } from "express";
import { faker } from "@faker-js/faker";

const router = Router();

faker.locale = "es";

router.route("/test").get((req, res) => {
  const cantidad = req.query.cant ? Number(req.query.cant) : 10;

  // CON if TRADICIONAL
  //   if (req.query.cant) {
  //     cantidad = Number(req.query.cant);
  //   } else {
  //     cantidad = 10;
  //   }

  const response = [];

  for (let i = 1; i <= cantidad; i++) {
    response.push({
      id: i,
      nombre: faker.name.firstName(),
      apellido: faker.name.lastName(),
      color: faker.color.human(),
    });
  }

  res.json(response);
});

export default router;
