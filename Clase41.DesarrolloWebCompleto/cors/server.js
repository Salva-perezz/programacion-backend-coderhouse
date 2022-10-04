import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3001",
  })
);

app.get("/", (req, res) => {
  res.cookie("cookie", "hola", { httpOnly: true }).json({ saludo: "Hola" });
});

app.listen(3000, () => {
  console.log("Server listening port 3000");
});
