const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  useName: String,

  email: String,
  password: String,
});

const UserModel = new mongoose.model("userdata", userSchema);

module.exports = { UserModel };
