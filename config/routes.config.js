const express = require("express");
const router = express.Router();
const misc = require("../controllers/misc.controller");
const restaurants = require("../controllers/restaurant.controller");
const user = require("../controllers/user.controller");

const auth = require("../controllers/auth.controller");

const passport = require("passport");

// const SCOPES []

// TODO
// const authmiddleware = require("../middlewares/auth.middleware");
// authmiddleware?

// MISC ROUTES
router.get("/"); // homepage

// RESTAURANTS
router.get("/restaurants"); // view -> all restaurants
router.get("/restaurants/:id"); // views detail

// SHOPS FOOD -> TO DO

// OTHER LOCATIONS MISC -> TO DO

// USER
router.get("/profile"); // view profile
router.get("/profile/edit"); // view -> EDIT

router.post("/profile/edit"); // view -> send CHANGES to db

// REGISTER
router.get("/register"); // views -> create account
router.post("/register"); // db create account

// ACTIVATE
router.get("/activate/:token");

// LOGIN
router.get("/login"); // views -> log in
router.post("/login"); // send email & password to db

router.get("/login/google"); // needs passport middleware
router.get("/auth/google/callback");

router.get("/logout"); // should be post??

// COMMENTS
router.get("/comment/new"); // view -> create review
router.get("/comment/:id/edit"); // view for a review EDIT

router.post("/comment"); // send NEW review to db
router.post("/comment/:id/edit"); // send review CHANGES to db
router.post("/comment/:id/delete"); // DELETE review from db

// AVOCADO RATING
router.post("/avocado"); // send NEW / CHANGE rating in db (if exists, change num - doesn't exist add num)

// RESEVATIONS TODO

module.exports = router;
