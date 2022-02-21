require('dotenv').config();

const mongoose = require('mongoose');
const restaurants = require('../data/restaurantes_en');
const Restaurant = require('../models/restaurant.model');

require('../config/db.config');

mongoose.connection.once('open', () => {
    console.info(`*** Connected to the database ${mongoose.connection.db.databaseName} ***`);

    mongoose.connection.db
    .dropDatabase()
    .then(() => `${mongoose.connection.db.databaseName} successfully dropped`)
    .then(() => {
        restaurants.forEach(restaurant => {
            new Restaurant({
                ...restaurant
            }).save()
            .then(restaurant => console.log(`${restaurant.name} successfully created!`))
            .catch(error =>  console.error(error))
        })
    })
    .catch(error => console.log('mongoose', error));
});