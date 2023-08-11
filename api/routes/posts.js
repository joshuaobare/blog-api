const express = require('express');
const router = express.Router();
const postController = require("../controllers/postController")

router.get("/", postController.posts_get)

router.get("/post/:id", postController.post_get)

module.exports = router;