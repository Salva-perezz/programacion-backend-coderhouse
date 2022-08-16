const express = require("express");
const path = require("path");
const jwt = require("jsonwebtoken");

const app = express();
const users = [];
const blackListToken = [];
const PRIVATE_KEY = "salva";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/login.html"));
});

function generateToken(user) {
  const token = jwt.sign({ data: user }, PRIVATE_KEY, { expiresIn: "30m" });
  return token;
}

function authMiddleware(req, res, next) {
  const authToken = req.headers.authorization;

  console.log("authToken", authToken);
  if (!authToken) {
    return res.status(401).redirect("/login");
  }

  const token = authToken.split(" ")[1];
  const blackListedToken = blackListToken.find(
    (blackListToken) => token === blackListToken
  );

  if (blackListedToken) {
    return res.status(401).redirect("/login");
  }

  jwt.verify(token, PRIVATE_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).redirect("/login");
    }

    req.user = decoded.data;
    next();
  });
}

app.get("/", authMiddleware, (req, res) => {
  res.json(req.user);
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => user.username === username);

  if (!user || user.password !== password) {
    res.json({ error: true, message: "Invalid credentials" });
  }

  const authToken = generateToken(user);

  res.json({ authToken });
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/register.html"));
});

app.post("/register", (req, res) => {
  const { username } = req.body;
  const existingUser = users.find((user) => user.username === username);

  if (existingUser) {
    return res.json({ error: true, message: "User already exists" });
  }

  users.push(req.body);

  res.json(req.body);
});

app.get("/logout", authMiddleware, (req, res) => {
  const authToken = req.headers.authorization;
  const token = authToken.split(" ")[1];

  blackListToken.push(token);

  res.send("Bye bye");
});

app.listen(3000, () => {
  console.log("Servidor escuchando puerto 3000");
});
