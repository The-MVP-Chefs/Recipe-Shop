const { database } = require("../db");
const { Recipe, User } = require("../models/index");
const { recipe} = require("./recipeData");
const { user } = require("./userData");
const bcrypt = require("bcrypt");

let seed = async () => {
  await database.sync({ force: true });
  //loops through all wizard entries starts at i, then selects password within i. 
for(let i=0;i<=user.length-1;i++){
 let password= user[i].password
 //use bcrypt to hash the password and reassigns in wizardData
 let salt = await bcrypt.genSalt(5);
  user[i].password = await bcrypt.hash(password, salt);
}
//after reassigning in Wizard data, use bulk create to push this to db
  // Create the entries for them in their Models
  let userEntries = await User.bulkCreate(user);
 let recipeEntries = await Recipe.bulkCreate(recipe);

  let firstRecipe = await recipeEntries[0];
  let secondUser = await userEntries[1];

  console.log("Test 1: ", firstRecipe);
  console.log("Test 2: ", secondUser);

  console.log("The database is populated... Test it out using a Local Server!");
};
//seed()
module.exports = {
  seed,
};
