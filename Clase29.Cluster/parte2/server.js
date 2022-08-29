import express from "express";
import cluster from "cluster";
import os from "os";

const app = express();
const PORT = process.argv[2] || 8080;
const cpus = os.cpus();

if (cluster.isPrimary) {
  console.log(`Procesors ${cpus.length}`);
  console.log(`PID Primary ${process.pid}`);

  cpus.map(() => {
    cluster.fork();
  });

  cluster.on("exit", (worker) => {
    console.log(
      `Wroker whit PID ${
        worker.process.pid
      } died, Date: ${new Date().toLocaleDateString()}`
    );

    cluster.fork();
  });
} else {
  app.get("/", (req, res) => {
    res.send(
      `Servidor express en ${PORT} - PID ${
        process.pid
      } - ${new Date().toLocaleDateString()}`
    );
  });

  app.listen(PORT, () => {
    console.log(
      `Server listening on port ${PORT} - Process ID: ${process.pid}`
    );
  });
}
