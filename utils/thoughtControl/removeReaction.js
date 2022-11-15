const { Thought } = require("../../models");

const removeReaction = (req, res) => {
  if (req.params.reactionId && req.params.thoughtId) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    )
      .then((dbThoughtData) => {
        if (dbThoughtData) {
          res.json(dbThoughtData);
        } else {
          res.status(404).json({ msg: "can not find thought by this id" });
        }
      })
      .catch((err) => res.json(err));
  } else {
    res.status(400).json({ msg: "you sended data have some error" });
  }
};

module.exports = removeReaction;
