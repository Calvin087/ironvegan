const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const avocadoSchema = new Schema(
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
  },
  { timestamps: true }
);

const Avocado = mongoose.model("Avocado", avocadoSchema);
module.exports = Avocado;
