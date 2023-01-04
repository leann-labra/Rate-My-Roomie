const sequelize = require("../config/connection");
const seedPosts = require("./postsData");
const seedUsers = require("./usersData");
const seedComment = require("./commentData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedPosts();

  await seedUsers();

  await seedComment();

  process.exit(0);
};

seedAll();
