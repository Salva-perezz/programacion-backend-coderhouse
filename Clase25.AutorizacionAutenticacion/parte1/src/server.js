const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();
const users = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: "coderhouse",
    resave: false,
    rolling: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000,
    },
  })
);
app.use(express.static(path.join(__dirname, "../public")));

function checkAuth(req, res, next) {
  if (req.session.user) {
    return next();
  }

  res.json({
    error: true,
    message: "you dont have permission to visit this page",
  });
}

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/login.html"));
});

app.post("/login", (req, res) => {
  const user = users.find((user) => user.username === req.body.username);

  if (!user || user.password !== req.body.password) {
    return res.json({ error: true, message: "Invalid credentials" });
  }

  req.session.user = user;

  res.redirect("/datos");
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/register.html"));
});

app.post("/register", (req, res) => {
  const existingUser = users.find(
    (user) => req.body.username === user.username
  );

  if (existingUser) {
    return res.json({ error: true, message: "User already exists" });
  }

  users.push(req.body);

  res.redirect("/login");
});

app.get("/datos", checkAuth, (req, res) => {
  res.json(req.session.user);
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.json({ error: true, message: "Error loging out" });
    }
    res.send("Bye bye");
  });
});

app.listen(3000, () => {
  console.log("Servidor escuchando puerto 3000");
});
