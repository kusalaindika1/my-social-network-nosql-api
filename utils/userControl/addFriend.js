const { User } = require("../../models");

const addFriend = (req, res) => {
  if (req.params.userId && req.params.friendId) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true, runValidators: true }
    )
      .then((dbUserData) => {
        if (dbUserData) {
          res.json(dbUserData);
        } else {
          res.status(404).json({ msg: "No user with this id" });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "internal server error" });
      });
  } else {
    res.status(400).json({ msg: "you sended data have some error" });
  }
};

module.exports = addFriend;
