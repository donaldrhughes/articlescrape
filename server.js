//Dependencies
//=============================================
var cheerio = require("cheerio");
var axios = require("axios");

var logger = require("morgan");
var mongoose = require("mongoose");
var express = require("express");
var exphbs = require("express-handlebars");

//Require all models
var db = require("./models");

var PORT = process.env.PORT || 3000;
//Initialize Express
var app = express();

//Start Morgan as Logger
app.use(logger("dev"));
//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");
//Express Static - Public
app.use(express.static("public"));

//Database config
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://heroku_283p80ck2:heroku_283p80ck2@ds115411.mlab.com:15411/heroku_283p80ck";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

heroku_283p80ck2

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// Start the server
app.listen(PORT, function() {
  console.log("Node Started on Port: " + PORT);
});
