import React, { useState } from "react";
import apiURL from "../api";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

export const UserHome = ({ userHome, setUserHome, setRecipes }) => {
  console.log("on user home!");
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
        <img src="https://64.media.tumblr.com/247e7fcb54fb8ffde594fc428b047a97/3cfa81015891537b-61/s400x600/a7914e7fd605022b6deb3c60d8a4c5c400dbeeae.jpg" />
      </div>
      <br></br>
      <span class="button">
        <Button
          variant="success"
          type="submit"
          onClick={(ev) => handleViewAll(ev)}
        >
          View All Recipes
        </Button>
      </span>
    </>
  );
};
