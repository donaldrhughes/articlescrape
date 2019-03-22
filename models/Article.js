var mongoose = require("mongoose");

//Ref to the Schema constructor
var Schema = mongoose.Schema;

//new UserSchema obj

var ArticleSchema = new Schema({
 //requirements
  aText: {
    type: String,
    required: true
  },

  aUrl: {
    type: String,
    required: true
  },
  aSummary: {
    type: String,
    required: true
  }
//   ,
  // `note` is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note
//   note: {
//     type: Schema.Types.ObjectId,
//     ref: "Note"
//   }
});


var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;