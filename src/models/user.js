const mongoose = require('mongoose');
const AddressSchema = require('./address').AddressSchema;
const timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email:  { type: String, required: [true, 'Email should be present'] },
  password:  { type: String, required: [true, 'Password should be present'] },
  name:  { type: String, required: [true, 'Name should be present'] },
  age: { type: Number, required: [true, 'Age should be present'] },
  addresses: [AddressSchema],
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
  console.log('candidatePassword', candidatePassword, this)

  if (candidatePassword == this.password) {
    cb(null, true)
  } else {
    cb("Invalid credentials", false);
  }
};
userSchema.plugin(timestamps);

const User = mongoose.model('User', userSchema);

module.exports = { User, userSchema } ;
