const mongoose = require("mongoose");

const Restaurant = require("../models/restaurant.model");
require("../models/comments.model");
require("../models/avocado.model");

const categories = require("../data/categories.json");
const mailer = require("../config/mailer.config");

module.exports.list = (req, res, next) => {
  Restaurant.find()
    .limit(12)
    .then((restaurants) => res.render("restaurants/list", { restaurants }))
    .catch((error) => next(error));
};

module.exports.detail = (req, res, next) => {
  Restaurant.findById(req.params.id)
    .populate("comments")
    .populate("avocados")
    .then((restaurant) => {
      console.log(restaurant);
      if (restaurant) {
        res.render("restaurants/detail", {
          restaurant,
          avocados: restaurant.avocados.length, // we just want the number of avocados.
        });
      } else {
        res.redirect("/restaurants");
      }
    })
    .catch((error) => next(error));
};

module.exports.create = (req, res, next) => {
  res.render("restaurants/new", {
    categories,
  });
};

module.exports.doCreate = (req, res, next) => {
  /* aquí la información del form la recibimos nosotros para crear el restaurant */
  const {
    name,
    address,
    phone,
    website,
    schedule,
    dishType,
    veganOptions,
    description,
    fullVegan,
    takeOut,
    image,
  } = req.body;

  /* este método comprueba si en el body llega String o Array y si es String, lo convierte en Array, que es lo que se espera */
  let restaurantCategories = req.body.categories;

  if (restaurantCategories && !Array.isArray(restaurantCategories)) {
    restaurantCategories = [restaurantCategories];
  }

  let restaurant = {
    name,
    address,
    phone,
    website,
    schedule,
    dishType,
    veganOptions,
    description,
    fullVegan,
    takeOut,
    categories: restaurantCategories,
  };

  mailer.sendRecommendation(restaurant);
  res.redirect("/restaurants");
};
