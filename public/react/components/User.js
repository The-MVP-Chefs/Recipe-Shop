//only have this here becoause i get an error when i delte it. Think i have to reinstall node or soemthing idk.
import React from "react";

export const User = (props) => {
  return (
    <>
      <h3>{props.user.name}</h3>
      <img src={props.user.user_image} alt={props.user.name} />
    </>
  );
}; 