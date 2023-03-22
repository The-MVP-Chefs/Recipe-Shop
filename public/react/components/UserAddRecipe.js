import React, { useState } from "react";
import apiURL from "../api";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const UserAddRecipe = ({
  props,
  setUserAddingRecipe,
  setUserHome,
  setIsHome,
}) => {
  //make the form
  const [recipeName, setRecipe] = useState("");
  const [userId, setUserId] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [isVegan, setIsVegan] = useState("");
  const [recipeImage, setRecipeImage] = useState("");

  async function handleSubmit(ev) {
    ev.preventDefault();
    setIsHome(false);
    const response = await fetch(`${apiURL}/recipes/`, {
      method: "POST",
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

    setUserAddingRecipe(null);
    setUserHome(true);

    // refreshPage();
  }

  function refreshPage() {
    window.location.reload(false);
  }

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

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Add My Recipe
        </Button>
      </Form>
    </>
  );
};
