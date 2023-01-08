const router = require('express').Router();
const { User, Post, Comments } = require("../../models");

// get request for roommatePage
//roommatePage should populate with posts
// Create New Post
router.post("/", (req, res) => {

    // create post with user input; user id from session data
    Post.create({
      title:req.body.title,
      post_content:req.body.content,
      user_id:req.session.user_id
    })
      .then(newPost => {
        res.json(newPost);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "An Error Occurred!", err });
      });
});

// Update Post 
router.put("/:id", (req, res) => {
  Post.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(updatedPost => {
      res.json(updatedPost);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "An Error Occurred!", err });
    });
});

// Delete Post
router.delete("/:id", (req, res) => {
    Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(delPost => {
      res.json(delPost);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "An Error Occurred!", err });
    });
});

module.exports = router;

