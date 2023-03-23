//this component will prompt the use to login if they try to do any of the crud operations
import React from "react";
import { Recipe } from "./Recipe";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { RecipesList } from "./RecipesList";

export const LoginPrompt = ({
  setIsLoggedIn,
  setIsRegistered,
  setIsHome,
  setSingleViewRecipe,
  setLoginPrompt,
}) => {
  console.log("YOU ARE ON LOGIN PROMPT!");
  return (
    <>
      <h1>Please Login or Register to perform this function</h1>

      <span class="button">
        <Button
          variant="primary"
          type="submit"
          onClick={() => {
            setLoginPrompt(false);
            setIsLoggedIn(true);
            setIsHome(false);
            setIsRegistered(false);
          }}
        >
          Login
        </Button>
        <br></br>
        <br></br>
        <Button
          variant="warning"
          type="submit"
          onClick={() => {
            setLoginPrompt(false);
            setIsRegistered(true);
            setIsHome(false);
            setIsLoggedIn(false);
          }}
        >
          Register Account
        </Button>

        <br></br>
        <br></br>

        <Button
          variant="danger"
          type="submit"
          onClick={() => {
            setLoginPrompt(false);
            setSingleViewRecipe(null);
            setIsHome(true);
          }}
        >
          Back
        </Button>
      </span>
    </>
  );
};
