
var mongoose = require("mongoose");

//Ref to the Schema constructor
var Schema = mongoose.Schema;

var NoteSchema = new Schema({
    // `title` is of type String
    // nHead: String,
    // `body` is of type String
    nBody: String
  })

  var Note = mongoose.model("Note", NoteSchema);

module.exports = Note;
  