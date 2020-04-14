const Post = require('../models/PostModel');
const slugify = require('../utils/plugins/slugify');

async function findAll(query) {
  const posts = await Post.find().limit(9).sort('-_id');
  return posts;
}

async function create(data) {
  const {
    title,
    description,
    cover,
    post,
  } = data;

  if (!title || !description || !cover) {
    throw 'All fields is required';
  }

  if (!data.slug) {
    data.slug = slugify(title);
  }

  const isSlugRegistered = await isRegisteredSlug({ title });
  if (isSlugRegistered) {
    console.log(`${data.slug}-${isSlugRegistered}`);
    data.slug = `${data.slug}-${isSlugRegistered}`;
  }

  const createdPost = await Post.create({
    title,
    description,
    cover,
    slug: data.slug,
    post,
  });
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

async function isRegisteredSlug(query) {
  const countSlug = await Post.countDocuments(query);
  if (countSlug == 0) return false;
  return countSlug;
}

module.exports = {
  findAll,
  create,
  findBySlug,
  update,
  destroy,
};
