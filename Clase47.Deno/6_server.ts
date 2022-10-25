import express from "npm:express";

const app = express();

app.listen(3000, () => {
  console.log("Server listening http://127.0.0.1:3000");
});
