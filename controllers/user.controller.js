const mongoose = require("mongoose");
const Avocado = require('../models/avocado.model');

// PASSPORT
// MAILER...?

module.exports.profile = (req, res, next) => {
  res.render("user/profile");
};

module.exports.edit = (req, res, next) => {
  //
};

module.exports.doEdit = (req, res, next) => {
  const restId = req.params.id;
  const userId = req.user.id;

  Avocado.findOneAndDelete({ restaurant: restId, user: userId })
  .then(avocado => {
    if (avocado) {
      res.status(200).send({ success: 'Avocado removed from DDBB'})
    } else {
      return Avocado.create({ restaurant: restId, user: userId })
      .then(() => {
        res.status(201).send({ success: 'Avocado added to DDBB'})
      })
    }
  })
  .catch(next)
};

module.exports.doAvocado = (req, res, next) => {
  //
};
