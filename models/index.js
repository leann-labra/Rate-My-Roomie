const User = require('./User');
const Post = require('./roommatePosts');

Post.belongsTo(User, {
    foreign_key: 'user_id'
});

module.exports = {User, Post};
