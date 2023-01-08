const router = require("express").Router();
const post = require("./prevPost");
const user = require("./user");

router.use("/post", post);
router.use("/user", user);
router.use("/comment", comment);

module.exports = router;
