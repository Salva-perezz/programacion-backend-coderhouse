import Recordatorio from "../classes/recordatorio.class.js";
import crypto from "crypto";

const recordatorios = [];

const RecordatorioController = {
  getRecordatorios() {
    return recordatorios;
  },

  createRecordatorio({ datos }) {
    const id = crypto.randomBytes(10).toString("hex");
    const nuevoRecordatorio = new Recordatorio(id, datos);
    recordatorios.push(nuevoRecordatorio);
    return nuevoRecordatorio;
  },

  marcarLeidoRecordatorio({ id }) {
    const recordatorio = recordatorios.find((r) => r.id == id);
    if (!recordatorio) {
      throw new Error("Recordatorio not found");
    }
    recordatorio.leido = true;
    return recordatorio;
  },

  deleteRecordatoriosLeidos() {
    let i = 0;
    const deleted = [];
    while (i < recordatorios.length) {
      if (recordatorios[i].leido) {
        deleted.push(recordatorios.splice(i, 1)[0]);
      } else {
        i++;
      }
    }
    return deleted;
  },
};

export default RecordatorioController;
