const { Thought } = require("../../models");

const findAllThoughts = (req, res) => {
  Thought.find({})
    .populate({
      path: "reactions",
      select: "-__v",
    })
    .select("-__v")
    .sort({ _id: -1 })
    .then((dbThoughtData) => res.json(dbThoughtData))
    .catch((err) => {
      console.log(err);
      res.status(404).json({ msg: "can not find data" });
    });
};

module.exports = findAllThoughts;
