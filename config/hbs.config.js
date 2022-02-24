// hbs
const hbs = require("hbs");

// partials
hbs.registerPartials("./views/partials"); // to do

// helpers down here 

hbs.registerHelper('userDoAvocado', function (options) {
    const {restaurant, avocados } = options.hash;
    if (restaurant && avocados && avocados.some(avocado => avocado.restaurant == restaurant.id)) {
        return options.fn(this);
    } else {
        return options.inverse(this)
    }
});
