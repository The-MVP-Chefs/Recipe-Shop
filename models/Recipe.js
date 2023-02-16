const Sequelize = require("sequelize");
const { database } = require("../db");
const { User} = require("./User");

const Recipe = database.define("recipe", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    timeStamps: true,
  },

  recipeName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ingredients: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isVegan: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: "id",
    },
  },
});

module.exports = {
  Recipe,
};
