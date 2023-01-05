const router = require("express").Router();
const { User, Post, Comments } = require("../models");

// getting homepage from handlebars
router.get("/", async (req, res) => {
  try {
    res.render("home", {
      // layout: 'main'
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//getting login page from the main page
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
