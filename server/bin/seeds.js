// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Location = require("../models/Location");
const User = require("../models/User");
const Shop = require("../models/Shop");

const bcryptSalt = 10;

mongoose
  .connect(`${process.env.DBURL_HEROKU}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const id_location = [];
const id_shop = [];
const id_user = [];

let locations = [
  {
    neighbourhood: "Delicias",
    city: "Zaragoza"
  },
  {
    neighbourhood: "Centro",
    city: "Zaragoza"
  },
  {
    neighbourhood: "La Almozara",
    city: "Zaragoza"
  },
  {
    neighbourhood: "San Jorge",
    city: "Pamplona"
  },
  {
    neighbourhood: "San Juan",
    city: "Pamplona"
  },
  {
    neighbourhood: "Iturrama",
    city: "Pamplona"
  },
  {
    neighbourhood: "Segundo Ensanche",
    city: "Pamplona"
  }
];

let locationsCreatedAccesibleDesdeTodasPartes

User.deleteMany()
  .then(() => {
    return Shop.deleteMany();
  })
  .then(() => {
    return Location.deleteMany();
  })
  .then(() => {
    return Location.create(locations);
  })
  .then(locationsDelaBaseDeDatos => {
    locationsCreatedAccesibleDesdeTodasPartes = locationsDelaBaseDeDatos

    let shops = [
      {
        neighbourhood: "Delicias",
        name: "Zapatería El Pilar",
        sector: "Calzado",
        // owner: String,
        year: 1982
        // lat: Number,
        // lng: Number
      },
      {
        neighbourhood: "Delicias",
        name: "Ternasco y más",
        sector: "Alimentación",
        // owner: String,
        year: 2013
        // lat: Number,
        // lng: Number
      },
      {
        neighbourhood: "Delicias",
        name: "Novedades Eloína",
        sector: "Textil",
        // owner: String,
        year: 2004
        // lat: Number,
        // lng: Number
      },
      {
        neighbourhood: "La Almozara",
        name: "PerfectVision",
        sector: "Óptica",
        // owner: String,
        year: 2001
        // lat: Number,
        // lng: Number
      },
      {
        neighbourhood: "La Almozara",
        name: "Pastelería La Maja",
        sector: "Alimentación",
        // owner: String,
        year: 1991
        // lat: Number,
        // lng: Number
      },
      {
        neighbourhood: "La Almozara",
        name: "Outdoor Sport",
        sector: "Deportes",
        // owner: String,
        year: 2009
        // lat: Number,
        // lng: Number
      },
      {
        neighbourhood: "Centro",
        name: "Pizzería Portobello",
        sector: "Alimentación",
        // owner: String,
        year: 2004
        // lat: Number,
        // lng: Number
      },
      {
        neighbourhood: "Centro",
        name: "Droguería Agustín",
        sector: "Droguería Perfumería",
        // owner: String,
        year: 1987
        // lat: Number,
        // lng: Number
      },
      {
        neighbourhood: "Centro",
        name: "kiosco TBO",
        sector: "Distribución",
        // owner: String,
        year: 2017
        // lat: Number,
        // lng: Number
      },
      {
        neighbourhood: "Centro",
        name: "Tienda musical SOLFAMIDA",
        sector: "Artesanía",
        // owner: String,
        year: 2004
        // lat: Number,
        // lng: Number
      }
    ];

    return Shop.create(shops);
  })
  .then(shopsCreated => {
    let users = [
      {
        neighbourhood: locationsCreatedAccesibleDesdeTodasPartes[0]._id,
        username: "alice",
        password: bcrypt.hashSync("alice", bcrypt.genSaltSync(bcryptSalt)),
        role: "client",
        clientData: {
          comments: ["comment 1", "comment 2"]
        }
      },
      {
        neighbourhood: locationsCreatedAccesibleDesdeTodasPartes[1]._id,
        username: "bob",
        password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt)),
        role: "owner",
        ownerData: {
          shopId: shopsCreated[0]._id,
          comments: ["comment 1 dueño", "comment 2 dueño"]
        }
      }
    ];

    return User.create(users)
  })
  .then(usersCreated => {
    console.log(`${usersCreated.length} users created with the following id:`);
    console.log(usersCreated.map(u => u._id));
  })

  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect();
  })
  .catch(err => {
    mongoose.disconnect();
    throw err;
  });
