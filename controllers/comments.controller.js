const mongoose = require("mongoose");
const upload = require("../config/storage.config");
const Comment = require("../models/comments.model");

// MODELS GO HERE
// PASSPORT
// MAILER...?

module.exports.create = (req, res, next) => {
  //
};

module.exports.doCreate = (req, res, next) => {
  const { restaurant, user, rating, description } = req.body;
  const fileName = req.file.path;

  Comment.create({
    restaurant,
    user,
    rating,
    description,
    images: fileName,
  })
    .then((newComment) => {
      console.log(newComment);
      res.redirect(`/restaurants/${restaurant}`);
    })
    .catch((error) => console.log(error));
};

module.exports.edit = (req, res, next) => {
  Comment.findById(req.params.id)
  .then((comment) => {
    res.render("restaurants/updateComment", comment)
  })
  .catch((error) => console.log(error))
  
};

module.exports.doEdit = (req, res, next) => {
  //
};

module.exports.delete = (req, res, next) => {
  //
};
