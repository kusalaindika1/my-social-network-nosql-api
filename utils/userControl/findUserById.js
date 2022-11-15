const { User } = require("../../models");

const findUserById = (req, res) => {
  if (req.params.id) {
    User.findOne({ _id: req.params.id })
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      .populate({
        path: "friends",
        select: "-__v",
      })
      .select("-__v")
      .then((dbUserData) => {
        if (dbUserData) {
          res.json(dbUserData);
        } else {
          res.status(404).json({ msg: "can not find data" });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "internal server error" });
      });
  } else {
    res.status(400).json({ msg: "your sended data have some error" });
  }
};

module.exports = findUserById;
