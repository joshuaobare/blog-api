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

exports.create_comment = [
  body("text").isLength({ min: 1 }).withMessage("Comment too short"),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    const { text, postId } = req.body;

    const comment = new Comment({
      text,
      postId,
    });

    if (!errors.isEmpty()) {
      res.json({ errors: errors.array() });
      return;
    } else {
      await comment.save();
    }
  }),
];

exports.create_post = [
  body("title").trim().escape().isLength({ min: 1 }),
  body("text").trim().escape().isLength({ min: 1 }),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    const { text, title } = req.body;

    const post = new Post({
      text,
      title,
      authorName: req.user.name,
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
