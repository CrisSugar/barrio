const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../../models/User");
const passport = require("passport");

const login = (req, user) => {
  return new Promise((resolve, reject) => {
    req.login(user, err => {
      // console.log('req.login ')
      // console.log(user)

      if (err) {
        reject(new Error("Something went wrong"));
      } else {
        resolve(user);
      }
    });
  });
};

// SIGNUP

// router.get('/signup', (req,res,next) => {
//   res.render('auth/signup');
// })

router.post("/signup", (req, res, next) => {
  const { username, password, role } = req.body;

  // console.log('username', username)
  // console.log('password', password)

  // Check for non empty user or password
  // if (username === '' || password === ''){
  //   res.render('auth/signup',{message: "Indica un usuario y una contraseña"});
  //   return;
  // }

  if (!username || !password) {
    next(new Error("You must provide valid credentials"));
  }

  // Check if user exists in DB
  // User.findOne({ username })
  // .then(user => {
  //   if(user!== null) {
  //   res.render('auth/signup', { message: "El usuario ya existe"});
  //   return;
  // }

  User.findOne({ username }).then(foundUser => {
    if (foundUser === null) {
      const salt = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);

      User.create({
        username,
        password: hashPass,
        role
      })

        .then(savedUser => login(req, saveUser))
        .then(user =>
          res.json({
            status: "signup & login succesfully",
            user
          })
        );
    } else {
      console.error("El usuario ya existe");
      res.status(401).send("El usuario ya existe");
    }
  });
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, theUser, failureDetails) => {
    // Check for errors
    if (err) next(new Error("Something went wrong"));
    if (!theUser) next(failureDetails);

    // Return user and logged in
    login(req, theUser).then(user => {
      // console.log("entra en el login")
      // console.log(req.user)
      res.status(200).json(req.user);
    });
  })(req, res, next);
});

// router.get('/currentuser', (req,res,next) => {
//   if(req.user){
//     res.status(200).json(req.user);
//   }else{
//     next(new Error('Not logged in'))
//   }
// })

router.get("/currentuser", (req, res, next) => {
  if (req.user) {
    // console.log(req.user);
    User.findById(req.user._id)
    .then(user => {
      // console.log(user);
      res.status(200).json(user);
    });
  } else {
    next(new Error("Not logged in"));
  }
});

router.post("/logout", (req,res) => {
  req.logout();
  res.status(200).json({message:"logged out"})
});

// router.post("/logout", (req, res) => {
//   ///esto era get y puse post
//   req.logout();
//   res.status(200).json({ message: "logged out" });
// });

// router.use((err, req, res, next) => {
//   res.status(500).json({ message: err.message });
// });

module.exports = router;
