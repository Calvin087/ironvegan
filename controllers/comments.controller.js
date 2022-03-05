const mongoose = require("mongoose");
const { commentImages, userAvatars } = require("../config/storage.config");
const Comment = require("../models/comments.model");

// MODELS GO HERE
// PASSPORT
// MAILER...?

      
module.exports.create = (req, res, next) => {
  res.render("restaurants/detail");
};

module.exports.doCreate = (req, res, next) => {
  const { restaurant, user, rating, description } = req.body;
  let fileName;

  if (req.file?.path) {
    // if there is a file check the path
    fileName = req.file.path;
  } else {
    fileName =
      "https://res.cloudinary.com/dbvcuz0d3/image/upload/v1646424940/defaultCommentImage_i0fvkv.jpg";
  }

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
  let user = req.user.id;

  Comment.findById(req.params.id)
  .then((comment) => {
    res.render("restaurants/updateComment", comment)
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
    console.log(images);
  }

  Comment.findByIdAndUpdate(
    id,
    { restaurant, user, rating, description, images },
    { new: true }
  )
    .then((comment) => {
      res.redirect(`/restaurants/${comment.restaurant}`);
    })
    .catch((error) => next(error));
};

module.exports.delete = (req, res, next) => {
  console.log(req.params.id)

  Comment.findByIdAndDelete(req.params.id)
  .then((comment) => res.redirect(`/restaurants/${comment.restaurant}`))
  .catch((error) => console.log(error))
};

// 
/* module.exports.deleteClient = (req, res, next) => {
  console.log('*********************')
  console.log(req.params.id)

  Comment.deleteComment(req.params.id)
    .then((response) => {
      res.status(200).json({})
    })
    .catch(err => next(err))
} */