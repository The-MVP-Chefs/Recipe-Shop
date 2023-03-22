import React, { useState, useEffect } from "react";
import apiURL from "../api";
import { RecipesList } from "./RecipesList";
import { SingleViewRecipe } from "./SingleViewRecipe";
import { Home } from "./Home";
import { Login } from "./Login";
import { Register } from "./Register";
import { LoginPrompt } from "./LoginPrompt";
//user specific components

import { UserHome } from "./UserHome";
import { UserAddRecipe } from "./UserAddRecipe";
import { UserUpdateRecipe } from "./UserUpdateRecipe";
import { UserSingleViewRecipe } from "./UserSingleviewRecipe";
import { UserRecipesList } from "./UserRecipeList";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => {
  const [users, setUsers] = useState([]);
  const [isHome, setIsHome] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const [singleViewRecipe, setSingleViewRecipe] = useState(null);
  const [isAddingRecipe, setIsAddingRecipe] = useState(false);
  const [loginPrompt, setLoginPrompt] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  //pieces of state exclusive to users

  const [userHome, setUserHome] = useState(false);
  const [userSingleViewRecipe, setUserSingleViewRecipe] = useState(null);
  const [userAddingRecipe, setUserAddingRecipe] = useState(false);
  const [userUpdating, setUserUpdating] = useState(false);
  const [generalView, setGeneralView] = useState(null);
  const [singleViewUser, setSingleViewUser] = useState(null);

  async function fetchUsers() {
    try {
      const response = await fetch(`${apiURL}/users`);
      const usersData = await response.json();

      setUsers(usersData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  async function fetchRecipes() {
    try {
      const response = await fetch(`${apiURL}/recipes`);
      const recipesData = await response.json();

      setRecipes(recipesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }
  //for general ppl to fetch
  async function fetchSingleRecipe(id) {
    try {
      const response = await fetch(`${apiURL}/recipes/${id}`);
      const recipe = await response.json();
      setSingleViewRecipe(recipe);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  //for users to fetch
  async function fetchSingleRecipeAsUser(id) {
    try {
      const response = await fetch(`${apiURL}/recipes/${id}`);
      const recipe = await response.json();
      setUserSingleViewRecipe(recipe);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  async function fetchSingleUser(id) {
    try {
      const response = await fetch(`${apiURL}/users/${id}`);
      const user = await response.json();
      setSingleViewUser(user);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  return (
    <main>
      {isHome ? (
        // left is prop right is function}
        <Home
          setGeneralView={setGeneralView}
          setIsHome={setIsHome}
          setRecipes={setRecipes}
          setIsLoggedIn={setIsLoggedIn}
          setIsRegistered={setIsRegistered}
        />
      ) : isLoggedIn ? (
        <Login
          users={users}
          setUserHome={setUserHome}
          setRecipes={setRecipes}
          setIsLoggedIn={setIsLoggedIn}
          setIsHome={setIsHome}
          handleClick={fetchSingleUser()}
        />
      ) : loginPrompt ? (
        <LoginPrompt
          setRecipes={setRecipes}
          recipes={recipes}
          handleClick={fetchSingleRecipe}
          setIsLoggedIn={setIsLoggedIn}
          setLoginPrompt={setLoginPrompt}
          setIsRegistered={setIsRegistered}
          setIsHome={setIsHome}
          setSingleViewRecipe={setSingleViewRecipe}
        />
      ) : isRegistered ? (
        <Register
          setIsRegistered={setIsRegistered}
          setIsHome={setIsHome}
          setIsLoggedIn={setIsLoggedIn}
        />
      ) : isUpdating ? (
        <LoginPrompt
          setIsLoggedIn={setIsLoggedIn}
          setLoginPrompt={setLoginPrompt}
          setIsRegistered={setIsRegistered}
          setIsHome={setIsHome}
          setSingleViewRecipe={setSingleViewRecipe}
        />
      ) : userUpdating ? (
        <UserUpdateRecipe
          props={UserSingleViewRecipe}
          setUserUpdating={setUserUpdating}
          setUserSingleViewRecipe={setUserSingleViewRecipe}
        />
      ) : isAddingRecipe ? (
        <LoginPrompt
          setIsLoggedIn={setIsLoggedIn}
          setLoginPrompt={setLoginPrompt}
          setIsRegistered={setIsRegistered}
          setIsHome={setIsHome}
          setSingleViewRecipe={setSingleViewRecipe}
        />
      ) : userAddingRecipe ? (
        <UserAddRecipe
          setUserAddingRecipe={setUserAddingRecipe}
          setUserHome={setUserHome}
          setIsHome={setIsHome}
        />
      ) : userHome ? (
        <UserHome
          users={users}
          userHome={userHome}
          setUserHome={setUserHome}
          setRecipes={setRecipes}
          recipes={recipes}
        />
      ) : singleViewRecipe ? (
        <SingleViewRecipe
          props={singleViewRecipe}
          setSingleViewRecipe={setSingleViewRecipe}
          setIsUpdating={setIsUpdating}
          handleClick={fetchSingleRecipe}
          setLoginPrompt={setLoginPrompt}
        />
      ) : userSingleViewRecipe ? (
        <UserSingleViewRecipe
          props={userSingleViewRecipe}
          setUserSingleViewRecipe={setUserSingleViewRecipe}
          setUserUpdating={setUserUpdating}
          handleClick={fetchSingleRecipe}
          // props={singleViewRecipe}
          // setSingleViewRecipe={setSingleViewRecipe}
          // handleClick={fetchSingleRecipe}
        />
      ) : generalView ? (
        <div id="recipes">
          <RecipesList
            recipes={recipes}
            handleClick={fetchSingleRecipe}
            setIsAddingRecipe={setIsAddingRecipe}
            setIsHome={setIsHome}
          />
        </div>
      ) : (
        <div id="recipes">
          <UserRecipesList
            loginPrompt={loginPrompt}
            isUpdating={isUpdating}
            isAddingRecipe={isAddingRecipe}
            setIsUpdating={setIsUpdating}
            setIsAddingRecipe={setIsAddingRecipe}
            setLoginPrompt={setLoginPrompt}
            recipes={recipes}
            handleClick={fetchSingleRecipeAsUser}
            setUserAddingRecipe={setUserAddingRecipe}
            setUserHome={setUserHome}
          />
        </div>
      )}
    </main>
  );
};
