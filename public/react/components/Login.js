import React, { useState } from "react";
import apiURL from "../api";
import { User } from "./User";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { UserHome } from "./UserHome";

export const Login = ({
  props,
  users,
  setIsLoggedIn,
  setIsHome,
  handleClick,
  setUserHome,
  userHome,
  setUserView,
}) => {
  //console.log(userHome);
  //make the form
  const [user_name, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function fetchUserProfile() {
    let newUser = {
      user_name: user_name,
      password: password,
    };
    try {
      await fetch(`${apiURL}/users/login`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(newUser),
      });
      await handleClick(loginUser.id);
      console, log(loginUser.id);
    } catch (err) {
      console.log("Error: ", err);
    }
  }

  return (
    <>
      <h1 class="title">Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label></Form.Label>
          <Form.Control
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            value={user_name}
            type="text"
            placeholder="Username"
          />
          <br></br>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="text"
            placeholder="Enter Password"
          />{" "}
        </Form.Group>
        <span class="button">
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              fetchUserProfile();
              setIsLoggedIn(false);
              setUserView(true);
              //setUserHome(true);
            }}
          >
            Login
          </Button>
          <br></br>
          <br></br>
          <Button
            variant="danger"
            type="submit"
            onClick={() => setIsHome(true)}
          >
            Cancel
          </Button>
        </span>
      </Form>
    </>
  );
};
