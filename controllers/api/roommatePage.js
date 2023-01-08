const router = require('express').Router();
const { User, Post, Comments } = require("../models");

// get request for roommatePage
//roommatePage should populate with posts

const router = require('express').Router();
const { User, Post, Comments } = require("../models");

// get request for roommatePage
//roommatePage should populate with posts
const roommatePost = require("../models/Post");
const { route } = require('./roommatePost');

//create a Post
router.post('/api/', (req, res) => {
    //using create() to insert post information into the model
    roommatePost.create({
        // info from lilia's roommatePage
    })

    .then((newPost) => {
        //save new post as json object
        res.json(newPost);
    })
    //to catch any sending errors
    .catch((err) => {
        res.status(400).json(err)
    });
});

module.exports = router;
//get request for 
module.exports = router;

