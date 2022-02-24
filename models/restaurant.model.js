const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      // required: [true, "Please enter name"],
    },
    address: {
      type: String,
      // required: [true, "Please enter address"],
    },
    phone: {
      type: String,
      // required: [true, "Please enter a valid telephone number"],
    },
    website: {
      type: String,
    },
    schedule: {
      type: String,
      default: "Please check opening hours on the website",
    },
    dishType: {
      type: String,
    },
    veganOptions: {
      type: String,
    },
    description: {
      type: String,
      // required: [true, "Please, tell us something about this place!"],
    },
    fullVegan: {
      type: Boolean,
    },
    takeOut: {
      type: Boolean,
    },
    image: {
      type: [String],
      default:
        "https://images.unsplash.com/photo-1560155016-bd4879ae8f21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    },
    categories: {
      type: [String],
      default: []
    }
  },
  { timestamps: true }
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;
