const { User } = require("../../models");

const removeFriend = (req, res) => {
  if (req.params.userId && req.params.friendId) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then((dbUserData) => {
        if (dbUserData) {
          res.json(dbUserData);
        } else {
          res.status(404).json({ msg: "No user with this id!" });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "internal server error" });
      });
  } else {
    res.status(400).json({ msg: "yor sended data have some error" });
  }
};

module.exports = removeFriend;
