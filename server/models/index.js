const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const User = sequelize.define("user", {
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

  userImage: {
    type: Sequelize.STRING,
    allowNull: false,
  }
 
 
});


const Recipe = sequelize.define("recipe", {
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
  recipeImage: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

//One-To-Many Relationship
User.hasMany(Recipe, { as: "recipes", foreignKey: "userId" });

module.exports = {
  db: sequelize,
  User,
  Recipe
};
