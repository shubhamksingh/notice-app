/*router */
const express = require("express");
const { getNotices, addNotice } = require("../controllers/noticeboard.controller");
const router = express.Router();

const Notice = require("../models/noticeboard");

router.get("/", getNotices);

router.post("/add", addNotice);

module.exports = router;
