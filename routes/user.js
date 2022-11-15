const router = require("express").Router();
const {
  findUsers,
  createUser,
  findUserById,
  updateUserById,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../utils/userControl");

router.get("/", findUsers);

router.post("/", createUser);

router.get("/:id", findUserById);

router.put("/:id", updateUserById);

router.delete("/:id", deleteUser);

router.post("/:userId/friends/:friendId", addFriend);

router.delete("/:userId/friends/:friendId", removeFriend);

module.exports = router;
