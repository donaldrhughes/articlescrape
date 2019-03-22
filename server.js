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
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines2";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// Start the server
app.listen(PORT, function() {
  console.log("Node Started on Port: " + PORT);
});
