const router = require("express").Router();
const post = require("./prevPost");
const user = require("./user");

router.use("/post", post);
router.use("/user", user);

module.exports = router;
