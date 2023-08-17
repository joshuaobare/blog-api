const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const postController = require("../controllers/postController");
const jwt = require("jsonwebtoken");
const passport = require("passport");

// User routes
router.post("/create", userController.create_user);
router.post("/login", userController.login_user);
router.get("/logout", userController.logout_user)

// CRUD post routes
router.get("/", postController.posts_get)
router.get("/post/:id", postController.post_get)
router.post("/post",passport.authenticate("jwt", { session: false }), postController.create_post);
router.put("/post/:id",passport.authenticate("jwt", { session: false }), postController.update_post)
router.delete("/post/:id",passport.authenticate("jwt", { session: false }), postController.delete_post)








router.post("/post/comment", commentController.create_comment)

module.exports = router;
