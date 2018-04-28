const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
  email:  { type: String, required: [true, 'Email should be present'] },
  password:  { type: String, required: [true, 'Password should be present'] },
  name:  { type: String, required: [true, 'Name should be present'] },
  age: { type: Number, required: [true, 'Age should be present'] },
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
  console.log('candidatePassword', candidatePassword, this)

  if (candidatePassword == this.password) {
    cb(null, true)
  } else {
    cb("Invalid credentials", false);
  }
};

var User = mongoose.model('User', userSchema);

module.exports = User;
