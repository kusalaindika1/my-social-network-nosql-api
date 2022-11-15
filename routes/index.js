const router = require("express").Router();
const user = require("./user");
const thought = require("./thought");

router.use("/users", user);
router.use("/thoughts", thought);

module.exports = router;
