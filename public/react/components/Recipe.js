import React from 'react';
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";





export const Recipe = (props) => {

 
 
  return (
    <>
      <div className="test "> 
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.recipe.recipeImage} />
          <Card.Body>
            <Card.Title>{props.recipe.recipeName}</Card.Title>
            <Card.Text>{props.recipe.ingredients}</Card.Text>
            <Button
              variant="primary"
              onClick={() => props.handleClick(props.recipe.id)}
            >
              View Recipe Details
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

