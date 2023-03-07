//will be a form taking the same info from models. On click will load the user page.
//will be a form with login and password. On click will load use home screen. 
import React, {useState} from 'react';
import apiURL from '../api';
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Register = ({setIsRegistered, setIsHome}) => {
//make the form
const [user_name, setUserName] = useState('');
const [password, setPassword] = useState('');
const [isChef, setIsChef] = useState('');
const [dietary_restrictions, setDietaryRestrictions] = useState('');
const [userImage, setUserImage] = useState('');
 

async function handleSubmit(ev) {
    //event.preventDefault();
    const response = await fetch(`${apiURL}/recipes/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {recipeName, userId, ingredients, isVegan, recipeImage}
      )
    });

    const data = await response.json();
    setIsAddingRecipe(null);
    refreshPage();
  }

  function refreshPage() {
    window.location.reload(false);
  }
    
    return  ( <>
    <h1 class="title">Registration</h1>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label></Form.Label>
        <Form.Control onChange={(e) => setUserName(e.target.value)} value={user_name} type="text" placeholder="User Name" />

        <Form.Label></Form.Label>
        <Form.Control onChange={(e) => setPassword(e.target.value)} value={password} type="text" placeholder="Enter Password" />
     
        <Form.Label></Form.Label>
        <Form.Control onChange={(e) => setIsChef(e.target.value)} value={isChef} type="text" placeholder="Are you a professional chef?" />
     
        <Form.Label></Form.Label>
        <Form.Control onChange={(e) => setDietaryRestrictions(e.target.value)} value={dietary_restrictions} type="text" placeholder="Any Dietary Restrictions?" />
      
        <Form.Label></Form.Label>
        <Form.Control onChange={(e) => setUserImage(e.target.value)} value={userImage} type="text" placeholder="Profile Picture" />

      </Form.Group>
      <span class="button">
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Register
      </Button>
      <br></br>
      <br></br>
      <Button variant="danger" type="submit" onClick={() => setIsHome(true)}>
          Cancel
        </Button>
        </span>
    </Form>
    </>
    );
}

