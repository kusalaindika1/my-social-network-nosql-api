const router = require("express").Router();
const {
  findAllThoughts,
  createThought,
  findThoughtById,
  updateThoughtById,
  deleteThoughtById,
  addReaction,
  removeReaction,
} = require("../utils/thoughtControl");

router.get("/", findAllThoughts);

router.post("/", createThought);

router.get("/:id", findThoughtById);

router.put("/:id", updateThoughtById);

router.delete("/:id", deleteThoughtById);

router.post("/:thoughtId/reactions", addReaction);

router.delete("/:thoughtId/reactions/:reactionId", removeReaction);

module.exports = router;
