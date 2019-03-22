var db = require("../models/Article");
var dbArticles = [];

module.exports = function (app) {

    app.get("/", function (req, res) {
        db.find({})


            .then(function (dbArticle) {
                // res.json(dbArticle);
                var articleData = {
                    articles: dbArticle
                }
                console.log(articleData);
                res.render("index", articleData)
            })
            .catch(function (err) {

                res.json(err);
            })


    })


}
