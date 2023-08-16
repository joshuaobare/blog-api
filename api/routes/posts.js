const express = require('express');
const router = express.Router();
const postController = require("../controllers/postController")
const commentController = require("../controllers/commentController")

router.get("/", postController.posts_get)

router.get("/post/:id", postController.post_get)

router.post("/post/comment", commentController.create_comment)

module.exports = router;