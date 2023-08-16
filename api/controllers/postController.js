const Post = require("../models/postsModel");
const Comment = require("../models/commentsModel");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.posts_get = asyncHandler(async (req, res, next) => {
  const posts = await Post.find({}).exec();

  res.json(posts);
});

exports.post_get = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const post = await Post.findById(id).exec();
  const comments = await Comment.find({ postId: id });

  res.json({ post, comments });
});

exports.create_post = [
  body("title").trim().escape().isLength({ min: 1 }),
  body("text").trim().escape().isLength({ min: 1 }),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    const { text, title, authorName, published } = req.body;

    const post = new Post({
      text,
      title,
      authorName,
      published,
    });

    if (!errors.isEmpty()) {
      res.json({ errors: errors.array() });
      return;
    } else {
      await post.save();
      res.json({ message: "Post created successfully" });
    }
  }),
];

exports.update_post = [
  body("title").trim().escape().isLength({ min: 1 }),
  body("text").trim().escape().isLength({ min: 1 }),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    const { text, title, authorName, published } = req.body;
    const { id } = req.params;

    const post = Post.findOneAndUpdate(
      { _id: id },
      {
        text,
        title,
        authorName,
        published,
      }
    );

    if (!errors.isEmpty()) {
      res.json({ errors: errors.array() });
      return;
    } else {
      await post.exec();
      res.json({ message: "Post updated successfully" });
    }
  }),
];

exports.delete_post = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const post = Post.findOneAndDelete({ _id: id });

  await post.exec();
  res.json({ message: "Post deleted successfully" });
});
