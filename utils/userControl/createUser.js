const { User } = require("../../models");

const createUser = (req, res) => {
  if (req.body) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "internal server error" });
      });
  } else {
    res.status(400).json({ msg: "your sended data have some error" });
  }
};

module.exports = createUser;
