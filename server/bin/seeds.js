// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// const Location = require("../models/Location");
const User = require("../models/User");
const Shop = require("../models/Shop");
const Offer = require("../models/Offer");
const Notification = require("../models/Notification");
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



let shops = [
  {
    neighbourhood: "Delicias",
    name: "Zapatería El Pilar",
    sector: "Calzado",
    description:
      "Cuidamos tus pies desde 1982, con calzado hecho en España.",
    // image: String,
    mobile: 679854212,
    web: "www.zapateriaelpilar.com",
    // owner: String,
    // offers:[],
    year: 1982,
    location: {
      lat: 33.23,
      lng: 33.23
    }
  },
  {
    neighbourhood: "Delicias",
    name: "Ternasco y más",
    sector: "Alimentación",
    description:
      "Todos nuestros productos provienen de granjas certificadas, de animales alimentados sin OGM y en libertad.",
    //image: String,
    mobile: 621485975,
    web: "www.ternascoymas.com",
    // owner: String,
    // offers: [],
    year: 2013,
    location: {
      lat: 40.25,
      lng: 33.23
    }
  },
  {
    neighbourhood: "Delicias",
    name: "Novedades Eloína",
    sector: "Textil",
    description:
      "Últimas tendencias y modelos clásicos, ropa y complementos de señora y caballero.",
    // image: String,
    mobile: 632518977,
    web: "www.novedadeseloina.com",
    // owner: String,
    // offers:[],
    year: 2004,
    location: {
      lat: 33.23,
      lng: 33.23
    }
  },
  {
    neighbourhood: "La Almozara",
    name: "PerfectVision",
    sector: "Óptica",
    description:
      "Desde 2001 corriengo la visión de los zaragozanos, precios competitivos en gafas de visión y de sol.",
    //image: String,
    mobile: 675824198,
    web: "www.perfectvision.com",
    // owner: String,
    //offers:[],
    year: 2001,
    location: {
      lat: 33.23,
      lng: 33.23
    }
  },
  {
    neighbourhood: "La Almozara",
    name: "Pastelería La Maja",
    sector: "Alimentación",
    description:
      "Dulces y tartas para todas tus celebraciones, bombones y pastelería para celíacos.",
    //image: String,
    mobile: 635214496,
    web: "www.pastelerialamaja.com",
    // owner: String,
    //offers:[],
    year: 1991,
    location: {
      lat: 33.23,
      lng: 33.23
    }
  },
  {
    neighbourhood: "La Almozara",
    name: "Outdoor Sport",
    sector: "Deportes",
    description:
      "Expertos en equipamiento de montaña y nieve, también material de runnig y padel.",
    //image:String,
    mobile: 655841277,
    web: "www.outdoorsport.com",
    // owner: String,
    //offers:[],
    year: 2009,
    location: {
      lat: 33.23,
      lng: 33.23
    }
  },
  {
    neighbourhood: "Centro",
    name: "Pizzería Portobello",
    sector: "Alimentación",
    description:
      "Pizzas tradicionales en horno de leña, con las recetas de la nonna.",
    //image:String,
    mobile: 616816868,
    web: "www.pizzasportobello.com",
    // owner: String,
    //offers:[],
    year: 2004,
    location: {
      lat: 33.23,
      lng: 33.23
    }
  },
  {
    neighbourhood: "Centro",
    name: "Droguería Agustín",
    sector: "Droguería Perfumería",
    description:
      "Todo tipo de productos de limpieza, venta al detalle y al por mayor.",
    //image: String,
    mobile: 630201040,
    web: "www.drogueriaagustin.com",
    // owner: String,
    //offers: [],
    year: 1987,
    location: {
      lat: 33.23,
      lng: 33.23
    }
  },
  {
    neighbourhood: "Centro",
    name: "kiosco TBO",
    sector: "Distribución",
    description: "Prensa, golosinas y expedición de boletos de lotería.",
    //image: String,
    mobile: 645781200,
    web: "www.kioskoTBO.com",
    // owner: String,
    //ofers: [],
    year: 2017,
    location: {
      lat: 33.23,
      lng: 33.23
    }
  },
  {
    neighbourhood: "Centro",
    name: "Tienda musical SOLFAMIDA",
    sector: "Artesanía",
    description:
      "Instrumentos de viento, cuerda y percusión. Tercera generación de luthiers.",
    //image: String,
    mobile: 678541269,
    web: "www.musicalsolfamida.com",
    // owner: String,
    //offers: [],
    year: 2004,
    location: {
      lat: 33.23,
      lng: 33.23
    }
  }
];

