const Post = require("../models/postsModel");
const Comment = require("../models/commentsModel")
const asyncHandler = require("express-async-handler");

exports.posts_get = asyncHandler(async (req, res, next) => {
  const posts = await Post.find({}).exec();

  res.json(posts);
});

exports.post_get = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const post = await Post.findById(id).exec();
  const comments = await Comment.find({postId: id})
  
  res.json({post, comments});
});

