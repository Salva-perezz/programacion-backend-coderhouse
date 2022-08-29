const args = require("yargs")(process.argv.slice(2)).argv;

process.on("exit", (exitCode) => {
  console.log("Exit code", exitCode);
});

if (!args._.length) {
  console.log({
    error: {
      descripcion: "Entrada vacia",
    },
  });
  process.exit(-4);
}

let total = 0;
let max = 0;
let min = args._[0];
let error = false;
const dataTypes = [];

args._.map((number) => {
  if (typeof number === "number") {
    dataTypes.push(typeof number);
    total += number;

    if (number > max) {
      max = number;
    }

    if (number < min) {
      min = number;
    }
  } else {
    dataTypes.push(typeof number);
    error = true;
  }
});

const objectToLog = {
  numeros: args._,
  promedio: total / args._.length,
  max,
  min,
  ejecutable: args.$0,
  pid: process.pid,
};

if (error) {
  console.log({
    descripcion: "Error de tipo",
    numeros: args._,
    tipos: dataTypes,
  });

  process.exit(-5);
}

console.log(objectToLog);
