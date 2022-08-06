const MongoStore = require("connect-mongo");
const cookieParser = require("cookie-parser");
const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };

app.use(express.static(`${__dirname}/public`));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://salva:salva123@cluster0.5gbctuc.mongodb.net/?retryWrites=true&w=majority",
      mongoOptions,
    }),
    secret: "coderhouse",
    resave: false,
    saveUninitialized: false,
    rolling: true, // Reinicia el tiempo de expiracion con cada request
    cookie: {
      maxAge: 30000,
    },
  })
);

function authMiddleware(req, res, next) {
  if (req.session.username) {
    next();
  } else {
    res.redirect("/login");
  }
}

function loginMiddleware(req, res, next) {
  if (req.session.username) {
    res.redirect("/");
  } else {
    next();
  }
}

app.get("/", authMiddleware, (req, res) => {
  console.log("Hola");
  res.sendFile(path.join(__dirname, "/public/home.html"));
});

app.get("/login", loginMiddleware, (req, res) => {
  res.sendFile(path.join(__dirname, "./public/login.html"));
});

app.get("/api/login", async (req, res) => {
  try {
    console.log(req.query.username);
    req.session.username = req.query.username;

    res.redirect("/");
  } catch (err) {
    res.json({ error: true, message: err });
  }
});

app.listen(3000, () => {
  console.log("Servidor escuchando puerto 3000");
});
