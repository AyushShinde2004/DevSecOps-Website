import { Schema, model } from 'mongoose';

const postSchema = new Schema({
  authorName: String,
  title: String,
  imageLink: String,
  categories: [String],
  description: String,
  isFeaturedPost: Boolean,
  timeOfPost: { type: Date, default: Date.now },
}, {
  collection: 'posts' // ✅ Force correct Mongo collection
});

export default model('Post', postSchema);
