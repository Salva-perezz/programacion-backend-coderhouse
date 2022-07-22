import admin from "firebase-admin";

import serviceAccount from "./llave.json" assert { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

console.log("Conexion establecida");

const main = async () => {
  const db = admin.firestore();
  const Users = db.collection("users");

  try {
    // CREATE
    // const user = Users.doc();
    // await user.create({ nombre: "Martina", apellido: "Ramirez" });
    // const user2 = Users.doc();
    // await user2.create({ nombre: "Josefina", apellido: "Martinez" });
    // const user3 = Users.doc();
    // await user3.create({ nombre: "Martin", apellido: "Zeballos" });
  } catch (err) {
    console.log(err);
  }

  try {
    // READ
    const usersSnapshot = await Users.get();
    const users = usersSnapshot.docs;

    const response = users.map((user) => ({
      id: user.id,
      nombre: user.data().nombre,
      apellido: user.data().apellido,
    }));
    console.log(response);

    const document = Users.doc("0te1HveYftzaOqW29RFB");
    const martinDoc = await document.get();
    const responseMartin = martinDoc.data();

    console.log("responseMartin 🥳", responseMartin);
  } catch (err) {
    console.log(err);
  }

  try {
    //UPDATE
    const document = Users.doc("WnG46no64PqANBzjG0Tn");
    const martinaUpdated = await document.update({ nombre: "Maria" });

    console.log(martinaUpdated);
  } catch (err) {
    console.log(err);
  }

  try {
    // DELETE
    const document = Users.doc("mqMXjh9RpA2Gs0VdSKjk");
    const deletedJosefina = await document.delete();

    console.log(deletedJosefina);
  } catch (err) {
    console.log(err);
  }
};

main();
