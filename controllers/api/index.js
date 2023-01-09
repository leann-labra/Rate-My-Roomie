const router = require("express").Router();
const user = require("./userRoute");
const post = require("./roommatePost");
const roommatePage = require("./pageRoute");

router.use("/roommatepage", roommatePage);
router.use("/post", post);
router.use("/user", user);

module.exports = router;
