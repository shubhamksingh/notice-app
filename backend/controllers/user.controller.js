const User = require("../models/user");


const isAlphaNumeric = str => /^[a-z0-9]+$/gi.test(str);

modeule.exports.login = async (req, res) => {
  try {
    if (!isAlphaNumeric(req.body.username)) {
      return res.status(400).json("Error: " + err);
    }
    const user = await User.find({ username: req.body.username });
    console.log(user);

    if (user[0]) {
      return res
        .status(200)
        .json({ message: "User found!", user: user[0], newUser: false });
    } else {
      const newUser = new User({ username: req.body.username });
      newUser
        .save()
        .then(() =>
          res.json({ message: "User added!", user: newUser, newUser: true }),
        )
        .catch(err => res.status(400).json("Error: " + err));
    }
  } catch (err) {
    return res.status(400).json("Error: " + err);
  }
};

module.exports.addUser = (req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });
  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch(err => res.status(400).json("Error: " + err));
};
