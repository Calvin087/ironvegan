const mongoose = require("mongoose");
const Restaurant = require('../models/restaurant.model');
require("../models/comments.model");


module.exports.list = (req, res, next) => {
  Restaurant.find()
  .limit(12)
  .then((restaurants) => res.render('restaurants/list', { restaurants }))
  .catch((error) => next(error));
};

module.exports.detail = (req, res, next) => {
  Restaurant.findById(req.params.id)
  .populate("comments")
  .then((restaurant) => {
    console.log("********************* ", restaurant)
    if (restaurant) {
      res.render('restaurants/detail', { restaurant });
    } else {
      res.redirect('/restaurants');
    }
  })
  .catch((error) => next(error));
};
