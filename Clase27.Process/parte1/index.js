const parseArgs = require("minimist");
const args = parseArgs(process.argv.slice(2), {
  alias: { m: "modo", p: "puerto", d: "debug" },
  default: { modo: "prod", puerto: 0, debug: false },
});

console.log({
  modo: args.modo,
  puerto: args.puerto,
  debug: args.debug,
  otros: args._,
});
