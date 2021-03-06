const mongoose = require("mongoose");
MONGODB_URI =
  process.env.NODE_ENV === "development"
    ? "mongodb://127.0.0.1:27017/ironvegan"
    : process.env.MONGODB_URI;

// mongoose connect
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    console.info(`Successfully connected to the database ${MONGODB_URI}`)
  )
  .catch((error) => {
    console.error(
      `An error ocurred trying to connect to de database ${MONGODB_URI}`,
      error
    );
    process.exit(0);
  });

// close connection
process.on("SIGINT", function () {
  mongoose.connection.close(function () {
    console.log("Mongoose disconnected on app termination");
    process.exit(0);
  });
});

module.exports.DB = MONGODB_URI;
