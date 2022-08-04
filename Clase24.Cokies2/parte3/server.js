import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import MongoStore from "connect-mongo";

const app = express();
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };

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
    cookie: {
      maxAge: 5000,
    },
  })
);

app.get("/", (req, res) => {
  req.session.user = req.query.user;

  res.send("Todo ok!");
});

app.get("/getSession", (req, res) => {
  res.json(req.session);
});

app.listen(3000, () => {
  console.log("Oki!");
});
