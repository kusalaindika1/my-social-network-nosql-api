const { Thought } = require("../../models");

const findThoughtById = (req, res) => {
  Thought.findOne({ _id: req.params.id })
    .populate({
      path: "reactions",
      select: "-__v",
    })
    .select("-__v")
    .then((dbThoughtData) => {
      if (dbThoughtData) {
        res.json(dbThoughtData);
      } else {
        res.status(404).json({ msg: "No thought with this id!" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "internal server error" });
    });
};

module.exports = findThoughtById;
