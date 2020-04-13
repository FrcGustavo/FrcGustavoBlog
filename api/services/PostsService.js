const Post = require('../models/PostModel');

async function findAll(query) {
  const posts = await Post.find();
  return posts;
}

async function create(post) {
  const createdPost = await Post.create(post);
  return createdPost;
}

async function findBySlug(slug) {
  const post = Post.findOne({ slug });
  return post;
}

async function update(slug, post) {
  const updatedPost = await Post.updateOne({ slug }, post);
  return updatedPost;
}

async function destroy(slug) {
  const deletedPost = await Post.deleteOne({ slug });
  return deletedPost;
}

module.exports = {
  findAll,
  create,
  findBySlug,
  update,
  destroy
}