const router = require("express").Router();

// getting homepage from handlebars
router.get("/", async (req, res) => {
  try {
    res.render("home");
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

//when you sign up, will direct you to roommatePage
router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/roommatepage");
    return;
  }
  res.render("signup");
});

//When logged in, directs to roommate page
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("roommatepage");
    return;
  }
  res.render("login");
});

module.exports = router;
