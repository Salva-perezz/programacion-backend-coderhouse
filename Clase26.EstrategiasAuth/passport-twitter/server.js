require("dotenv").config();

const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const passport = require("passport");
const TwitterStrategy = require("passport-twitter").Strategy;

const app = express();
const CLIENT_KEY = process.env.CLIENT_KEY;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const PORT = 3000;

app.use(
  session({
    secret: "CODERHOUSE",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000,
    },
  })
);

app.engine(".hbs", exphbs({ extname: ".hbs", defaultLayout: "main.hbs" }));
app.set("view engine", ".hbs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(passport.initialize());
app.use(passport.session());

const strategy = new TwitterStrategy(
  {
    consumerKey: CLIENT_KEY,
    consumerSecret: CLIENT_SECRET,
    callbackURL: "/auth/twitter/callback",
  },
  (token, tokenSecret, userProfile, done) => {
    console.log(userProfile);
    done(null, userProfile);
  }
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(strategy);

app.get("/", (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect("/datos");
  } else {
    res.redirect("/login");
  }
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.get("/auth/twitter", passport.authenticate("twitter"));

app.get(
  "/auth/twitter/callback",
  passport.authenticate("twitter", {
    successRedirect: "/",
    failureRedirect: "/faillogin",
  })
);

app.get("/faillogin", (req, res) => {
  res.render("login-error", {});
});

app.get("/datos", (req, res) => {
  if (req.isAuthenticated()) {
    if (!req.user.contador) req.user.contador = 0;
    req.user.contador++;
    res.render("datos", {
      nombre: req.user.displayName,
      username: req.user.username,
      foto: req.user.photos[0].value,
      contador: req.user.contador,
    });
  } else {
    res.redirect("/login");
  }
});

app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
server.on("error", (error) => console.log(`Error en servidor: ${error}`));
