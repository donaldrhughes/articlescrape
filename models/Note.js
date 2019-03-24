
var mongoose = require("mongoose");

//Ref to the Schema constructor
var Schema = mongoose.Schema;

var NoteSchema = new Schema({

    // nHead: String,
    nBody: String
  })

  var Note = mongoose.model("Note", NoteSchema);

module.exports = Note;
  