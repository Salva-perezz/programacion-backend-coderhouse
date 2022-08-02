import express, { json } from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(json());
app.use(cookieParser("salva"));

app.post("/cookies", (req, res) => {
  const { cookieName, cookieValue, cookieTime } = req.body;

  if (!cookieName || !cookieValue || typeof cookieName != "string") {
    res.status(400).json({ error: "falta nombre ó valor" });
  }

  const cookieOptions = cookieTime ? { maxAge: Number(cookieTime) } : {};

  res.cookie(cookieName, cookieValue, cookieOptions).json({ proceso: "ok" });
});

app.get("/cookies", (req, res) => {
  res.json(req.cookies);
});

app.delete("/cookies/:cookieName", (req, res) => {
  res
    .clearCookie(req.params.cookieName)
    .send(`Cookie with name ${req.params.cookieName} deleted!`);
});

app.listen(3000, () => {
  console.log("Servidor escuchando puerto 3000");
});
