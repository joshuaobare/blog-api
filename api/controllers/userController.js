const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

exports.create_user = [
  body("name")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Name must be specified"),
  body("password")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Password too short"),
  body("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.password) throw new Error("Passwords must match");
    return true;
  }),
  body("email")
    .trim()
    .escape()
    .isEmail()
    .withMessage("Enter valid email address"),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    const { name, password, email } = req.body;

    const user = new User({
      name,
      password,
      email,
    });

    if (!errors.isEmpty) {
      res.json({ errors: errors.array() });
      return;
    } else {
      await user.save();
    }
  }),
];
