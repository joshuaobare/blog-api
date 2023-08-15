const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PostSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now() },
  authorName: { type: String, required: true },
  published: { type: Boolean, required: true },
});

PostSchema.virtual('url').get(function() {
  return `/posts/post/${this._id}`
})

module.exports = mongoose.model("Post", PostSchema);
