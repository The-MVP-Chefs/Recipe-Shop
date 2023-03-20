import React, { useState } from "react";
import apiURL from "../api";
import { User } from "./User";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Login = ({
  props,
  users,
  setIsLoggedIn,
  setIsHome,
  setUserView,
}) => {
  //make the form
  const [user_name, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function fetchUserProfile() {
    //console.log('In fetch user profile');
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
              setUserView(true);
              setIsLoggedIn(false);
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
