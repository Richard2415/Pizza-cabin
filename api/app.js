require("dotenv").config();
var express = require("express");
const mongoose = require("mongoose");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

// MongoDB
const PORT = process.env.PORT || 8080

mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
var db = mongoose.connection;

// Express
var app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

// Routes
app.use("/availability", require("./routes/availabilityRoute"));
app.use("/reserve", require("./routes/reservationRoute"));

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", _ => {
  console.log("Connected to DB");
});

module.exports = app;
