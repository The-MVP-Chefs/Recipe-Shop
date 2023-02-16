const Sequelize = require("sequelize");
const { database } = require("../db");
const Recipe = require("./Recipe");

const User = database.define("user", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  student_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isStudent: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  hogwartsHouse: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  /*spells: {
    type: Sequelize.VIRTUAL,
    references: {
      model: Spell,
      key: "wizard",
    },
  },*/
});

module.exports = {
  User,
};
