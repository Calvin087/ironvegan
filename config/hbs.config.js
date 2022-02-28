// hbs
const hbs = require("hbs");

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

hbs.registerHelper("userDoAvocado", function (options) {
  const { restaurant, avocados } = options.hash;
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
