const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');

const postSchema = new Schema({
  body:  { type: String, required: [true, 'body should be present'] },
  userId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});
postSchema.plugin(timestamps);
const Post = mongoose.model('Post', postSchema);

module.exports = {Post, postSchema} ;
