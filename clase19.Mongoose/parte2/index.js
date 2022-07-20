import mongoose from "mongoose";
import estudiante from "./models/estudiante.js";

const sacarPromedio = (estudiantes) => {
  let total = 0;
  estudiantes.forEach((estudiante) => {
    total += estudiante.nota;
  });

  return total / estudiantes.length;
};

const main = async () => {
  const URL = "mongodb://localhost:27017/colegio";
  await mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("Conexion establecida con la DB");
  /*
    INICIO PARTE 1
    await estudiante.insertMany([
        { nombre: 'Pedro', apellido: 'Mei', edad: 21, dni: '31155898', curso: '1A', nota: 7 },
        { nombre: 'Ana', apellido: 'Gonzalez', edad: 32, dni: '27651878', curso: '1A', nota: 8 },
        { nombre: 'José', apellido: 'Picos', edad: 29, dni: '34554398', curso: '2A', nota: 6 },
        { nombre: 'Lucas', apellido: 'Blanco', edad: 22, dni: '30355874', curso: '3A', nota: 10 },
        { nombre: 'María', apellido: 'García', edad: 36, dni: '29575148', curso: '1A', nota: 9 },
        { nombre: 'Federico', apellido: 'Perez', edad: 41, dni: '320118321', curso: '2A', nota: 5 },
        { nombre: 'Tomas', apellido: 'Sierra', edad: 19, dni: '38654790', curso: '2B', nota: 4 },
        { nombre: 'Carlos', apellido: 'Fernández', edad: 33, dni: '26935670', curso: '3B', nota: 2 },
        { nombre: 'Fabio', apellido: 'Pieres', edad: 39, dni: '4315388', curso: '1B', nota: 9 },
        { nombre: 'Daniel', apellido: 'Gallo', edad: 25, dni: '37923460', curso: '3B', nota: 2 }
    ]
    )
    FIN PARTE 1  
*/
  /* INICIO PARTE 2
  const estudiantesOrdenados = await estudiante.find().sort({nombre: 1})
  console.log(estudiantesOrdenados)

  const estudianteMasJoven = await estudiante.find().sort({ edad: 1 }).limit(1)
  console.log('MAS JOVEN:', estudianteMasJoven)

  const segundoEstudianteMasJoven = await estudiante.find().sort({ edad: 1 }).skip(1).limit(1)
  console.log('SEGUNDO MAS JOVE:', segundoEstudianteMasJoven)

  const nombreYapellido = await estudiante.find({}, {_id: 0, nombre: 1, apellido: 1, curso: 1}).sort({apellido: -1})
  console.log('ORDENADOS:', nombreYapellido)

  const estudiantesDiez = await estudiante.find({nota: 10})
  console.log('DIEZ:', estudiantesDiez)

  console.log('PREMODIOS TOTAL', sacarPromedio(estudiantesOrdenados))

  const estudiantes1A = await estudiante.find({curso: '1A'})
  console.log('PREMODIOS A1', sacarPromedio(estudiantes1A))
FIN PARTE 2
*/
  /* INICIO PARTE 3
  estudiante.updateOne(
    { $and: [{ nombre: "Lucas" }, { apellido: "Blanco" }] },
    {
      $set: { dni: "20355875" },
    }
  );

  const estudiantes = await estudiante.find();
  console.log(estudiantes);

  await estudiante.updateMany({ curso: "1A" }, { $set: { ingreso: true } });

  const aprobados = await estudiante.find(
    { nota: { $gte: 4 } },
    { _id: 0, __v: 0 }
  );
  console.log(aprobados);

  const ingresados = await estudiante.find(
    { ingreso: true },
    { _id: 0, __v: 0 }
  );
  console.log("INGRESADOS:", ingresados);

  await estudiante.deleteMany({ ingreso: true });

  const updatedEstudiantes = await estudiante.find({}, { __v: 0 });
  updatedEstudiantes.forEach((estudiante) => {
    console.log(estudiante, "TIMESTAMP:", estudiante._id.getTimestamp());
  });
  FIN PARTE 3
  */
};

main();
