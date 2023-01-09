const router = require("express").Router();
const { User, Post } = require("../models");

// getting homepage from handlebars
router.get("/", async (req, res) => {
  try {
    res.render("home", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Gets roommate page
router.get("/roommatepage", async (req, res) => {
  try {
    res.render("roommatePage");
  } catch (err) {
    res.status(500).json(err);
  }
});

//Gets form to add roommatePost
router.get("/addRoommate", async (req, res) => {
  try {
    res.render("addRoommate");
  } catch (err) {
    res.status(500).json(err);
  }
});

//gettng Post inputs from addRoommate page
router.get("/addRoommate", async (req, res) => {
  try {
    const postData = await Post.findAll({
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
        attributes: ["name"],
      },
    });
    console.log(postData);
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("roommatePage", { logged_in: req.session.logged_in, posts });
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

//when you sign up, will direct you to roommatePage
router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/roommatepage");
    return;
  }
  res.render("signup");
});

//getting login page from the main page
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("roommatepage");
    return;
  }
  res.render("login");
});

module.exports = router;
