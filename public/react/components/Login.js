import React, { useState } from "react";
import apiURL from "../api";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Login = ({ setIsLoggedIn, setIsHome ,setSingleViewUser }) => {
 
  //make the form
  const [user_name, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function fetchUserProfile() {
    let beyonce = {
      username  : "Beyonce",
      password : "abc123"
    }
    try {

      await fetch(`${apiURL}/login`, {

        method: 'POST',

        headers: {

          'Content-Type': 'application/json',

          },

        body: JSON.stringify(beyonce),

      });
      console.log(beyonce);
      // setItem(initialItem);

      // setIsAddingItem(false);

      // fetchItems();

    } catch (err) {

      console.log('Error: ', err);

    }

  }

  return (
    <>
      <h1 class="title">Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label></Form.Label>
          <Form.Control
            onChange={(e) =>  {
                setUserName(e.target.value)
                console.log(user_name)
              }
            }
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
          onClick={()=> 
          {
            setIsHome(false)
            fetchUserProfile() 
            
          }}
        >
          Login
        </Button>
        <br></br>
        <br></br>
        <Button variant="danger" type="submit" onClick={() => setIsHome(true)}>
          Cancel
        </Button>
        </span>
      </Form>
    </>
  );
};
