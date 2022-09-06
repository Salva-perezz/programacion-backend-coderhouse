import express from "express";
import compression from "compression";
import config from "./config.js";

const app = express();
const mensaje = "Hola que tal".repeat(1000);

app.get("/saludogzip", compression(), (req, res) => {
  res.send(mensaje);
});

app.get("/saludo", (req, res) => {
  res.send(mensaje);
});

app.listen(3000, (error) => {
  if (error) {
    console.error("Hubo un error al levantar el server");
  } else {
    console.log("Servidor escuchando puerto 3000");
  }
});
