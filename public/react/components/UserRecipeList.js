import React from "react";
import { UserRecipe } from "./UserRecipe";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
//want users to see this list after they log in and have functionality of website
export const UserRecipesList = ({
  recipes,
  handleClick,
  setUserAddingRecipe,
  setUserHome,
}) => {
  return (
    <>
      <span class="button">
        <Button
          variant="success"
          type="submit"
          onClick={() => setUserAddingRecipe(true)}
        >
          Add a New Recipe
        </Button>
        <br></br>
        <br></br>
        <Button
          variant="primary"
          type="submit"
          onClick={() => setUserHome(true)}
        >
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
