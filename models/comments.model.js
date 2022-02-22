const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentsSchema = new Schema(
  {
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: [true, "Please let us know how was your experience!"],
    },
    images: {
      type: [String],
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentsSchema);
module.exports = Comment;

// ```js
// id (auto)
// locationID: "mongoose.ObjectId",
// userID: "mongoose.ObjectId:",
// imageURL: "String" // Cloudify,
// comment: "String",
// ```;
