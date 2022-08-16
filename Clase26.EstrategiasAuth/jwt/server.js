const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const users = [];
const PORT = 3000;
const PRIVATE_KEY = "coderhouse";

app.use(express.json());

function generateToken(user) {
  const token = jwt.sign({ data: user }, PRIVATE_KEY, { expiresIn: "30m" });
  return token;
}

function authMiddleware(req, res, next) {
  const authToken = req.headers.authorization;
  console.log("authToken", authToken);
  if (!authToken) {
    res.status(401).json({ error: true, message: "Not authenticated" });
  }

  const token = authToken.split(" ")[1];

  jwt.verify(token, PRIVATE_KEY, (err, decoded) => {
    if (err) {
      res.status(401).json({ error: true, message: "Not authorized" });
    }

    req.user = decoded.data;
    next();
  });
}

app.post("/register", (req, res) => {
  const { username } = req.body;
  const existingUser = users.find((user) => user.username === username);

  if (existingUser) {
    return res.json({ error: true, message: "User already exists" });
  }

  users.push(req.body);

  res.json(req.body);
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username);

  if (!user || user.password != password) {
    return res.json({ error: true, message: "Invalid credentials" });
  }

  const authToken = generateToken(user);

  res.json({ authToken });
});

app.get("/datos", authMiddleware, (req, res) => {
  const user = users.find((user) => user.username === req.user.username);

  res.json(user);
});

const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
server.on("error", (error) => console.log(`Error en servidor: ${error}`));
