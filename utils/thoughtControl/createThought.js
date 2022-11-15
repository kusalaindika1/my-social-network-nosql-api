const { Thought, User } = require("../../models");

const createThought = (req, res) => {
  if (req.body) {
    Thought.create(req.body)
      .then(({ _id }) => {
        User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: _id } },
          { new: true }
        )
          .then((dbUserData) => {
            if (dbUserData) {
              res.json({ message: "Thought successfully created!" });
            } else {
              res
                .status(404)
                .json({ msg: "Thought created but no user with this id!" });
            }
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json({ msg: "internal server error" });
          });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "internal server error" });
      });
  } else {
    res.status(400).json({ msg: "you sended data have some error" });
  }
};

module.exports = createThought;
