const mongoose = require("mongoose");

const connecttion = mongoose.connect("mongodb://localhost:27017/Projuct_1");
module.exports = connecttion;
