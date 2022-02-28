const { localsAsTemplateData } = require("hbs");
const mongoose = require("mongoose");
const Comment = require("../models/comments.model");
const Avocado = require("../models/avocado.model");
const Restaurant = require("../models/restaurant.model");
// MODELS GO HERE

// MODELS GO HERE
// PASSPORT
// MAILER...?

module.exports.profile = async (req, res, next) => {
  const userDetails = res.locals.currentUser;

  const comments = await Comment.find({ user: userDetails._id });
  const avocados = await Avocado.find({ user: userDetails._id });
  const favouriteLocations = avocados.map((avocado) => {
    return avocado.restaurant;
  });
  Restaurant.find({ _id: favouriteLocations }).then((favourites) => {
    res.render("user/profile", { comments, favourites });
  });
};

module.exports.edit = (req, res, next) => {
  //
};

module.exports.doEdit = (req, res, next) => {
  //
};

module.exports.doAvocado = (req, res, next) => {
  //
};
