import express, { application, json } from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

const app = express();
const numbers = [];

app.use(json());

const options = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "Express API Operaciones",
      description: "API de operaciones documentada",
    },
  },
  apis: ["./docs/**/*.yaml"],
};

const swaggerSpecs = swaggerJSDoc(options);

app.get("/", (req, res) => {
  res.send("Ruta base API");
});

app.post("/number", (req, res) => {
  const { number } = req.body;

  numbers.push({ id: numbers.length - 1, number });
  res.send(`Numer ${number} guardado!`);
});

app.get("/number", (req, res) => {
  res.json({ numbers });
});

app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

app.listen(3000, () => {
  console.log("Server listening port 3000");
});
