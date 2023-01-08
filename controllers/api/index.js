const router = require('express').Router();
const post = require('./roommatePost');
const page = require('./roommatePage');
const user = require('./userRoute');

router.use('/roommatePost', post);
router.use('/roommatePage', page);
router.use('/user', user);

module.exports = router;