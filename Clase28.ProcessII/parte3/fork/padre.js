const { fork } = require("child_process");

const forked = fork("hijo.js");

forked.on("message", (message) => {
  console.log("Mensaje del hijo:", message);
});

console.log("Comienzo del programa Padre");

setTimeout(() => {
  forked.send({ mensaje: "Hola!" });
}, 2000);
