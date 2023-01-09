const User = require('./User');
const Post = require('./RoommatePosts');

Post.belongsTo(User, {
  foreign_key: "user_id",
});

module.exports = {User, Post};
