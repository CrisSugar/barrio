const express = require('express');
const router  = express.Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');
const passport = require('passport');


const login = (req, user) => {
  return new Promise((resolve,reject) => {
    req.login(user, err => {
      console.log('req.login ')
      console.log(user)

      if(err) {
        reject(new Error('Something went wrong'))
      }else{
        resolve(user);
      }
    })
  })
}


// SIGNUP

router.get('/signup', (req,res,next) => {
  res.render('auth/signup');
})

router.post('/signup', (req, res, next) => {

  const {username, password} = req.body;

  console.log('username', username)
  console.log('password', password)

  // Check for non empty user or password
  if (username === '' || password === ''){
    res.render('auth/signup',{message: "Indica un usuario y una contraseña"});
    return;
  }

  // Check if user exists in DB
  User.findOne({ username })
  .then(user => {
    if(user!== null) {
    res.render('auth/signup', { message: "El usuario ya existe"});
    return;
  }
  
    const salt     = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass
    });
    newUser.save((err) => {
      if(err) {
        res.render('auth/signup', { message: "Algo fue mal"});

      } else {
        res.json({created: true});
      }
    });
  })
  // .then( savedUser => login(req, savedUser)) // Login the user using passport
  // .then( user => res.json({status: 'signup & login successfully', user})) // Answer JSON
  .catch(e => next(e));
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    
    // Check for errors
    if (err) next(new Error('Something went wrong')); 
    if (!theUser) next(failureDetails)

    // Return user and logged in
    login(req, theUser).then(user => {
      console.log("entra en el login")
      console.log(req.user)
      res.status(200).json(req.user)
    });

  })(req, res, next);
});


router.get('/currentuser', (req,res,next) => {
  if(req.user){
    res.status(200).json(req.user);
  }else{
    // next(new Error('Not logged in'))
  }
})


router.get('/logout', (req,res) => {
  req.logout();
  res.status(200).json({message:'logged out'})
});


router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
})

module.exports = router;
