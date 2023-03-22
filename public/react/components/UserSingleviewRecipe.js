// import React from "react";
// import apiURL from "../api";
// //bootstrap
// import "bootstrap/dist/css/bootstrap.min.css";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import ListGroup from "react-bootstrap/ListGroup";
// //import { isNullLiteral } from "@babel/types";

// export const UserSingleViewRecipe = ({
//   props,
//   setUserSingleViewRecipe,
//   setIsDeleted,
//   isDeleted,
//   userUpdating,
//   setUserUpdating,
//   userUpdating,
// }) => {
//   async function handleDelete(ev) {
//     const response = await fetch(`${apiURL}/recipes/${props.id}`, {
//       method: "DELETE",
//     });
//     const data = await response.json();
//     setUserSingleViewRecipe(false);
//     setIsDeleted(true);
//     refreshPage();
//   }

//   function refreshPage() {
//     window.location.reload(false);
//   }
//   console.log("On the User Single Recipe Comp");
//   console.log(userUpdating);
//   return (
//     <>
//       <Card style={{ width: "18rem" }}>
//         <Card.Img variant="top" src={props.recipeImage} />
//         <Card.Body>
//           <Card.Title>{<recipe className="recipeName"></recipe>}</Card.Title>
//           <Card.Text>{props.ingredients}</Card.Text>
//         </Card.Body>
//         <ListGroup className="list-group-flush">
//           <ListGroup.Item>{props.isVegan}</ListGroup.Item>
//         </ListGroup>
//         <Card.Body>
//           <Button onClick={handleDelete} variant="danger">
//             Delete
//           </Button>
//           <br></br>
//           <br></br>
//           <Button variant="success" onClick={() => setUserUpdating(true)}>
//             Update
//           </Button>
//         </Card.Body>
//       </Card>
//       <br></br>
//       <Button variant="primary" onClick={() => setUserSingleViewRecipe(null)}>
//         Back to All Items
//       </Button>
//     </>
//   );
// };

import React from "react";
import apiURL from "../api";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

export const UserSingleViewRecipe = ({
  props,
  setUserSingleViewRecipe,
  isDeleted,
  setIsDeleted,
  userUpdating,
  setUserUpdating,
}) => {
  async function handleDelete(ev) {
    const response = await fetch(`${apiURL}/recipes/${props.id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    setUserSingleViewRecipe(null);
    setIsDeleted(true);
    refreshPage();
  }

  function refreshPage() {
    window.location.reload(false);
  }
  console.log("You are on UserSingleViewRecipe comp!");
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
        </ListGroup>
        <Card.Body>
          <Button onClick={handleDelete} variant="danger">
            Delete
          </Button>
          <br></br>
          <br></br>
          <Button variant="success" onClick={() => setUserUpdating(true)}>
            Update
          </Button>
        </Card.Body>
      </Card>
      <br></br>
      <Button variant="primary" onClick={() => setUserSingleViewRecipe(null)}>
        Back to All Items
      </Button>
    </>
  );
};
