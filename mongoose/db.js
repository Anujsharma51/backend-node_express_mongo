const mongoose = require("mongoose");
// connect to db

const connection = mongoose.connect("mongodb://localhost:27017/learning");

const studenSchema = mongoose.Schema({
  name: String,
  age: Number,
  city: String,
});

//model

const StudentModel = new mongoose.model("student", studenSchema);

module.exports = { connection, StudentModel };
