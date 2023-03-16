import React, { useState } from "react";
import apiURL from "../api";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Login = ({ setIsLoggedIn, setIsHome ,setSingleViewUser }) => {
 
  //make the form
  const [user_name, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(ev) {
 
//login a user and check that their info matches database
// router.post("/login", authUser, async (req, res, next) => {
//   try {
//     let { user_name, password } = req.body;
//     let loginUser = await User.findOne({
//       where: { user_name },
//     });

//     // Authenticate the loginUser
//     let isMatching = await bcrypt.compare(password, loginUser.password);
//     if (isMatching) {
//       // If True, the loginUser successfully logged in.
//       //  Deconstructing the User Object by its properties/fields.
//       const { id, user_name } = loginUser;
//       let payload = { id, user_name };

//       // Generate a token with payload and a secret
//       const token = jwt.sign(payload, ACCESS_TOKEN_SECRET);
//       res.send({ message: "Successful Login", token });
//     } else {
//       res.send("Please enter the correct password and try again.");
//     }
//   } catch (error) {
//     console.error(error);
//     next(error);
//   }
// });


//  checks if someone is a chef
//write logic to check if a person is logged in or not. 
// router.post("/users", authUser, async (req, res, next) => {
//   const { isUser } = req.body;
//   if (!isChef) {
//     res.send({ message: "Not authorized, please login or register" });
//   }
//   try {
//     const user = await User.create(req.body);
//     res.send(user);
//   } catch (error) {
//     next(error);
//   }
// });

 


 
 
 


    
  }
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <>
      <h1 class="title">Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label></Form.Label>
          <Form.Control
            onChange={(e) => setUserName(e.target.value)}
            value={user_name}
            type="text"
            placeholder="Username"
          />
          <br></br>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="text"
            placeholder="Enter Password"
          />{" "}
        </Form.Group>
        <span class="button">
        <Button
          variant="primary"
          type="submit"
          onClick={(ev) => handleLogin(ev)}
        >
          Login
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
};
