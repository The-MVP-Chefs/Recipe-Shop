const express = require("express");
const app = express();

// This is for the database
const { seed } = require("./data/index");
const { Recipe } = require("./models/Recipe");
const { User } = require("./models/User");

const bcrypt = require("bcrypt");
//const jwt = require("jsonwebtoken");

// require("dotenv").config();
// const { PORT, ACCESS_TOKEN_SECRET } = process.env;



//Yohonna: get all wizards
app.get("/recipes", async (req, res) => {
  let recipe = await Recipe.findAll(req.params.id, {
    include: {
      model: Recipe,
      as: "recipes",
    },
  });
  res.send(recipe);
});

var PORT=3000;

app.listen(PORT, () => {
  seed();
  console.log(`App listening on http://localhost:${PORT}`);
});


