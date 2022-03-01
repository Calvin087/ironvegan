const express = require("express");
const router = express.Router();
const upload = require("../config/storage.config");

const misc = require("../controllers/misc.controller");
const restaurants = require("../controllers/restaurant.controller");
const user = require("../controllers/user.controller");
const auth = require("../controllers/auth.controller");
const comments = require("../controllers/comments.controller");

const passport = require("passport");
const authMiddleware = require("../middlewares/auth.middleware");

const SCOPES = [
  "https://www.googleapis.com/auth/userinfo.profile",
  "https://www.googleapis.com/auth/userinfo.email",
];

// MISC ROUTES
router.get("/", misc.home); // homepage
router.get("/favicon.ico", misc.fav); // stops the annoying favicon 404 error

// RESTAURANTS
router.get("/restaurants", restaurants.list); // view -> all restaurants
router.get("/restaurants/new", restaurants.create); // render create new rest form
router.get("/restaurants/:id", restaurants.detail); // views detail
router.post("/restaurants/new", restaurants.doCreate); // send form info

// SHOPS FOOD -> TO DO

// OTHER LOCATIONS MISC -> TO DO

// USER
router.get("/profile", authMiddleware.isAuthenticated, user.profile); // view profile
router.get("/profile/edit", authMiddleware.isAuthenticated, user.edit); // view -> EDIT

router.post("/profile/edit", authMiddleware.isAuthenticated, user.doEdit); // view -> send CHANGES to db

// AVOCADO RATING
router.post("/avocado", authMiddleware.isAuthenticated, user.doAvocado); // send NEW / CHANGE rating in db (if exists, change num - doesn't exist add num)

// REGISTER
router.get("/register", authMiddleware.isNotAuthenticated, auth.register); // views -> create account
router.post("/register", auth.doRegister); // db create account

// ACTIVATE
router.get("/activate/:token", auth.activate);

// LOGIN
router.get("/login", authMiddleware.isNotAuthenticated, auth.login); // views -> log in
router.post("/login", authMiddleware.isNotAuthenticated, auth.doLogin); // send email & password to db

router.get(
  "/login/google",
  passport.authenticate("google-auth", { scope: SCOPES })
); // needs passport middleware TODO
router.get(
  "/auth/google/callback",
  authMiddleware.isNotAuthenticated,
  auth.doLoginGoogle
);

router.get("/logout", auth.logout); // should be post??

// COMMENTS

router.get("/comment/new", authMiddleware.isAuthenticated, comments.create); // view -> create review
router.get("/comment/:id/edit", authMiddleware.isAuthenticated, comments.edit); // view for a review EDIT

router.post(
  "/restaurants/:id",
  authMiddleware.isAuthenticated,
  upload.single("images"),
  comments.doCreate
); // send NEW review to db
router.post(
  "/comment/:id/edit",
  authMiddleware.isAuthenticated,
  upload.single("images"),
  comments.doEdit
); // send review CHANGES to db
router.post(
  "/comment/:id/delete",
  authMiddleware.isAuthenticated,
  comments.delete
); // DELETE review from db

// RESEVATIONS TODO

module.exports = router;
