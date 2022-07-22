import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  nombre: { type: String },
  apellido: { type: String },
  dni: { type: String },
});

const userModel = mongoose.model("usuario", userSchema);

export default userModel;
