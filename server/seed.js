const {users, recipes} = require('./seedData.js');
const bcrypt = require("bcrypt");
const {sequelize} = require('./db');
const {User, Recipe} = require('./models');

let seed = async () => {
    await sequelize.sync({ force: true });
    //loops through all wizard entries starts at i, then selects password within i. 
  for(let i=0;i<=users.length-1;i++){
   let password= users[i].password
   //use bcrypt to hash the password and reassigns in wizardData
   let salt = await bcrypt.genSalt(5);
    users[i].password = await bcrypt.hash(password, salt);
  }
  //after reassigning in User data, use map to push this to db
    // Create the entries for them in their Models
    await Promise.all(users.map(user => User.create(user)));
    await Promise.all(recipes.map(recipe => Recipe.create(recipe)));
  
    // let firstRecipe = await recipeEntries[0];
    // let secondUser = await userEntries[1];
  
    // console.log("Test 1: ", firstRecipe);
    // console.log("Test 2: ", secondUser);
  
    console.log("The database is populated... Test it out using a Local Server!");
  };

// const seed = async () => {

//     try {
//         // drop and recreate tables per model definitions
//         await sequelize.sync({ force: true });
    
//         // insert data
//         await Promise.all(users.map(user => User.create(user)));
//         await Promise.all(recipes.map(recipe => Recipe.create(recipe)));

//         console.log("db populated!");
//     } catch (error) {
//         console.error(error);
//     }
// }

seed();
