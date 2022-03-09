const mongoose = require("mongoose");

const Restaurant = require("../models/restaurant.model");
const Avocado = require("../models/avocado.model");

require("../models/comments.model");
require("../models/avocado.model");

const categories = require("../data/categories.json");
const mailer = require("../config/mailer.config");
const categoriesAll = require("../data/categoriesAll.json");

const { calculatePagination } = require("../utils/calculatePagination");

module.exports.list = async (req, res, next) => {
  let { page = 1 } = req.query;
  let limit = 12;

  const userDetails = res.locals.currentUser
    ? res.locals.currentUser
    : undefined;

  let avocados;
  if (userDetails != undefined) {
    avocados = await Avocado.find({ user: userDetails._id });
  }

  try {
    const max = Math.ceil(212 / limit);

    if (page > max) {
      res.redirect("/restaurants");
    }

    const restaurants = await Restaurant.find()
      .limit(limit * 1)
      .skip((Number(page) - 1) * limit)
      .exec();

    const count = await restaurants.length;

    let pagination = await calculatePagination(page, count, limit, max);

    res.render("restaurants/list", {
      restaurants,
      pagination,
      categoriesAll,
      avocados,
    });
  } catch (err) {
    console.error(err.message);
  }
};

module.exports.detail = (req, res, next) => {
  Restaurant.findById(req.params.id)
    .populate("comments")
    .populate("avocados")
    .then((restaurant) => {
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

module.exports.filter = async (req, res, next) => {
  let { category } = req.params;

  category = category.split(" ")[0];

  const userDetails = res.locals.currentUser
    ? res.locals.currentUser
    : undefined;

  let avocados;
  if (userDetails != undefined) {
    avocados = await Avocado.find({ user: userDetails._id });
  }

  Restaurant.find({ categories: category })
    .then((restaurants) =>
      res.render("restaurants/list", { restaurants, avocados, categoriesAll })
    )
    .catch((error) => next(error));
};
