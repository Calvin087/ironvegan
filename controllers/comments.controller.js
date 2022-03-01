const mongoose = require("mongoose");
const upload = require("../config/storage.config");
const Comment = require("../models/comments.model");

// MODELS GO HERE
// PASSPORT
// MAILER...?

module.exports.create = (req, res, next) => {
  res.render('restaurants/detail')
};

module.exports.doCreate = (req, res, next) => {
  const { restaurant, user, rating, description } = req.body;
  const fileName = req.file.path;

  Comment.create({
    restaurant,
    user,
    rating,
    description,
    images: fileName, // filename from cloudinary
  })
    .then((newComment) => {
      res.redirect(`/restaurants/${restaurant}`);
    })
    .catch((error) => console.log(error));
};

module.exports.edit = (req, res, next) => {
  let user = req.user.id

  Comment.findById(req.params.id)
  .then((comment) => {
    if (user == comment.user) {
      console.log("You can edit your review");
      res.render("restaurants/updateComment", comment)
    } else {
      console.log("This is not your review")
      res.redirect(`/restaurants/${comment.restaurant}`);
    }
  })
  .catch((error) => console.log(error))
  
};

module.exports.doEdit = (req, res, next) => {
  const { id } = req.params;
  const { restaurant, user, rating, description } = req.body;

  let images;

  if (req.file) {
    images = req.file.path;
  } else {
    images = req.body.existingImage;
    console.log(images)
  }

  Comment.findByIdAndUpdate(id, { restaurant, user, rating, description, images }, { new: true })
    .then((comment) => {
       res.redirect(`/restaurants/${comment.restaurant}`);
    })
    .catch((error) => next(error))
};

module.exports.delete = (req, res, next) => {
  //
};
