const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema({
  userId:String,
  courseName:String,
  date:{type:Date,default:Date.now}
});

module.exports = mongoose.model("Enrollment",enrollmentSchema);