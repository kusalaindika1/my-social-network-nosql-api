const findUsers = require("./findUsers");
const createUser = require("./createUser");
const findUserById = require("./findUserById");
const updateUserById = require("./updateUserById");
const deleteUser = require("./deleteUser");
const addFriend = require("./addFriend");
const removeFriend = require("./removeFriend");

module.exports = {
  findUsers,
  createUser,
  findUserById,
  updateUserById,
  deleteUser,
  addFriend,
  removeFriend,
};
