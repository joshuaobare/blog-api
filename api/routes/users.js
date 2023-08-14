const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/create", userController.create_user);
router.post("/login", userController.login_user);


const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");

    const bearerToken = bearer[1];

    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
};



module.exports = router;
