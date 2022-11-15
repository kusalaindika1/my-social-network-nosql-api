const { User } = require("../../models");

const findUsers = (req, res) => {
  User.find({})
    .populate({
      path: "friends",
      select: "-__v",
    })
    .select("-__v")
    .sort({ _id: -1 })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(404).json({ msg: "can not found data" });
    });
};

module.exports = findUsers;
