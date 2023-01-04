/*router */
const express = require("express");
const router = express.Router();

const Notice = require("../models/noticeboard");

router.get("/", async (req, res) => {
  try {
    const notices = await Notice.find().populate("user");
    notices.reverse();
    return res.status(200).json(notices);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

router.post("/add", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const user = req.body.user;
  const date = req.body.date;
  if (
    description == null ||
    user == null ||
    date == null ||
    description == "" ||
    user == "" ||
    date == ""
  ) {
    return res.status(400).json("Error: " + err);
  }
  const newNotice = new Notice({ title, description, user, date });

  newNotice
    .save()
    .then(() => res.json({ message: "Notice added!", notice: newNotice }))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
