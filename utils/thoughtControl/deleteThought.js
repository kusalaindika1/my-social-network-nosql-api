const { Thought, User } = require("../../models");

const deleteThoughtById = (req, res) => {
  if (req.params.id) {
    Thought.findOneAndDelete({ _id: req.params.id }).then((dbThoughtData) => {
      if (dbThoughtData) {
        User.findOneAndUpdate(
          { thoughts: req.params.id },
          { $pull: { thoughts: req.params.id } },
          { new: true }
        )
          .then((dbUserData) => {
            if (dbUserData) {
              res.json({ msg: "Thought successfully deleted!" });
            } else {
              res
                .status(404)
                .json({ message: "Thought created but no user with this id!" });
            }
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json({ msg: "internal server error" });
          });
      } else {
        res.status(404).json({ msg: "No thought with this id!" });
      }
    });
  } else {
    res.status(400).json({ msg: "you sended data have some error" });
  }
};

module.exports = deleteThoughtById;
