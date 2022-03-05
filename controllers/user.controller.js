const { localsAsTemplateData } = require("hbs");
const mongoose = require("mongoose");
const Avocado = require("../models/avocado.model");
const Restaurant = require("../models/restaurant.model");
const Comment = require("../models/comments.model");

module.exports.profile = async (req, res, next) => {
  const userDetails = res.locals.currentUser;

  const comments = await Comment.find({ user: userDetails._id }).populate('restaurant');
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
  const restId = req.params.id;
  const userId = res.locals.currentUser.id;

  if(userId) {
    Avocado.findOneAndDelete({ restaurant: restId, user: userId })
    .then((deletedAvocado) => {
      if (deletedAvocado) {
        res.status(200).send({ success: "Avocado removed from DDBB" });
      } else {
        return Avocado.create({ restaurant: restId, user: userId }).then(
          (createdAvocado) => {
            res.status(201).send({ success: "Avocado added to DDBB" });
          }
        );
      }
    })
    .catch(next);
  }

  
};
