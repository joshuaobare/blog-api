const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const postController = require("../controllers/postController");
const jwt = require("jsonwebtoken");
const passport = require("passport");

router.post("/create", userController.create_user);
router.post("/login", userController.login_user);
router.post("/post",passport.authenticate("jwt", { session: false }), postController.create_post);
router.put("/post/:id",passport.authenticate("jwt", { session: false }), postController.update_post)
router.delete("/post/:id",passport.authenticate("jwt", { session: false }), postController.delete_post)
router.get("/logout", userController.logout_user)

module.exports = router;
