const express = require("express");
const { listen } = require("express/lib/application");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Db conection success");
  })
  .catch(() => {
    console.log("Error connecting to the db!");
  });

listen(5000, () => {
  console.log("server online");
});
