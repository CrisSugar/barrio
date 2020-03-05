const express = require('express');
const router  = express.Router();
const Location = require('../models/Location');
const User = require('../models/User');
const Shop = require('../models/Shop');

//GET

// see landing page
// router.get('/barrio', (req,res,next) => {
//     res.render("landing-page" );
// })

router.get('/location', (req,res,next) => {
    Location.find(req.param)
    .then()

})

router.get('/location/:id' , (req, res, next) => {
    Location.findById(req.params.id)
      .then(location => {
        res.render("locations/location", { location });
      })
      .catch(err => console.log("error", err));
  });


  // router.get('/shop/:id', (req, res, next) => {
  //   let shopId = req.params.id;
  //   if (!/^[0-9a-fA-F]{24}$/.test(shopId)) { 
  //     return res.status(404).render('not-found');
  //   }
  //   Shop.findOne({'_id': shopId})
  //     .populate('location')
  //     .then(shop => {
  //       if (!shop) {
  //           return res.status(404).render('not-found');
  //       }
  //       res.render("shop-detail", { shop })
  //     })
  //     .catch(next)
  // });
   









module.exports = router;