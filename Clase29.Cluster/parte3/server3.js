import express from "express";

const app = express();
const PORT = process.argv[2] || 8083;

app.get("/", (req, res) => {
  res.send(
    `Servidor express <span style="color:red;">(forever)</span> en ${PORT} - <b>PID ${
      process.pid
    }</b> - ${new Date().toLocaleString()}`
  );
});

app.listen(PORT, (err) => {
  if (!err)
    console.log(
      `Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`
    );
});
