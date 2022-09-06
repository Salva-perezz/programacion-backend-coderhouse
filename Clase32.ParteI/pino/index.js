import pino from "pino";

const logger = pino();

logger.info("Pino info");
logger.error("Pino error");
const dato = { saludo: "hola" };
logger.info("La respuesta es %j", dato);

logger.info({ a: 42 }, "Hola mundo");
logger.info({ a: 42, b: 2 }, "Hola mundo");
logger.info({ c: { a: 42, b: 2 } }, "Hola mundo");

const child = logger.child({ a: "property" });
child.info("Hola child info");
child.info("Hola child info 2");
child.error("Hola child error");
