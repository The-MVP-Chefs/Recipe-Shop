//will be a form with login and password. On click will load use home screen.
import React, { useState } from "react";
import apiURL from "../api";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";


export const Home = ({ setIsHome, setRecipes,setIsLoggedIn, setIsRegistered }) => {
 
  async function handleViewAll(ev) {
    try {
       
      const response = await fetch(`${apiURL}/recipes`);
      const recipesData = await response.json();
      
      setRecipes(recipesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
    setIsHome(false);
  }

  function refreshPage() {
    window.location.reload(false);
  }
 

  return (
    <>
    <h1 class="title">Welcome to the Recipe Shop</h1>
      <div class="homeImage">
        <img  src="https://64.media.tumblr.com/247e7fcb54fb8ffde594fc428b047a97/3cfa81015891537b-61/s400x600/a7914e7fd605022b6deb3c60d8a4c5c400dbeeae.jpg" />
      </div>
      <br></br>
<span class="button">
      <Button
        variant="success"
        type="submit"
        onClick={(ev)=> handleViewAll(ev) }
      >
        View Public Recipes
      </Button>
      <br></br>
      <br></br>
      <Button
        variant="primary"
        type="submit"
        onClick={() =>  setIsLoggedIn(true) && setIsHome(false)  }
      >
        Login
      </Button>
      <br></br>
      <br></br>

      <Button
        variant="warning"
        type="submit"
        onClick={() => setIsRegistered(true) && setIsHome(false)}
      >
        Register Account
      </Button>
      </span>
    </>
  );
};
