const Post = require("../models/postsModel")
const asyncHandler = require("express-async-handler");

exports.posts_get = asyncHandler(async(req, res, next) => {
    
    const posts = await Post.find({}).exec()

    res.json(posts)
}) 