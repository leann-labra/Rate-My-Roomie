const router = require('express').Router();
const post = require('./roommatePost');
const user = require('./user');
const comment = require('./comments');

router.use('/post', post);
router.use('/user', user);
router.use('/comment', comment);

module.exports = router;