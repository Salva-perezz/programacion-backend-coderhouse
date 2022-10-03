import express from "express";
import mongoose from "mongoose";
import routes from "./routes/index.js";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "pug");

app.use("/", routes);

mongoose
  .connect(
    "mongodb+srv://salvax:salva@cluster0.uriryq6.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Server connected with database");
    app.listen(3000, () => {
      console.log("Server listening port 3000");
    });
  })
  .catch((err) => {
    console.log(`Error while connection with database ${JSON.stringify(err)}`);
  });
