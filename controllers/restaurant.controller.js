const mongoose = require("mongoose");
const Restaurant = require('../models/restaurant.model');


module.exports.list = (req, res, next) => {
  Restaurant.find()
  .limit(12)
  .then((restaurants) => res.render('restaurants/list', { restaurants }))
  .catch((error) => next(error));
};

module.exports.detail = (req, res, next) => {
  Restaurant.findById(req.params.id)
  .then((restaurant) => {
    if (restaurant) {
      res.render('restaurants/detail', { restaurant });
    } else {
      res.redirect('/restaurants');
    }
  })
  .catch((error) => next(error));
};

module.exports.create = (req, res, next) => {
  res.render('restaurants/new')
};

module.exports.doCreate = (req, res, next) => {
/* aquí la información del form la recibimos nosotros para crear el restaurant */
}
