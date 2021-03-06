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

router.post("/signup", (req, res, next) => { 
  const {username, password, neighbourhood, role } = req.body;
  if (!username || !password) {
    next(new Error("You must provide valid credentials"));
  }

  // Check if user exists in DB
  User.findOne({ username })
    .then(foundUser => {
      if (foundUser) throw new Error("Username already exists");
      const salt = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);

      return new User({
        neighbourhood,
        username,
        password: hashPass,
        role
      }).save();
    })
    .then(savedUser =>{
      console.log("perrrooooooo")
      console.log(savedUser)
      login(req, savedUser)
    }) // Login the user using passport console.log()
    .then(user => {
      console.log("guacamayoooo")
      res.json({ status: "signup & login successfully", user })
    }) // Answer JSON
    .catch(e => next(e));
});




router.post("/login", (req, res, next) => { console.log("logueass??")
  passport.authenticate("local", (err, theUser, failureDetails) => {
    //     // Check for errors
    if (err) next(new Error("Something went wrong"));
    if (!theUser) next(failureDetails);

    //     // Return user and logged in
    login(req, theUser).then(user => {
      //       // console.log("entra en el login")
      //       // console.log(req.user)
      res.status(200).json(req.user);
    });
  })(req, res, next);
});

router.get("/currentuser", (req, res, next) => {
  if (req.user) {
    res.status(200).json(req.user);
  } else {
    console.log("entra en el else")
    next(new Error("Not logged in"));
    res.status(500).json({mal : true})
  }
});

router.get("/logout", (req, res) => {
  //   ///esto era get y puse post
  // res.cookie('connect.sid', '', {expires: new Date(1), path: '/' });
  req.logout();
  // res.clearCookie('connect.sid', { path: '/Barrio' });
  // res.redirect('/Barrio');
  res.status(200).json({ message: "logged out" });
});

router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = router;
