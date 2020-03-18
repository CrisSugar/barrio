const express = require("express");
const router = express.Router();
const Location = require("../../models/Location");
const User = require("../../models/User");
const Shop = require("../../models/Shop");
const Offer = require("../../models/Offer");
const Notification = require("../../models/Notification");
const uploader = require("../../configs/cloudinary-setup");





///  ROUTES OF SHOPS ///////////////////////////////////////////////

/// show all
router.get("/shops", (req, res, next) => {
  Shop.find().then(allShops => {
    res.json(allShops);
  });
});

/// show one
router.get("/shop/:id", (req, res, next) => {
  Shop.findById(req.params.id).then(allShops => {
    res.json(allShops);
  });
});

router.get("/shop/:neighbourhood", (req, res, next) => {
  Shop.find(req.params.neighbourhood).then(allShops => {
    res.json(allShops);
  });
});

/// create one
router.post("/shop/new", (req, res, next) => {
  const {
    neighbourhood,
    name,
    sector,
    description,
    imageUrl,
    mobile,
    web,
    offers,
    year,
    location
  } = req.body;

  Shop.create(req.body).then(allShops => res.json(allShops));
});

/// update one
// router.put("/shop/:id", (req, res, next) => {
//   Shop.findByIdAndUpdate(req.params.id, req.body).then(() => {
//     res.json({ updated: true, _id: req.params.id });
//   });
// });

/// delete one
router.delete("/shopdelete/:id", (req, res, next) => {
  Shop.findByIdAndDelete(req.params.id)
    .then(() => res.json({ status: "Shop delete" }))

    .catch(err => next(new Error(err)));
});

/// CLOUDINARY-ROUTES  //////////////////////////////////////////////////

router.post("/upload", uploader.single("imageUrl"), (req, res, next) => {
  // console.log('file is: ', req.file)

  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }
  // get secure_url from the file object and save it in the
  // variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
  res.json({ secure_url: req.file.secure_url });
});

/// ROUTES OF OFFERS  //////////////////////////////////////////////////

/// show all

// router.get("/offers", (req, res, next) => {
//   Offer.find().then(allOffers => {
//     res.json(allOffers);
//   });
// });

router.get("/offers", (req, res, next) => {
  Offer.find().then(allOffers => {
    res.json(allOffers);
  });
});

/// show one
router.get("/offer/:id", (req, res, next) => {
  Offer.findById(req.params.id).then(allOffers => {
    res.json(allOffers);
  });
});

/// create one
// router.post("/offer/new", (req, res, next) => {
//   Offer.create(req.params.id, req.body).then(() => res.redirect("/offers"));
// });

router.post("/offer/new", (req, res, next) => {
  const { neighbourhood, shop, product, prize, offerPrize } = req.body;

  Offer.create(req.body).then(allOffers => res.json(allOffers));
});

/// update one
router.put("/offer/:id", (req, res, next) => {
  Offer.findByIdAndUpdate(req.params.id, req.body).then(() =>
    res.json({ updated: true })
  );
});

/// delete one
router.delete("/offer/:id", (req, res, next) => {
  Offer.findByIdAndDelete(req.params.id).then(() =>
    res.json({ delete: true, _id: req.params.id })
  );
});

/// ROUTES OF NOTIFICATIONS  //////////////////////////////////////////////////////////

/// show all
router.get("/notifications", (req, res, next) => {
  Notification.find().then(allNotifications => res.json(allNotifications));
});

/// show one
router.get("/notification/:id", (req, res, next) => {
  Notification.findById(req.params.id).then(allNotifications =>
    res.json(allNotifications)
  );
});

/// create one
// router.post("/notification/new", (req, res, next) => {
//   let aviso = {
//     neighbourhood : req.body.neighbourhood,
//     commentary: req.body.commentary
//   }
//   Notification.create(aviso).then(() =>
//     res.json(aviso)
//   );
// });

router.post("/notification/new", (req, res, next) => {
  const { neighbourhood, commentary } = req.body;

  Notification.create(req.body).then(allNotifications =>
    res.json(allNotifications)
  );
});

/// update one
router.put("/notification/:id", (req, res, next) => {
  Notification.findByIdAndUpdate(req.params.id, req.body).then(() => res.json, {
    update: true,
    _id: req.params.id
  });
});

/// delete one
router.delete("/notification/:id", (req, res, next) => {
  Notification.findByIdAndDelete(req.params.id).then(() =>
    res.json({ delete: true, _id: req.params.id })
  );
});

module.exports = router;
