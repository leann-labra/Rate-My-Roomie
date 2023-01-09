const User = require('./User');
const Post = require('./roommatePost');

Post.belongsTo(User, {
    foreign_key: 'user_id'
});

module.exports = {User, Post};
