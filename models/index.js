const User = require('./User');
const Post = require('./RoommatePosts');
const Comments = require('./Comments');


Post.belongsTo(User, {
    foreign_key: 'user_id'
});

Post.hasMany(Comments, {
    foreign_key: 'post_id'
});

Comments.belongsTo(User, {
    foreign_key: 'post_id'
})

module.exports = {User, Post, Comments};
