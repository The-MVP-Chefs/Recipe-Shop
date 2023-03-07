import React from "react";
import apiURL from "../api";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

export const SingleViewRecipe = ({props,setSingleViewRecipe, isDeleted, setIsDeleted, setIsUpdating}) => {
  async function handleDelete(ev) {
    const response = await fetch(`${apiURL}/recipes/${props.id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    setSingleViewRecipe(null);
    setIsDeleted(true);
    refreshPage();
  }

  function refreshPage() {
    window.location.reload(false);
  }
    return (
    <>
   
        <Card style={{ width: "18rem" }}>
           <Card.Img variant="top" src={props.recipeImage} />
           <Card.Body>
             <Card.Title>{<recipe className="recipeName"></recipe>}</Card.Title>
             <Card.Text>{props.ingredients}</Card.Text>
          </Card.Body>
           <ListGroup className="list-group-flush">
            <ListGroup.Item>{props.isVegan}</ListGroup.Item>
            {/* <ListGroup.Item>User Id{props.userId}</ListGroup.Item> */}
          </ListGroup>
          <Card.Body>
            <Button onClick={handleDelete} variant="danger">
               Delete
             </Button>
             <br></br>
             <br></br>
             <Button variant="success" onClick={()=>setIsUpdating(true)}>Update</Button>
           </Card.Body>
         </Card>
         <br></br>
           <Button variant="primary" onClick={() => setSingleViewRecipe(null)}>
             Back to All Items
           </Button>
    </>
    );
};
