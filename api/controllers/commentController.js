const Comment = require("../models/commentsModel");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

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