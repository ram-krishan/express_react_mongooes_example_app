const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');
const AddressSchema = new Schema({
  city:  { type: String, required: [true, 'City should be present'] },
  state:  { type: String },
});

AddressSchema.plugin(timestamps);
const Address = mongoose.model('Address', AddressSchema);

module.exports =  { AddressSchema, Address }

