const Sequelize = require('sequelize');
require('dotenv').config();
const PORT = process.env.PORT || 3001;
 
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: process.env.PORT 
    });

module.exports = sequelize;