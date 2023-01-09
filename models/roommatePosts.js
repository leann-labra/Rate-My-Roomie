const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    county: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ontime_payments:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    communication:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cleanliness:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    friendly:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    guests:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comments:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    age:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    lease_length:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
