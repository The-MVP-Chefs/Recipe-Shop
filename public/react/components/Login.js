import React, { useState } from "react";
import apiURL from "../api";
import { User } from "./User";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Login = ({props,users, setIsLoggedIn, setIsHome ,setSingleViewUser }) => {
 
  //make the form
  const [user_name, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function fetchUserProfile() {
    //console.log('In fetch user profile');
    let newUser = {
      user_name  : user_name,
      password : password
    }
    try {

      await fetch(`${apiURL}/users/login`, {
        method: 'POST',

        headers: {

          'Content-Type': 'application/json',

          },

        body: JSON.stringify(newUser),

      });
     
      
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
                //console.log(user_name)
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
            // setIsHome(false)
            setIsLoggedIn(false)
            fetchUserProfile() ;
            //Trying to get this to go the SingleViewUser compoonent to reflect the users profile data.
        // Right now it will go to the component but will not return anything because it says 
           //"cant read properties of undefied". Not sure how to extract the id and get the next component to rend it correctly
            setSingleViewUser(true);
            
           
            
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
