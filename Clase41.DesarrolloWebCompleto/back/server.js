import express, { json } from "express";
import cors from "cors";
import RouterNoticia from "./routes/noticia.route.js";

const app = express();
const noticiaRoutes = new RouterNoticia();

app.use(json());
app.use(
  cors({
    origin: "http://localhost:3001",
    methods: ["GET", "POST"],
  })
);

app.use("/api/noticia", noticiaRoutes.start());

app.listen(3000, () => {
  console.log("Server listening port 3000");
});
