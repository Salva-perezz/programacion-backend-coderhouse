import express from "express";
import { graphqlHTTP } from "express-graphql";

import RecordatorioController from "./src/controllers/Recordatorio.controller.js";
import RecordatorioSchema from "./src/graphql/Recordatorio.schema.js";

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: RecordatorioSchema,
    rootValue: {
      getRecordatorios: RecordatorioController.getRecordatorios,
      createRecordatorio: RecordatorioController.createRecordatorio,
      marcarLeidoRecordatorio: RecordatorioController.marcarLeidoRecordatorio,
      deleteRecordatoriosLeidos:
        RecordatorioController.deleteRecordatoriosLeidos,
    },
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log(`Servidor corriendo en puerto: http://localhost:${PORT}`);
});
