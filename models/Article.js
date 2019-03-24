var mongoose = require("mongoose");

//Ref to the Schema constructor
var Schema = mongoose.Schema;

//new UserSchema obj

var ArticleSchema = new Schema({
 //requirements
  aText: {
    type: String,
    required: true,
    unique : true
  },

  aUrl: {
    type: String,
    required: false,
    unique : true
  },
  aSummary: {
    type: String,
    required: true,
    unique : true
  },
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});


var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;