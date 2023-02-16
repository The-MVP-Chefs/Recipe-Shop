const Sequelize = require("sequelize");
const { database } = require("../db");
const Recipe = require("./Recipe");

const User = database.define("user", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isChef: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  dietary_restrictions: {
    type: Sequelize.STRING,
    allowNull: false,
  },
 
 
});

module.exports = {
  User,
};
