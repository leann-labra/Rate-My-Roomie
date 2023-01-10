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
        "age",
        "lease_length",
      ],
      include: {
        model: User,
        attributes: ["name"],
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

router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findbyPk({
      where: {
        id: req.params.id,
      },
      attributes: [
        "id",
        "title",
        "first_name",
        "last_name",
        "county",
        "city",
        "date_created",
      ],
      order: [["date_created", "DESC"]],
      include: {
        model: User,
        attributes: ["username"],
      },
    });
    console.log(postData);

    if (!postData) {
      res.status(404).json({ message: "No post found with this id" });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
