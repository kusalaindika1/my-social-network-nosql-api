const { Thought } = require("../../models");

const addReaction = (req, res) => {
  if (req.params.thoughtId && req.body) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { new: true, runValidators: true }
    )
      .then((dbThoughtData) => {
        if (dbThoughtData) {
          res.json(dbThoughtData);
        } else {
          res.status(404).json({ msg: "No thought with this id" });
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

module.exports = addReaction;
