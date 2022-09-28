const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  title: String,
});

const taskModel = new mongoose.model("task", taskSchema);

module.exports = { taskModel };
