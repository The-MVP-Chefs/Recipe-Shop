import React, {useEffect, useState} from 'react';
import apiURL from '../api';

export const UpdateRecipe = ({props, isUpdating, setIsUpdating, setSingleViewRecipe, isAddingRecipe, setIsAddingRecipe}) => {
//make the form
const [recipeName, setRecipe] = useState('');
const [userId, setUserId] = useState('');
const [ingredients, setIngredients] = useState('');
const [isVegan, setIsVegan] = useState('');
const [recipeImage, setRecipeImage] = useState('');   

async function handleUpdate(ev) {
    const response = await fetch(`${apiURL}/recipes/${props.id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {recipeName, userId, ingredients, isVegan, recipeImage}
      )
    });
    //const data = await response.json();
    setSingleViewRecipe(null);
    setIsUpdating(null);
    refreshPage();
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
  }

 
    
    return  ( <>
    <div id="h2"><h2>Update an Recipe</h2></div>
     <form>
    <label>
        <p>
        <input type="text"  size='50' name="recipeName" placeholder="Recipe Name" value={ recipeName } onChange={ev => setRecipe(ev.target.value)} /> 
        </p>
        <p>
        <input type="text"  size='50' name="userId" placeholder="Vegan?" value={ userId } onChange={ev => setUserId(ev.target.value)}/> 
        </p>
        <p>
        <input type="text" size='50' name="ingredients" placeholder="Ingredients" value={ ingredients } onChange={ev => setIngredients(ev.target.value)}/> 
        </p>
        <p>
        <input type="text"  size='50' name="isVegan" placeholder="userId" value={ isVegan } onChange={ev => setIsVegan(ev.target.value)}/> 
        </p>
        <p>
        <input type="text" size='50' name="recipeImage"  placeholder="Image" value={ recipeImage } onChange={ev => setRecipeImage(ev.target.value)}/>
        </p> 
    </label>
    </form>
    <div id="buttons">
    <button onClick={handleUpdate} id="add">Update this Recipe</button>
    <button onClick={() => setIsUpdating(false)} id="back">Back to Recipe</button>
    </div>
    </>
    );
}
