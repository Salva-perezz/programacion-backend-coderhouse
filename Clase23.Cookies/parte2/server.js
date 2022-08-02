import express from "express";
import session from "express-session";

const app = express();

function auth(req, res, next) {
  console.log(req.session);
  if (req.session.user === "salva" && req.session.admin) {
    return next();
  }

  return res.status(401).send("You dont have permission to visit this page");
}

app.use(
  session({
    secret: "Coderhouse",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/con-session", (req, res) => {
  if (req.session.contador) {
    req.session.contador++;
    res.send(`Usted ha visitado el sitio ${req.session.contador} veces`);
  } else {
    req.session.contador = 1;
    res.send("Bienveni@");
  }
});

app.get("/login", (req, res) => {
  const { username, password } = req.query;

  if (username !== "salva" || password !== "salva123") {
    return res.send("Invalid credentials");
  }

  req.session.user = username;
  req.session.admin = true;

  res.send("Loged in!");
});

app.get("/privado", auth, (req, res) => {
  res.send("Si estas viendo esto es por que estras logeado");
});

app.get("/logout", auth, (req, res) => {
  req.session.destroy((err) => {
    if (!err) {
      return res.send("Loged out!");
    }

    res.json({ status: "Logout error", body: err });
  });
});

app.listen(3000, () => {
  console.log("Servidor escuchando puerto 3000");
});
