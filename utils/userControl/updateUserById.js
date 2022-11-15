const { User } = require("../../models");

const updateUserById = (req, res) => {
  if (req.params.id && req.body) {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((dbUserData) => {
        if (dbUserData) {
          res.json(dbUserData);
        } else {
          res.status(404).json({ msg: "No user found with this id!" });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "internal server error" });
      });
  } else {
    res.status(400).json({ msg: "your sended data have some error" });
  }
};

module.exports = updateUserById;
