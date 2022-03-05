const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const CloudinaryStorage =
  require("multer-storage-cloudinary").CloudinaryStorage;

// Configurar cloudinary

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const commentImages = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "commentImages",
    allowed_formats: ["jpg", "png"],
  },
});

const userAvatars = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "userAvatars",
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

module.exports.commentImages = multer({ storage: commentImages });
module.exports.userAvatars = multer({ storage: userAvatars });
