const express = require('express');
const router  = express.Router();
const Location = require('../../models/Location');
const User = require('../../models/User');
const Shop = require('../../models/Shop');

//GET



router.get('/location', (req,res,next) => {
    Location.find(req.param)
    .then(allLocations => res.jason(allLocations));

})

router.get('/location/:id' , (req, res, next) => {
    Location.findById(req.params.id)
      .then(allLocations => {
        res.json(allLocations);
      })
      .catch(err => console.log("error", err));
  });


   









module.exports = router;