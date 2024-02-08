// models/staffModel.js
const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  inputValue1: String,
  inputValue2: String,
  inputValue3: String,
});

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;
