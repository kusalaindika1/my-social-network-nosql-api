const { User, Thought } = require("../../models");

const deleteUser = (req, res) => {
  if (req.params.id) {
    User.findOneAndDelete({ _id: req.params.id })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user with this id!" });
        } else {
          Thought.deleteMany({ _id: { $in: dbUserData.thoughts } })
            .then(() => {
              res.json({ msg: "User and associated thoughts deleted!" });
            })
            .catch((err) => {
              console.log(err);
              res.json({
                msg: "can not delete associated thoughts but user is deleted",
              });
            });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json({ msg: "can not find that user" });
      });
  } else {
    res.status(400).json({ msg: "your sended data have some error" });
  }
};

module.exports = deleteUser;
