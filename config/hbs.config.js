// hbs
const hbs = require("hbs");

// partials
hbs.registerPartials("./views/partials"); // to do

// helpers down here

<<<<<<< HEAD
=======
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

>>>>>>> b0a10cebb42078105351817a000e3f2d51ca98de
hbs.registerHelper("restaurantHasCategory", function (options) {
  const { restaurant, category } = options.hash;

  if (restaurant && restaurant.categories.includes(category)) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

<<<<<<< HEAD
hbs.registerHelper('userDoAvocado', function (options) {
    const {restaurant, avocados } = options.hash;
    /* .some checks if at least one element pass the condition --> true */
    if (restaurant && avocados && avocados.some(avocado => avocado.restaurant == restaurant.id)) {
        return options.fn(this);
    } else {
        return options.inverse(this)
    }
    
  });


=======
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
>>>>>>> b0a10cebb42078105351817a000e3f2d51ca98de
