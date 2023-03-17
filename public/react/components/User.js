import React from 'react';

export const User = (props) => {
  console.log("WORKING!")

  return (
    <>
 
     <h1>Login Successful! Welcome Back {props.user.user_name}</h1>
    <h3>{props.user.user_name}</h3>
    <img src={props.user.user_image} alt={props.user.user_name} />
  
    </>
  );
};

 

	