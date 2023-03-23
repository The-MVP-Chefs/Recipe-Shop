import React, { useEffect, useState } from "react";
import apiURL from "../api";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const UserUpdateRecipe = ({
  props,
  userUpdating,
  setUserUpdating,
  setUserSingleViewRecipe,
  userAddingRecipe,
  setUserAddingRecipe,
}) => {
  //make the form
  const [recipeName, setRecipe] = useState("");
  const [userId, setUserId] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [isVegan, setIsVegan] = useState("");
  const [recipeImage, setRecipeImage] = useState("");

  async function handleUpdate(ev) {
    // setUserUpdating(false);
    // setUserAddingRecipe(false);
    const response = await fetch(`${apiURL}/recipes/${props.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recipeName,
        userId,
        ingredients,
        isVegan,
        recipeImage,
      }),
    });
    const data = await response.json();

    setUserSingleViewRecipe(null);
    setUserUpdating(null);
    //refreshPage();
  }

  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() => {
    getRecipeDetails();
  }, []);

  const getRecipeDetails = async () => {
    let result = await fetch(`${apiURL}/recipes/${props.id}`);
    result = await result.json();
    console.warn(result);
    setRecipe(result.recipeName);
    setUserId(result.userId);
    setIngredients(result.ingredients);
    setIsVegan(result.isVegan);
    setRecipeImage(result.recipeImage);
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Recipe Name</Form.Label>
          <Form.Control
            onChange={(e) => setRecipe(e.target.value)}
            value={recipeName}
            type="text"
            placeholder="Recipe Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Ingredients</Form.Label>
          <Form.Control
            onChange={(e) => setIngredients(e.target.value)}
            value={ingredients}
            type="text"
            placeholder="Ingredients"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Vegan?</Form.Label>
          <Form.Control
            onChange={(e) => setIsVegan(e.target.value)}
            value={isVegan}
            type="text"
            placeholder="Vegan?"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>userId</Form.Label>
          <Form.Control
            onChange={(e) => setUserId(e.target.value)}
            value={userId}
            type="number"
            placeholder="userId"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Image</Form.Label>
          <Form.Control
            onChange={(e) => setRecipeImage(e.target.value)}
            value={recipeImage}
            type="text"
            placeholder="Image"
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleUpdate}>
          Update This Recipe
        </Button>
        <br></br>
        <br></br>
        <Button
          variant="primary"
          type="submit"
          onClick={() => setUserUpdating(false)}
        >
          Back
        </Button>
      </Form>
    </>
  );
};
