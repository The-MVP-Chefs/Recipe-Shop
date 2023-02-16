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

  spellName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  itemType: {
    type: Sequelize.STRING,
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
