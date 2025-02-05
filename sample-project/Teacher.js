const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  name: String,
  age: Number,
  experience: Number,
});

module.exports = mongoose.model("Teacher", teacherSchema);
