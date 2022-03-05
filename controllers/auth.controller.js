const mongoose = require("mongoose");
const User = require("../models/user.model");
const mailer = require("../config/mailer.config");
const { commentImages, userAvatars } = require("../config/storage.config");
const passport = require("passport");

module.exports.register = (req, res, next) => {
  res.render("auth/register");
};

module.exports.doRegister = (req, res, next) => {
  const user = req.body;

  const renderWithErrors = (errors) => {
    res.render("auth/register", { errors, user });
  };

  User.findOne({ email: user.email })
    .then((userFound) => {
      if (userFound) {
        renderWithErrors({ email: "Email already in use" });
      } else {
        if (req.file) {
          user.avatarImg = req.file.path;
        } else {
          user.avatarImg =
            "https://res.cloudinary.com/dbvcuz0d3/image/upload/v1646080280/newAvatar_uthmgp.png";
        }
        return User.create(user).then((createdUser) => {
          mailer.sendActivationEmail(
            createdUser.email,
            createdUser.activationToken,
            createdUser.name
          );
          req.flash(
            "flashMessage",
            "You have to activate your account. Please check your inbox or SPAM."
          );
          res.redirect("/login");
        });
      }
    })
    .catch((err) => {
      if (err instanceof mongoose.Error.ValidationError) {
        console.log(err);
        renderWithErrors(err.errors);
      } else {
        next(err);
      }
    });
};

module.exports.activate = (req, res, next) => {
  const token = req.params.token;

  // User.findOneAndUpdate({ activationToken, active: false }, { active: true })
  User.findOneAndUpdate({ activationToken: token }, { $set: { active: true } })
    .then((updatedUser) => {
      req.flash("flashMessage", "You have activated your account. Welcome!");
      res.redirect("/login");
    })
    .catch((err) => next(err));
};

module.exports.pleaseActivate = (req, res, next) => {
  res.render("auth/pleaseActivate");
};

const doLogin = (req, res, next, provider) => {
  // const renderWithErrors = (errors) => {
  //   res.render("auth/login", { errors, user });
  // };

  const userEmail = req.body.email;

  User.find({ email: userEmail }).then((user) => {
    if (user[0]?.active === false) {
      return res.redirect("/activate");
    } else {
      passport.authenticate(
        provider || "local-auth",
        (err, user, validations) => {
          if (err) {
            next(err);
          } else if (!user) {
            console.log(validations.error, userEmail);
            res.status(404).render("auth/login", {
              errors: { errorMessage: validations.error },
              userEmail,
            });
          } else {
            req.login(user, (loginError) => {
              if (loginError) {
                next(loginError);
              } else {
                req.flash("flashMessage", "You have succesfully signed in");
                res.redirect("/profile");
              }
            });
          }
        }
      )(req, res, next);
    }
  });
};

module.exports.login = (req, res, next) => {
  res.render("auth/login");
};

module.exports.doLogin = (req, res, next) => {
  doLogin(req, res, next);
};

module.exports.doLoginGoogle = (req, res, next) => {
  doLogin(req, res, next, "google-auth");
};

module.exports.logout = (req, res, next) => {
  req.logout();
  res.redirect("/login");
};
