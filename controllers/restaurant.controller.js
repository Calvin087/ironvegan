const mongoose = require("mongoose");
const Restaurant = require("../models/restaurant.model");
const categories = Object.keys(require("../data/categories.json"));

module.exports.list = (req, res, next) => {
  Restaurant.find()
    .limit(12)
    .then((restaurants) => res.render("restaurants/list", { restaurants }))
    .catch((error) => next(error));
};

module.exports.detail = (req, res, next) => {
  Restaurant.findById(req.params.id)
    .then((restaurant) => {
      if (restaurant) {
        res.render("restaurants/detail", { restaurant });
      } else {
        res.redirect("/restaurants");
      }
    })
    .catch((error) => next(error));
};

module.exports.create = (req, res, next) => {
  res.render('restaurants/new', {
    categories: categories
  });
};

module.exports.doCreate = (req, res, next) => {
  /* aquí la información del form la recibimos nosotros para crear el restaurant */
  const restaurantCategories = req.body.categories;
  
  /* este método comprueba si en el body llega String o Array y si es String, lo convierte en Array, que es lo que se espera */
  if (restaurantCategories && !Array.isArray(restaurantCategories)) {
    restaurantCategories = [restaurantCategories]
  }

  const restaurant = new Restaurant({
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    website: req.body.website,
    schedule: req.body.schedule,
    dishType: req.body.dishType,
    veganOptions: req.body.veganOptions,
    description: req.body.description,
    fullVegan: req.body.fullVegan,
    takeOut: req.body.takeOut,
    categories: restaurantCategories,
    image: req.body.image || undefined
  });
};
