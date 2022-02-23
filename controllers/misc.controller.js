// MODELS GO HERE

// MODELS GO HERE
// PASSPORT
// MAILER...?

module.exports.home = (req, res, next) => {
  res.render("misc/home");
};

module.exports.fav = (req, res) => {
  res.status(204);
};
