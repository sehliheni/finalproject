const mongoose = require("mongoose");
const schema = mongoose.Schema;
const techSchema = new schema({
  name:{
    type: String,
    required: true,
  },
  lastname:{
    type: String,
    required: true,
  },

});
module.exports =   mongoose.model('tech', techSchema);