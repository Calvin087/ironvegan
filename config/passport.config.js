// passport middleware for login authentication
const passport = require("passport");

// strategies / Google / email password == local?
const LocalStrategy =  require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");

const User = require("../models/user.model");

passport.serializeUser((user, next) => {

})

passport.deserializeUser((id, next) => {

})

//LOGIN