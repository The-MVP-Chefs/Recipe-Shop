import React from "react";
//import { User } from "./User";
import apiURL from "../api";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//this should show the users info right now its saysing undefined.
export const SingleUserView = (props) => {
  return (
    <>
 
     <h1>Login Successful! Welcome Back {props.user.user_name}</h1>
    <h3>{props.user.user_name}</h3>
    <img src={props.user.user_image} alt={props.user.user_name} />
  
    </>
  );
}
 