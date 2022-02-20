const express = require("express");
const router = express.Router();

const misc = require("../controllers/misc.controller");
const restaurants = require("../controllers/restaurant.controller");
const user = require("../controllers/user.controller");
const auth = require("../controllers/auth.controller");
const comments = require("../controllers/comments.controller");

const passport = require("passport");

// const SCOPES []

// TODO
// AUTHENTICATION

// TODO
// const authmiddleware = require("../middlewares/auth.middleware");
// authmiddleware?

// MISC ROUTES
router.get("/", misc.home); // homepage

// RESTAURANTS
router.get("/restaurants", restaurants.list); // view -> all restaurants
router.get("/restaurants/:id", restaurants.detail); // views detail

// SHOPS FOOD -> TO DO

// OTHER LOCATIONS MISC -> TO DO

// USER
router.get("/profile", user.profile); // view profile
router.get("/profile/edit", user.edit); // view -> EDIT

router.post("/profile/edit", user.doEdit); // view -> send CHANGES to db

// AVOCADO RATING
router.post("/avocado", user.doAvocado); // send NEW / CHANGE rating in db (if exists, change num - doesn't exist add num)

// REGISTER
router.get("/register", auth.register); // views -> create account
router.post("/register", auth.doRegister); // db create account

// ACTIVATE
router.get("/activate/:token", auth.activate);

// LOGIN
router.get("/login", auth.login); // views -> log in
router.post("/login", auth.doLogin); // send email & password to db

router.get("/login/google"); // needs passport middleware TODO
router.get("/auth/google/callback", auth.doLoginGoogle);

router.get("/logout", auth.logout); // should be post??

// COMMENTS
router.get("/comment/new", comments.create); // view -> create review
router.get("/comment/:id/edit", comments.edit); // view for a review EDIT

router.post("/comment", comment.doCreate); // send NEW review to db
router.post("/comment/:id/edit", comments.doEdit); // send review CHANGES to db
router.post("/comment/:id/delete", comments.delete); // DELETE review from db

// RESEVATIONS TODO

module.exports = router;
