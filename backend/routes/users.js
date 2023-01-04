/*users route */
const express = require("express");
const { login ,addUser } = require("../controllers/user.controller");
const router = express.Router();
const User = require("../models/user");



router.post("/login", login);

router.post("/add", addUser );

module.exports = router;
