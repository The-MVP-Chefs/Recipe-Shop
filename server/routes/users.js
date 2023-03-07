
const express = require("express");
const router = express();
// This is for the database
const { seed } = require("../seed");
const { User } = require("../models");
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
router.use(express.json());
router.use(express.urlencoded({ extended:true}));

// GET / all users
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    next(error);
  }
});
//get one user
router.get("/:id", async (req, res, next) => {
  try {
    const users = await User.findOne({
      where: {
        id: req.params.id
      }
    });
    res.json(users);
  } catch (error) {
    next(error);
  }
});


// const authUser = async (req, res, next) => {
//   const auth = req.header("Authorization");
//   console.log("Auth: ", auth);

//   if (!auth) {
//     console.log("The user isn't authorized...");
//     next(); // move on to the next function
//   } else {
//     // Array Deconstruction, we don't need the Bearer part, only need token
//     const [, token] = auth.split(" "); // spliting the authentication string by space
//     console.log("Token: ", token);
//     if (token == null) return res.sendStatus(401);

//     // Check the validity of the token
//     jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
//       if (err) return res.sendStatus(403);
//       req.user = user;
//       next();
//     });
//   }
// };



//register a new user
router.post("/register", async (req, res, next) => {
  try {
    const addUser = await User.create(req.body); 
    res.json(await User.findAll());
  } catch (error) {
    next(error);
  }
});



// DELETE /items/:id
router.delete("/:id", async (req, res, next) => {
  try {
    let user = await User.findByPk(req.params.id);
    await user.destroy();
    res.send(user);
  } catch (error) {
    next(error);
  }
});
router.post("/login", async (req, res, next) => {
  try {
    let { user_name, password } = req.body;
    let loginUser = await User.findOne({
      where: { user_name },
    });

    // Authenticate the loginUser
    let isMatching = await bcrypt.compare(password, loginUser.password);
    if (isMatching) {
      // If True, the loginUser successfully logged in.
      //  Deconstructing the User Object by its properties/fields.
      const { id, user_name } = loginUser;
     

      // Generate a token with payload and a secret
     
      res.send({ message: "Successful Login"});
    } else {
      res.send("Please enter the correct password and try again.");
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

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



//PUT /user/:id (updates user)
router.put("/:id", async (req, res, next) => {
  router.use(express.json());
  try {
    const [updatedUser, updatedUsers] = await User.update(req.body, {
      where: {
        id: req.params.id
      },
      returning: true
    });
    res.send(updatedUser[0]);
  } catch (error) {
    next(error);
  }
});


module.exports = router;
