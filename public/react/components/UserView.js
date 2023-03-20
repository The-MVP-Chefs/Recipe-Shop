//the user view will allowed to update/delete and add a recipe.
import React, { useState } from "react";
import apiURL from "../api";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

export const UserView = ({ setUserHome, setUserView }) => {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <>
      <h1>Login Successful!</h1>
      <span class="button">
        <Button
          variant="success"
          type="submit"
          onClick={() => setUserView(false) && setUserHome(true)}
        >
          Return Home
        </Button>
      </span>
    </>
  );
};
