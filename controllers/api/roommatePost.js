const router = require('express').Router();
const session = require("express-session");
const { Post } = require("../../models");

// Create New Post
router.post("/", (req, res) => {
  // create post with user input; user id from session data
  Post.create({
    title: req.body.title,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    age: req.body.age,
    city: req.body.city,
    county: req.body.county,
    rating:req.body.rating,
    lease_length: req.body.lease_length,
    comments: req.body.comments,
    user_id: req.session.user_id,
  })
    .then((newPost) => {
      res.json(newPost);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "An Error Occurred!", err });
    });
});

// Update Post
router.put("/:id", (req, res) => {
  Post.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedPost) => {
      res.json(updatedPost);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "An Error Occurred!", err });
    });
});

// Delete Post
router.delete("/:id", (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((delPost) => {
      res.json(delPost);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "An Error Occurred!", err });
    });
});

module.exports = router;
