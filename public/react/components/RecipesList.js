import React from "react";
import { Recipe } from "./Recipe";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

export const RecipesList = ({
  recipes,
  handleClick,
  setIsAddingRecipe,
  setIsHome,
}) => {
  console.log("On recipe list componet");
  return (
    <>
      <span class="button">
        <Button
          variant="success"
          type="submit"
          onClick={() => setIsAddingRecipe(true)}
        >
          Add a New Recipe
        </Button>
        <br></br>
        <br></br>
        <Button variant="primary" type="submit" onClick={() => setIsHome(true)}>
          Return Home
        </Button>
      </span>

      {recipes.map((recipe, idx) => {
        return (
          <UserRecipe recipe={recipe} key={idx} handleClick={handleClick} />
        );
      })}
    </>
  );
};
