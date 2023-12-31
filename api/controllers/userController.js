const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const jwt = require("jsonwebtoken");

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

    bcrypt.hash(password, 10, async (err, hashedPassword) => {
      if (err) {
        console.log(err);
      } else {
        const user = new User({
          name,
          password: hashedPassword,
          email,
        });

        if (!errors.isEmpty()) {
          res.json({ errors: errors.array() });
          return;
        } else {
          await user.save();
          res.json({ message: "User created successfully" });
        }
      }
    });
  }),
];

exports.login_user = asyncHandler(async (req, res, next) => {
  passport.authenticate("local", async (err, user, info) => {
    try {
      if (err || !user) {
        const error = new Error("An error occurred.");

        return next(error);
      }

      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);
        jwt.sign({ user: req.user }, "secretkey", (err, token) => {
          res.json({ token, user: JSON.stringify(req.user) });
        });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

exports.logout_user = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.json({message: "Successfully logged out"});
  });
};
