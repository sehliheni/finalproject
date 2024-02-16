const mongoose = require("mongoose");
const schema = mongoose.Schema;
const ClassSchema = new schema({
  name:{
    type: String,
    required: true,
  },
  lastname:{
    type: String,
    required: true,
  },

});
module.exports =   mongoose.model('class', ClassSchema);