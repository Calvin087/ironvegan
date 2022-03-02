// hbs
const hbs = require("hbs");
const { mongoose } = require("mongoose");


// partials
hbs.registerPartials("./views/partials"); // to do

// helpers down here


hbs.registerHelper("userDoAvocado", function (options) {
  const { restaurant, avocados } = options.hash;
  /* .some checks if at least one element pass the condition --> true */
  if (
    restaurant &&
    avocados &&
    avocados.some((avocado) => avocado.restaurant == restaurant.id)
  ) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});


hbs.registerHelper("restaurantHasCategory", function (options) {
  const { restaurant, category } = options.hash;

  if (restaurant && restaurant.categories.includes(category)) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

hbs.registerHelper("isUserReview", function (options) {
  const { comment, user } = options.hash;
  console.log(user)
  if (comment.user._id.equals(user._id)) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

hbs.registerHelper("formatCommentDates", function (date) {
  let thedate = new Date(date);
  let options = { year: "numeric", day: "numeric", month: "long" };
  // return thedate.toLocaleString("es-ES", options); // figure out later how to switch between the two types based on location?
  return thedate.toLocaleString("en-GB", options);
});

hbs.registerHelper("showKiwis", function (rating) {
  const kiwiImage = `<img
    src="/img/kiwi.svg"
    class="me-1 mb-1"
    width="27px"
    height="auto"
  />`;
  let kiwiString = "";
  for (let i = 0; i < rating; i++) {
    kiwiString += kiwiImage;
  }
  return kiwiString;
});
