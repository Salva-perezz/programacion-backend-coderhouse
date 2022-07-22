import mongoose from "mongoose";
import userModel from "./models/user.js";

const main = async () => {
  await mongoose.connect(
    "mongodb+srv://salvax:salva123@cluster0.oueiftt.mongodb.net/ecommerce?retryWrites=true&w=majority"
  );

  const users = await userModel.find();

  console.log("users 👻", users);

  const fede = new userModel({
    nombre: "Federico",
    apellido: "Perez",
    dni: "320118321",
  });
  await fede.save();
  console.log("Fede insertado");
};

main();
