const mongoose = require("mongoose");
const mongoConfig = {
  base_uri: process.env.MONGO_ATLAS_URI,
  username: process.env.MONGO_ATLAS_USERNAME,
  password: process.env.MONGO_ATLAS_PASSWORD,
};

const uri = mongoConfig.base_uri
  .replace("<username>", mongoConfig.username)
  .replace("<password>", mongoConfig.password);

const initialMongoConnection = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(uri)
    .then(() =>
      console.log("Mongo DB database connection established successfully")
    )
    .catch((error) => console.log(error));
};

module.exports = initialMongoConnection;
