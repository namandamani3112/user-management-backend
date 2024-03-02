const mongoose = require("mongoose");

let user = new mongoose.Schema({
  firstName: {
    type: String,
    default: "",
  },

  lastName: {
    type: String,
    default: "",
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },

  mobile: {
    type: String,
    unique: true,
    required: true,
  },
  
});

module.exports = mongoose.model("user", user);
