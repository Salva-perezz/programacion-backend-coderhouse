import express from "express";
import session from "express-session";

const app = express();

app.use(
  session({
    secret: "Salvaaaa",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  if (req.session.contador) {
    const mensaje = req.session.username
      ? `${req.session.username} has visitado la pagina ${req.session.contador} veces`
      : `Usted has visitado la pagina ${req.session.contador} veces`;
    req.session.contador++;
    return res.send(mensaje);
  }
  req.session.contador = 1;
  req.session.username = req.query.username ? req.query.username : null;
  const mensaje = req.query.username
    ? `Te damos la bienvenida ${req.query.username}`
    : "Te damos la bienvenida";

  res.send(mensaje);
});

app.get("/olvidar", (req, res) => {
  const mensaje = req.session.username
    ? `Hasta luego ${req.session.username}`
    : "Hasta luego!";
  req.session.destroy((err) => {
    if (err) {
      return res.json({ status: "Error", body: err });
    }

    res.send(mensaje);
  });
});

app.listen(3000, () => {
  console.log("Servidor escuchando puerto 3000");
});
