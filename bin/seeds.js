require("dotenv").config();

const mongoose = require("mongoose");
const Restaurant = require("../models/restaurant.model");
const User = require("../models/user.model");
const Comment = require("../models/comments.model");
const axios = require('axios')

const defaultRestaurants = require("../data/restaurants.json");
const defaultUsers = require("../data/defaultUsers.json");
const defaultComments = require("../data/defaultCommets.json");
const Avocado = require("../models/avocado.model");

require("../config/db.config");

mongoose.connection.once("open", () => {
  console.info(
    `*** Connected to the database ${mongoose.connection.db.databaseName} ***`
  );

  // We need to have IDs for location and users
  // to create comments and avocados

  const allUserID = [];
  const allLocationID = [];

  // Get random location ID
  // Get random User ID

  // Connect to DB and create all dummy content

  mongoose.connection.db
    .dropDatabase()
    .then(() => `${mongoose.connection.db.databaseName} successfully dropped`)
    .then(() => {
      // Create Users
      return User.create(defaultUsers);
    })
    .then((users) => {
      // Save all IDs then
      // Log quantity of users

      allUserID.push(...users);
      console.log(allUserID.length, "users created");
    })
    .then(() => {
      // Append restaurants coords
      const promises = defaultRestaurants.map((rest) => {
        const ADDRESS = rest.address;
        const TOKEN = process.env.MAPBOX_TOKEN;
        const baseURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
        const URLParams = `.json?country=es&limit=1&types=place%2Cpostcode%2Caddress&language=es&access_token=${TOKEN}`;
        const finalURL = `${baseURL}${encodeURIComponent(ADDRESS)}${URLParams}`;
      
        // hacer la peti (async) a finalURL
        return axios.get(finalURL);
      });

      return Promise.all(promises)
    })
    .then(coords => {
      coords.forEach((coord, index) => {
        defaultRestaurants[index].coordenates = coord.data.features[0].center;
      })
      return Restaurant.create(defaultRestaurants);
    })
    .then((restaurants) => {
      // Save all IDs then
      // Log quantity of locations

      allLocationID.push(...restaurants);
      console.log(allLocationID.length, "locations created");
    })
    .then(() => {
      // Create random comments with these two IDs

      const listOfComments = defaultComments.map((comment) => {
        const randomLocation = Math.floor(Math.random() * allLocationID.length);
        const randomUser = Math.floor(Math.random() * allUserID.length);

        return {
          ...comment,
          restaurant: allLocationID[randomLocation],
          user: allUserID[randomUser],
        };
      });

      return Comment.create(listOfComments);
    })
    .then((comments) => {
      // Log quantity of comments
      console.log(comments.length, "comments created");
    })
    .then(() => {
      // Create random likes with these two IDs

      const listOfAvocados = defaultComments.map((el) => {
        const randomLocation = Math.floor(Math.random() * allLocationID.length);
        const randomUser = Math.floor(Math.random() * allUserID.length);

        return {
          restaurant: allLocationID[randomLocation],
          user: allUserID[randomUser],
        };
      });

      return Avocado.create(listOfAvocados);
    })
    .then((avocados) => {
      // Log quantity of avocados
      console.log(avocados.length, "avocados created");
    })

    .catch((error) => console.log("mongoose", error))
    .finally(() => {
      mongoose.connection
        .close()
        .then(() => console.log("Finish seeds.js"))
        .catch((e) => console.error(e))
        .finally(() => {
          process.exit(0);
        });
    });
});

// Keep This
// =============================
// restaurants.forEach((restaurant) => {
//   new Restaurant({
//     ...restaurant,
//   })
//     .save()
//     .then((restaurant) =>
//       console.log(`${restaurant.name} successfully created!`)
//     )
//     .catch((error) => console.error(error));
// });
// =============================
