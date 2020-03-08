const express = require("express");
const router = express.Router();
const Location = require("../../models/Location");
const User = require("../../models/User");
const Shop = require("../../models/Shop");
const Offer = require("../../models/Offer");
const Notification = require("../../models/Notification");

// /// ROUTES OF LOCATIONS/////////////////////////////////////////////

// /// show all
// router.get("/locations", (req, res, next) => {
//   Location.find().then(allLocations => res.json(allLocations));
// });

// ///  show one
// router.get("/location/:id", (req, res, next) => {
//   Location.findById(req.params.id).then(allLocations => {
//     res.json(allLocations);
//   });
// });

// /// create one
// router.post("/location/new", (req, res, next) => {
//   // let id_location = new mongoose.mongo.ObjectId();
//   Location.create(id_location, req.body).then(() => res.redirect("/locations"));
// });

// /// update one
// router.put("location/update", (req, res, next) => {
//   Location.findByIdAndUpdate(req.params.id, req.body).then(() => {
//     res.json({ updated: true });
//   });
// });

// /// delete one
// router.delete("location/delete", (req, res, next) => {
//   Location.findByIdAndDelete(req.params.id).then(() => {
//     res.json({ deleted: true, _id: req.params.id });
//   });
// });

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

/// create one
router.post("/shop/new", (req, res, next) => {
  Shop.create(id_shop, req.body).then(() => res.json(allShops));
});

/// update one
router.put("/shop/update", (req, res, next) => {
  Shop.findOneAndUpdate(req.params.id, req.body).then(() =>
    res.json({ updated: true })
  );
});

/// delete one
router.delete("/shop/delete", (req, res, next) => {
  Shop.findByIdAndDelete(req.params.id).then(() => {
    res.json({ delete: true, _id: req.params.id });
  });
});

/// ROUTES OF OFFERS  //////////////////////////////////////////////////

/// show all
router.get("/offers", (req, res, next) => {
  Offer.find()
    .populate("shop")
    .then(allOffers => res.json(allOffers));
});

/// show one
router.get("/offer/:id", (req, res, next) => {
  Offer.findById(req.params.id)
    .populate("shop")
    .then(allOffers => res.json(allOffers));
});

/// create one
router.post("/offer/new", (req, res, next) => {
  Offer.create(req.params.id, req.body).then(() => res.redirect("/offers"));
});

/// update one
router.put("/offer/update", (req, res, next) => {
  Offer.findByIdAndUpdate(req.params.id, req.body).then(() =>
    res.json({ updated: true })
  );
});

/// delete one
router.delete("/offer/delete", (req, res, next) => {
  Offer.findByIdAndDelete(req.params.id).then(() =>
    res.json({ delete: true, _id: req.params.id })
  );
});

/// ROUTES OF NOTIFICATIONS  //////////////////////////////////////////////////////////

/// show all
router.get("/notifications", (req, res, next) => {
  Notification.find()
    .populate("user", {
      role: "owner"
    })
    .then(allNotifications => res.json(allNotifications));
});

/// show one
router.get("/notification", (req, res, next) => {
  Notification.findById(req.params.id)
    .populate("user", { role: "owner" })
    .then(allNotifications => res.json(allNotifications));
});

/// create one
router.post("/offer/new", (req, res, next) => {
  Notification.create(req.params.id, req.body).then(() =>
    res.redirect("/notifications")
  );
});

/// update one
router.put("/notification/update", (req, res, next) => {
  Notification.findByIdAndUpdate(req.params.id, req.body).then(() => res.json, {
    update: true
  });
});

/// delete one
router.delete("/notification/delete", (req, res, next) => {
  Notification.delete(req.params.id).then(() =>
    res.json({ delete: true, _id: req.params.id })
  );
});

module.exports = router;
