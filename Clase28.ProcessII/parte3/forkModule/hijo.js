process.on("message", (msg) => {
  console.log("Mensaje de padre:", msg);
  process.send("mundo!");
  process.exit();
});

process.send("listo");
