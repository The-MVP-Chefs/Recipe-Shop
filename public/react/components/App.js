import React, { useState, useEffect } from "react";
import { UsersList } from "./UsersList";
import { RecipesList } from "./RecipesList";
import { SingleViewRecipe } from "./SingleViewRecipe";
import { UpdateRecipe } from "./UpdateRecipe";
import { AddRecipe } from "./AddRecipe";
import{Home} from "./Home";
import{Login} from "./Login";
import{Register} from "./Register";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import apiURL from "../api";

export const App = () => {
  const [users, setUsers] = useState([]);
  const [isHome, setIsHome] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const [singleViewRecipe, setSingleViewRecipe] = useState(null);
  const [singleViewUser, setSingleViewUser] = useState(null);
  const [isAddingRecipe, setIsAddingRecipe] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

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

  async function fetchSingleRecipe(id) {
    try {
      const response = await fetch(`${apiURL}/recipes/${id}`);
      const recipe = await response.json();
      setSingleViewRecipe(recipe);
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
        <Home setIsHome={setIsHome} setRecipes={setRecipes} setIsLoggedIn={setIsLoggedIn}  setSingleViewUser={setSingleViewUser} setIsRegistered={setIsRegistered} />
      ) : isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} setIsHome={setIsHome} />
      ) : singleViewUser ? (
        <SingleViewUser
          props={singleViewUser}
          setSingleViewUser={setSingleViewUser}
          handleClick={fetchSingleUser}
        />): isRegistered ? (
        <Register setIsRegistered={setIsRegistered} setIsHome={setIsHome} />
      ) : isUpdating ? (
        <UpdateRecipe
          props={singleViewRecipe}
          setIsUpdating={setIsUpdating}
          isUpdating={isUpdating}
          setSingleViewRecipe={setSingleViewRecipe}
        />
      ) : isAddingRecipe ? (
        <AddRecipe setIsAddingRecipe={setIsAddingRecipe} />
      ) : singleViewRecipe ? (
        <SingleViewRecipe
          props={singleViewRecipe}
          setSingleViewRecipe={setSingleViewRecipe}
          handleClick={fetchSingleRecipe}
        />
      ) : (
        <div id="recipes">
          <RecipesList
            recipes={recipes}
            handleClick={fetchSingleRecipe}
            setIsAddingRecipe={setIsAddingRecipe}
            setIsHome={setIsHome}
          />
        </div>
      )}
    </main>
  );
};
