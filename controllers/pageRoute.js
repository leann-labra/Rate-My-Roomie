const router = require("express").Router();
const { User, Post } = require("../models");

//gettng Post inputs from addRoommate page
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      attributes: [
        "id",
        "title",
        "first_name",
        "last_name",
        "county",
        "city",
      ],
      include: {
        model: User,
      },
    });
    console.log(postData);
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("roommatePage", { posts });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
