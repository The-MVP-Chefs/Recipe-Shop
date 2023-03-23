import React, { useState } from "react";
import apiURL from "../api";
import { User } from "./User";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

export const UserHome = ({ users, setUserHome, setRecipes }) => {
  //console.log("on user home!");
  async function handleViewAll(ev) {
    try {
      const response = await fetch(`${apiURL}/recipes`);
      const recipesData = await response.json();

      setRecipes(recipesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
    setUserHome(false);
  }

  // function refreshPage() {
  //   window.location.reload(false);
  // }
  //console.log(users.name);
  //need to get user props to show and also want to be able to go to User recipe List from here
  return (
    <>
      {/* <h1 class="title">Welcome to the Recipe Shop</h1> */}
      <h1 class="title">Login Successful!</h1>
      <h3 class="title">Welcome to the Recipe Shop </h3>
      <div class="homeImage">
        <img src="https://64.media.tumblr.com/b6c17381898290f3dbdc6273b381440e/101862d32d451115-41/s1280x1920/85350492ae8cbaa8b649bdf8305b213c06674744.jpg" />
      </div>
      <br></br>
      {/* <img src={users.user_image} alt={users.name} /> */}
      <span class="button">
        <Button
          variant="success"
          type="submit"
          onClick={(ev) => handleViewAll(ev)}
        >
          See What's Cooking
        </Button>
      </span>
    </>
  );
};

//need to get user props to show and also want to be able to go to User recipe List from here
