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
  .connect("mongodb://localhost/barrio", {
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
    _id: id_location[0],
    neighborhood: "Delicias",
    city: "Zaragoza"
  },
  {
    _id: id_location[1],
    neighborhood: "Centro",
    city: "Zaragoza"
  },
  {
    _id: id_location[2],
    neighborhood: "La Almozara",
    city: "Zaragoza"
  },
  {
    _id: id_location[3],
    neighborhood: "San Jorge",
    city: "Pamplona"
  },
  {
    _id: id_location[4],
    neighborhood: "San Juan",
    city: "Pamplona"
  },
  {
    _id: id_location[5],
    neighborhood: "Iturrama",
    city: "Pamplona"
  },
  {
    _id: id_location[6],
    neighborhood: "Segundo Ensanche",
    city: "Pamplona"
  }
];

let users = [
  {
    _id: id_user[0],
    neighborhood: id_location[0],
    username: "alice",
    password: bcrypt.hashSync("alice", bcrypt.genSaltSync(bcryptSalt)),
    role: "client"
  },
  {
    _id: id_user[1],
    neighborhood: id_location[0],
    username: "bob",
    password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt)),
    role: "owner"
  }
];

let shops = [
  {
    _id: id_shop[0],
    neighborhood: id_location[0],
    name: "Zapatería El Pilar",
    sector: "Calzado",
    // owner: String,
    year: 1982,
    // lat: Number,
    // lng: Number
  },
  {
    _id: id_shop[1],
    neighborhood: id_location[0],
    name: "Ternasco y más",
    sector: "Alimentación",
    // owner: String,
    year: 2013,
    // lat: Number,
    // lng: Number
  },
  {
    _id: id_shop[2],
    neighborhood: id_location[0],
    name: "Novedades Eloína",
    sector: "Textil",
    // owner: String,
    year: 2004,
    // lat: Number,
    // lng: Number
  },
  {
    _id: id_shop[3],
    neighborhood: id_location[0],
    name: "PerfectVision",
    sector: "Óptica",
    // owner: String,
    year: 2001,
    // lat: Number,
    // lng: Number
  },
  {
    _id: id_shop[4],
    neighborhood: id_location[0],
    name: "Pastelería La Maja",
    sector: "Alimentación",
    // owner: String,
    year: 1991,
    // lat: Number,
    // lng: Number
  },
  {
    _id: id_shop[5],
    neighborhood: id_location[0],
    name: "Outdoor Sport",
    sector: "Deportes",
    // owner: String,
    year: 2009,
    // lat: Number,
    // lng: Number
  },
  {
    _id: id_shop[6],
    neighborhood: id_location[1],
    name: "Pizzería Portobello",
    sector: "Alimentación",
    // owner: String,
    year: 2004,
    // lat: Number,
    // lng: Number
  },
  {
    _id: id_shop[7],
    neighborhood: id_location[1],
    name: "Droguería Agustín",
    sector: "Droguería Perfumería",
    // owner: String,
    year: 1987,
    // lat: Number,
    // lng: Number
  },
  {
    _id: id_shop[8],
    neighborhood: id_location[1],
    name: "kiosco TBO",
    sector: "Distribución",
    // owner: String,
    year: 2017,
    // lat: Number,
    // lng: Number
  },
  {
    _id: id_shop[9],
    neighborhood: id_location[1],
    name: "Tienda musical SOLFAMIDA",
    sector: "Artesanía",
    // owner: String,
    year: 2004,
    // lat: Number,
    // lng: Number
  }
];

User.deleteMany()
  .then(() => {
    return User.create(users);
  })
  .then(usersCreated => {
    console.log(`${usersCreated.length} users created with the following id:`);
    console.log(usersCreated.map(u => u._id));
  })

  .then(() => {
    return Location.deleteMany();
  })
  .then(() => {
    return Location.create(locations);
  })

  .then(() => {
    return Shop.deleteMany();
  })
  .then(() => {
    return Shop.create(shops);
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect();
  })
  .catch(err => {
    mongoose.disconnect();
    throw err;
  });
