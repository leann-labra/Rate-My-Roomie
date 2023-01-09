const router = require("express").Router();
const user = require("./userRoute");
const post = require("./roommatePost");

router.use("/post", post);
router.use("/user", user);

module.exports = router;
