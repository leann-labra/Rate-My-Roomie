const router = require('express').Router();
const post = require('./roommatePost');
const page = require('./roommatePage');
const user = require('./user');
const comment = require('./comments');

router.use('/roommatePost', post);
router.use('/roommatePage', page);
router.use('/user', user);
router.use('/comment', comment);

module.exports = router;