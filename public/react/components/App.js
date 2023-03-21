import React, { useState, useEffect } from "react";
import apiURL from "../api";
import { RecipesList } from "./RecipesList";
import { SingleViewRecipe } from "./SingleViewRecipe";
import { Home } from "./Home";
import { Login } from "./Login";
import { Register } from "./Register";
import { LoginPrompt } from "./LoginPrompt";
//user specific components
import { UserView } from "./UserView";
import { UserHome } from "./UserHome";
import { UserAddRecipe } from "./UserAddRecipe";
import { UserUpdateRecipe } from "./UserUpdateRecipe";
import { UserSingleViewRecipe } from "./UserSingleviewRecipe";

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
  //pieces of state exclusive to users
  const [userView, setUserView] = useState(false);
  const [userHome, setUserHome] = useState(false);
  const [userSingleViewRecipe, setUserSingleViewRecipe] = useState(null);
  const [userAddingRecipe, setUserAddingRecipe] = useState(false);
  const [userUpdating, setUserUpdating] = useState(false);

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
        <Home
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
          setUserView={setUserView}
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
          setUserView={setUserView}
        />
      ) : isRegistered ? (
        <Register
          setIsRegistered={setIsRegistered}
          setIsHome={setIsHome}
          setUserView={setUserView}
        />
      ) : isUpdating ? (
        <LoginPrompt
          setIsLoggedIn={setIsLoggedIn}
          setLoginPrompt={setLoginPrompt}
          setIsRegistered={setIsRegistered}
          setIsHome={setIsHome}
          setSingleViewRecipe={setSingleViewRecipe}
          setUserView={setUserView}
        />
      ) : userUpdating ? (
        <UserUpdateRecipe
          setUserHome={setUserHome}
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
          setUserView={setUserView}
        />
      ) : userAddingRecipe ? (
        <UserAddRecipe
          setIsLoggedIn={setIsLoggedIn}
          setLoginPrompt={setLoginPrompt}
          setIsRegistered={setIsRegistered}
          setIsHome={setIsHome}
          setSingleViewRecipe={setSingleViewRecipe}
          setUserView={setUserView}
        />
      ) : userView ? (
        <UserView
          users={users}
          setUserHome={setUserHome}
          userHome={userHome}
          setUserView={setUserView}
          userView={userView}
        />
      ) : userHome ? (
        <UserHome
          users={users}
          userHome={userHome}
          setUserHome={setUserHome}
          setRecipes={setRecipes}
          recipes={recipes}
          //handleClick={fetchSingleRecipe}
          // setUserAddingRecipe={setUserAddingRecipe}
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
          setUserUpdating={setUserSingleViewRecipe}
          handleClick={fetchSingleRecipe}
          setLoginPrompt={setLoginPrompt}
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

//   return (
//     <main>
//       {isHome ? (
//         // left is prop right is function}
//         <Home
//           setIsHome={setIsHome}
//           setRecipes={setRecipes}
//           setIsLoggedIn={setIsLoggedIn}
//           setIsRegistered={setIsRegistered}
//         />
//       ) : isLoggedIn ? (
//         <Login
//           users={users}
//           setIsLoggedIn={setIsLoggedIn}
//           setIsHome={setIsHome}
//         />
//       ) : loginPrompt ? (
//         <LoginPrompt
//           setIsLoggedIn={setIsLoggedIn}
//           setLoginPrompt={setLoginPrompt}
//           setIsRegistered={setIsRegistered}
//           setIsHome={setIsHome}
//           setSingleViewRecipe={setSingleViewRecipe}
//         />
//       ) : isRegistered ? (
//         <Register setIsRegistered={setIsRegistered} setIsHome={setIsHome} />
//       ) : isUpdating ? (
//         <UpdateRecipe
//           props={singleViewRecipe}
//           setIsUpdating={setIsUpdating}
//           isUpdating={isUpdating}
//           setSingleViewRecipe={setSingleViewRecipe}
//         />
//       ) : isAddingRecipe ? (
//         <AddRecipe setIsAddingRecipe={setIsAddingRecipe} />
//       ) : singleViewRecipe ? (
//         <SingleViewRecipe
//           props={singleViewRecipe}
//           setSingleViewRecipe={setSingleViewRecipe}
//           setIsUpdating={setIsUpdating}
//           handleClick={fetchSingleRecipe}
//         />
//       ) : (
//         <div id="recipes">
//           <RecipesList
//             recipes={recipes}
//             handleClick={fetchSingleRecipe}
//             setIsAddingRecipe={setIsAddingRecipe}
//             setIsHome={setIsHome}
//           />
//         </div>
//       )}
//     </main>
//   );
// };
