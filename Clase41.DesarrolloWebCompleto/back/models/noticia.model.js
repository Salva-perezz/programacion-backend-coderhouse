import { Schema, model } from "mongoose";

const noticiaSchema = new Schema({
  titulo: { type: String, required: true },
  cuerpo: { type: String, required: true },
  autor: { type: String, required: true },
  imagen: { type: String, required: true },
  email: { type: String, required: true },
  vista: { type: String, required: true },
});

const Noticia = model("noticia", noticiaSchema);

export default Noticia;
