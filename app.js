require("dotenv").config();
const bodyParser = require("body-parser");
const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");
const path = require("path");
const passport = require("passport");
const sessionConfig = require("./config/session.config");
const flash = require("connect-flash");

require("./config/db.config");
require("./config/hbs.config");
require("./config/passport.config");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(logger("dev"));
app.use(flash());

app.use(sessionConfig);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(passport.initialize());
app.use(passport.session());

 // TODO
 // need locals.currentUser for state
 app.use((req, res, next) => {
   res.locals.currentUser = req.user;
   res.locals.flashMessage = req.flash('flashMessage');
   next();
 });

const router = require("./config/routes.config");
app.use("/", router);

// ERROR HANDLING

app.use((req, res, next) => {
  next(createError(404, "Page not found"));
});

app.use((error, req, res, next) => {
  console.log(error);
  let status = error.status || 500;

  res.status(status).render("error", {
    message: error.message,
    error: req.app.get("env") === "development" ? error : {},
  });
});

// TODO
// Does this need to be different to 3000 when live?
const port = Number(process.env.PORT || 3000);

app.listen(port, () => {
  console.log(`App listen on port ${port}`);
});
