const findAllThoughts = require("./findAllThought");
const createThought = require("./createThought");
const findThoughtById = require("./findThoughtById");
const updateThoughtById = require("./updateThoughtById");
const deleteThoughtById = require("./deleteThought");
const addReaction = require("./addReaction");
const removeReaction = require("./removeReaction");

module.exports = {
  findAllThoughts,
  createThought,
  findThoughtById,
  updateThoughtById,
  deleteThoughtById,
  addReaction,
  removeReaction,
};
