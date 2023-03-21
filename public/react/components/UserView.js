//the user view will allowed to update/delete and add a recipe.
//import React, { useState } from "react";
import React from "react";

import apiURL from "../api";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

export const UserView = ({ userView, userHome, setUserHome, setUserView }) => {
  //console.log(userHome);
  // console.log(userView);
  // setUserView(false);
  // setUserHome(true);
  // console.log(userHome);
  // console.log(userView);

  return (
    <>
      <h1>Login Successful!</h1>
      <span class="button">
        <Button
          variant="success"
          type="submit"
          onClick={() => {
            setUserView(null);
            setUserHome(true);
          }}
        >
          Return Home
        </Button>
      </span>
    </>
  );
};
