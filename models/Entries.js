const mongoose = require("mongoose");

//initializes schema
let entrySchema = new mongoose.Schema({
  category: { type: String, required: false },
  location: { type: String, required: true },
  place: { type: String, required: true },
  image: { type: String, required: false },
});

//create and exports model
module.exports = mongoose.model("Entry", entrySchema);
