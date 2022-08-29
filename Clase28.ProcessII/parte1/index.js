const util = require("util");
/*
console.log(`
    Directorio actual de trabajo: ${process.cwd()}
    ID del proceso: ${process.pid}
    Version de Node: ${process.version}
    Titulo del proceso: ${process.title}
    Sitema operativo: ${process.platform}
    Uso de la memoria: ${util.inspect(process.memoryUsage(), {
      showHidden: false,
      depth: null,
      colors: true,
    })}
`);

process.on("exit", (exitCode) => {
  console.log("exit code:", exitCode);
});

process.exit(7);


process.on("uncaughtException", (err) => {
  console.error(err.message);
});

console.log("Arranque ejecucion");

setTimeout(console.log, 2000, "Hola");

cualquiera();

*/

function logear(algo) {
  process.stdout.write(algo);
}

logear("Pepep la rana");
