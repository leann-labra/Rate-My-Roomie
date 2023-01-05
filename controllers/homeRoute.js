const router = require("express").Router();
const { User, Post, Comments } = require("../models");

// getting homepage from handlebars
router.get("/", async (req, res) => {
  try {
    res.render("home",{
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//Gets roomate page
router.get("/roommatepage", async (req, res) => {
  try {
    res.render("roommatePage");
  } catch (err) {
    res.status(500).json(err);
  }
});

//when you sign up, will direct you to roommatePage
router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.render("/roommatepage");
    return;
  }
  res.render("signup");
});

//getting login page from the main page
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.render("roommatepage");
    return;
  }
  res.render("login");
});

module.exports = router;
