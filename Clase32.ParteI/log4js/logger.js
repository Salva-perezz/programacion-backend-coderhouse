import dotenv from "dotenv";
import log4js from "log4js";

dotenv.config();

log4js.configure({
  appenders: {
    loggerConsole: { type: "console" },
    archivoErrores: { type: "file", filename: "errores.log" },
    archivoDebug: { type: "file", filename: "debug.log" },
    loggerArchivoErrores: {
      type: "logLevelFilter",
      appender: "archivoErrores",
      level: "error",
    },
    loggerArchivosDebug: {
      type: "logLevelFilter",
      appender: "archivoDebug",
      level: "debug",
    },
  },

  categories: {
    default: { appenders: ["loggerConsole"], level: "info" },
    prod: {
      appenders: ["loggerArchivoErrores", "loggerArchivosDebug"],
      level: "all",
    },
  },
});

let logger;

if (process.env.NODE_ENV.toUpperCase() === "PROD") {
  logger = log4js.getLogger("prod");
} else {
  logger = log4js.getLogger();
}

export default logger;
