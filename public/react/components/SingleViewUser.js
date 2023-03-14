import React from "react";
import apiURL from "../api";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

export const SingleViewUser = ({props,setSingleViewUser,}) => {
console.log("IT WORKED!");
  async function fetchSingleUser(id) {
    try {
      const response = await fetch(`${apiURL}/users/${id}`);
      const user = await response.json();
      setSingleViewUser(user);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }
  function refreshPage() {
    window.location.reload(false);
  }
    return (
    <>
   
        <Card style={{ width: "18rem" }}>
           <Card.Img variant="top" src={props.user_image} />
           <Card.Body>
             <Card.Title>{<recipe className="recipeName"></recipe>}</Card.Title>
             <Card.Text>{props.isChef}</Card.Text>
          </Card.Body>
           <ListGroup className="list-group-flush">
            <ListGroup.Item>{props.dietary_restrictions}</ListGroup.Item>
           
          </ListGroup>
        
         </Card>
         
           
    </>
    );
};
