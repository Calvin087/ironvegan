const express = require("express");
const router = express.Router();
const misc = require("../controllers/misc.controller");
const restaurants = require("../controllers/restaurant.controller");
const user = require("../controllers/user.controller");

const auth = require("../controllers/auth.controller");

const passport = require("passport");

// const SCOPES []

// MISC ROUTES
router.get("/", misc.home);

// TODO
// const authmiddleware = require("../middlewares/auth.middleware");

// express
// router
// controllers
// passport
// authmiddleware?

// ROUTERS
// =================
// GET - home DONE
// GET - restaurants
// GET - restaurantsDetail
// GET - profilePage <-- show most recent comments?
// GET - register
// GET - login
// GET - socialLogin
// GET - activate

// =================

// POST - addAvacadoRating <-- just a number rating
// POST - editAvacadoRating

// POST - addComment <-- upload images, write text
// POST - editComment

// POST - register
// POST - login
// POST - editProfilePage

// =================

// export all routers