// let notification = [
//   {
//     neighbourhood: "La Almozara",
//     commentary: "Desde el 20-3-2020: corte al tráfico de las calles Braulio Foz y Pedro I de Aragón por obras de conservación en Palacio de la Aljafería.",
//   },
//   {
//     neighbourhood: "Centro",
//     commentary: "La asociación de vecinos nos solicita colaboración económica y organizativa para la I Marcha por la esclerósis múltiple. Se convoca reunión en la sede la Asociación el 08-04-2020."
//   }
// ];
// let users = [
//   {
//     neighbourhood: "Delicias",
//     username: "alice",
//     password: bcrypt.hashSync("alice", bcrypt.genSaltSync(bcryptSalt)),
//     role: "client",
//     clientData: {
//       comments: ["comment 1", "comment 2"]
//     }
//   },
//   {
//     neighbourhood: "Centro",
//     username: "bob",
//     password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt)),
//     role: "owner",
//     ownerData: {
//       // shopId: shopsCreated[0]._id,
//       comments: ["comment 1 dueño", "comment 2 dueño"]
//     }
//   }
// ];

let offers = [
  {
    neighbourhood: "Delicias",
    shop: "Ternasco y más",
    product: "cuarto de cordero lechal",
    prize: "22.95 euros/Kg",
    offerPrize: "19.95 euros/Kg",
    image: "http://nohayimagentodavia.jpg"
  },
  {
    neighbourhood: "Centro",
    shop: "Tienda musical SOLFAMIDA",
    product: "Saxofón alto, marca JÚPITER",
    prize: "740 euros",
    offerPrize: "695 euros",
    image: "http://nohayimagentodavia.jpg"
  },
  {
    neighbourhood: "Delicias",
    shop: "Novedades Eloína",
    product: "Camisa de caballero manga larga",
    prize: "45 euros",
    offerPrize: "39 euros",
    image: "http://nohayimagentodavia.jpg"
  },
  {
    neighbourhood: "Delicias",
    shop: "Novedades Eloína",
    product: "Camisa de caballero manga larga",
    prize: "45 euros",
    offerPrize: "39 euros",
    image: "http://nohayimagentodavia.jpg"
  },

];



User.deleteMany()
  .then(() => {
    return Shop.deleteMany();
  })
  .then(() => {
    return User.deleteMany();
  })
  .then(() => {
    return Shop.create(shops);
  })
  .then((shopsCreated) => {
    Offer.create(offers)
    .then(offersCreated => {
        shopsCreated.forEach((shop,idx) => {
          offersCreated.forEach((offer,idx) => {
            if(shop.name === offer.shop){
              console.log(offer._id)
              console.log(offer.shop)
              Shop.findOneAndUpdate({name: offer.shop},{$push: {offers: offer._id}})
              .then(()=> console.log("OH YEAH ACTUALIZADO!"))
              .catch(err => console.log(err))
            }
          })
        })
    })
  })
  .then(() => {
    console.log("FUNCIONÓ CRIS!! NO TE PREOCUPES :)")
    // Close properly the connection to Mongoose
   // mongoose.disconnect();
  })
  .catch(err => {
    //mongoose.disconnect();
    throw err;
  });
