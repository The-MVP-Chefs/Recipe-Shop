//the user view will allowed to update/delete and add a recipe.
//import React, { useState } from "react";
import React from "react";

import apiURL from "../api";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

export const UserView = ({
  users,
  userView,
  userHome,
  setUserHome,
  setUserView,
}) => {
  console.log(users.user_name);

  return (
    <>
      <h1>Login Successful! {users.user_name}</h1>
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
