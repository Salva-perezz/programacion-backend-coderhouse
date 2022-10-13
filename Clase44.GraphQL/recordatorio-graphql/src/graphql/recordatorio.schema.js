import { buildSchema } from "graphql";

const RecordatorioSchema = buildSchema(`
  input RecordatorioInput {
    titulo: String,
    descripcion: String,
    timestamp: Float
  }
  type Recordatorio {
    id: ID!
    titulo: String,
    descripcion: String,
    leido: Boolean,
    timestamp: Float
  }
  type Query {
    getRecordatorios: [Recordatorio],
  }
  type Mutation {
    createRecordatorio(datos: RecordatorioInput): Recordatorio
    marcarLeidoRecordatorio(id: ID!): Recordatorio,
    deleteRecordatoriosLeidos: [Recordatorio],
  }
`);

export default RecordatorioSchema;
