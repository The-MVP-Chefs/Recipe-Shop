const { Recipe} = require("./Recipe");
const { User } = require("./User");

//One-To-Many Relationship
User.hasMany(Recipe, { as: "recipes", foreignKey: "userId" });

module.exports = {
  Recipe,
  User,
};
