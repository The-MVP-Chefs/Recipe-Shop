const express = require("express");
const router = express.Router();


const { Recipe } = require("../models");

//Express Route to GET all recipes
router.get("/", async (req, res, next) => {
    try {
      const recipes = await Recipe.findAll();
      res.send(recipes);
    } catch (error) {
      next(error);
    }
  });

router.use(express.json());
router.use(express.urlencoded({ extended:true}));

// GET /recipes
router.get("/:id", async (req, res, next) => {
  try {
    const recipes = await Recipe.findOne({
      where: {
        id: req.params.id
      }
    });
    res.json(recipes);
  } catch (error) {
    next(error);
  }
});

// POST /recipes

router.post("/", async (req, res, next) => {
  try {
    const addRecipe = await Recipe.create(req.body); 
    res.json(await Recipe.findAll());
  } catch (error) {
    next(error);
  }
});

//DELETE /recipes/:id

router.delete("/:id", async (req, res, next) => {
  try {
    const deleteRecipe = await Recipe.destroy({ 
      where: {
        id: req.params.id
      }
    });
    const recipes = await Recipe.findAll();
    res.json(recipes);
  } catch (error) {
    next(error);
  }
});

//PUT /recipes/:id
// router.put("/:id", async (req, res, next) => {
//   router.use(express.json());
//   try {
//     const [updatedRecipe, updatedRecipes] = await Recipe.update(req.body, {
//       where: {
//         id: req.params.id
//       },
//       returning: true
//     });
//     res.send(updatedRecipes[1]);
//   } catch (error) {
//     next(error);
//   }
// });

//PUT /items/:id
router.put("/:id", async (req, res, next) => {
  router.use(express.json());
  try {
    const [updatedRecipe, updatedRecipes] = await Recipe.update(req.body, {
      where: {
        id: req.params.id
      },
      returning: true
    });
   res.send(updatedRecipes[0]);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

