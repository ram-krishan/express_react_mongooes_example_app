const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name:  { type: String, required: [true, 'Name should be present'] },
  age: { type: Number, required: [true, 'Age should be present'] },
});

var User = mongoose.model('User', userSchema);

module.exports = User;
