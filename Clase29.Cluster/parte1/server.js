import express from "express";
import cluster from "cluster";
import os from "os";

const app = express();

const cpus = os.cpus();

app.get("/", (req, res) => {
  console.log(`Llevo request al worker ${process.pid}`);

  for (let index = 0; index < 1e9; index++) {}

  res.send("Todo ok");
  cluster.worker.kill();
});

if (cluster.isPrimary) {
  cpus.map(() => {
    cluster.fork();
  });

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker with ID ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  app.listen(3000, () => {
    console.log(`Servidor escuchando puerto 3000 - Worker: ${process.pid}`);
  });
}
