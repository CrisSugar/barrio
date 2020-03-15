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
// const bcryptSalt = 10;

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
    description: "Cuidamos tus pies desde 1982, con calzado hecho en España.",
    imageUrl:
      "https://res.cloudinary.com/dnefup5bk/image/upload/v1583967178/barrio-app/zapateria_b04dte.jpg",
    mobile: 679854212,
    web: "www.zapateriaelpilar.com",
    // owner: "Manolo Garcia",
    offers: [],
    year: 1982
  },
  {
    neighbourhood: "Delicias",
    name: "Ferretería Domínguez",
    sector: "Materiales Auxiliares",
    description:
      "Tornillería a granel, mecanismos eléctricos y menaje del hogar.",
    imageUrl:
      "https://res.cloudinary.com/dnefup5bk/image/upload/v1583967177/barrio-app/ferreteria_uan6vy.jpg",
    mobile: 679854212,
    web: "www.ferreteriadominguez.com",
    // owner: "Teresa Fanjul",
    offers: [],
    year: 1999
  },
  {
    neighbourhood: "Delicias",
    name: "Taberna Manchega",
    sector: "Hostelería",
    description: "Cocina tradicional manchega, bodega selecta y buen ambiente.",
    imageUrl:
      "https://res.cloudinary.com/dnefup5bk/image/upload/v1583967177/barrio-app/bar_c6mtff.jpg",
    mobile: 679854212,
    web: "www.tabernamanchega.com",
    // owner: "Paloma Herrero",
    offers: [],
    year: 1982
  },
  {
    neighbourhood: "Delicias",
    name: "Ternasco y más",
    sector: "Alimentación",
    description:
      "Todos nuestros productos provienen de granjas certificadas, de animales alimentados sin OGM y en libertad.",
    imageUrl:
      "https://res.cloudinary.com/dnefup5bk/image/upload/v1583967177/barrio-app/carniceria_zn6hh2.jpg",
    mobile: 621485975,
    web: "www.ternascoymas.com",
    // owner: "Enrique Granda",
    offers: [],
    year: 2013
  },
  {
    neighbourhood: "Delicias",
    name: "Novedades Eloína",
    sector: "Textil",
    description:
      "Últimas tendencias y modelos clásicos, ropa y complementos de señora y caballero.",
    imageUrl:
      "https://res.cloudinary.com/dnefup5bk/image/upload/v1583967178/barrio-app/tiendaropa_xjl8e6.jpg",
    mobile: 632518977,
    web: "www.novedadeseloina.com",
    // owner: String,
    offers: [],
    year: 2004
  },
  {
    neighbourhood: "La Almozara",
    name: "PerfectVision",
    sector: "Óptica",
    description:
      "Desde 2001 corriengo la visión de los zaragozanos, precios competitivos en gafas de visión y de sol.",
    imageUrl:
      "https://res.cloudinary.com/dnefup5bk/image/upload/v1583967177/barrio-app/optica_za58th.jpg",
    mobile: 675824198,
    web: "www.perfectvision.com",
    // owner: "Alberto Gil",
    offers: [],
    year: 2001
  },
  {
    neighbourhood: "La Almozara",
    name: "Farmacia Romerales",
    sector: "Farmacéutico",
    description:
      "Desde 1989 despachamos medicamentos con receta y productos naturales.",
    imageUrl:
      "https://res.cloudinary.com/dnefup5bk/image/upload/v1583967177/barrio-app/farmacia_sulkni.jpg",
    mobile: 635214496,
    web: "www.farmaciaromerales.com",
    // owner: "Pilar de la Rosa",
    offers: [],
    year: 1991
  },
  {
    neighbourhood: "La Almozara",
    name: "Mobydick",
    sector: "Alimentación",
    description:
      "Pescados de captura del dia, bajo normativa, respetando el medio ambiente.",
    imageUrl:
      "https://res.cloudinary.com/dnefup5bk/image/upload/v1583967178/barrio-app/pescader%C3%ADa_zja92q.jpg",
    mobile: 635214496,
    web: "www.pescadosmobydick.com",
    // owner: "Sonia Domínguez",
    offers: [],
    year: 1991
  },
  {
    neighbourhood: "La Almozara",
    name: "Flor de Lis",
    sector: "Floristería",
    description:
      "Te acompañamos en tus momentos más felices, con flores exóticas, nacionales y plantas.",
    imageUrl:
      "https://res.cloudinary.com/dnefup5bk/image/upload/v1583967177/barrio-app/florister%C3%ADa_jtl9y2.jpg",
    mobile: 655841277,
    web: "www.flordelis.com",
    // owner: "Carlos Iglesias",
    offers: [],
    year: 2009
  },
  {
    neighbourhood: "Centro",
    name: "Pizzería Portobello",
    sector: "Alimentación",
    description:
      "Pizzas tradicionales en horno de leña, con las recetas de la nonna.",
    imageUrl:
      "https://res.cloudinary.com/dnefup5bk/image/upload/v1583967177/barrio-app/pizzeria_ihrkvn.jpg",
    mobile: 616816868,
    web: "www.pizzasportobello.com",
    // owner: "Isabel Ramos",
    offers: [],
    year: 2004
  },
  {
    neighbourhood: "Centro",
    name: "Peluquería La Señal",
    sector: "Servicios",
    description:
      "Somos profesionales titulados, siempre al día en las tendencias de estilo de peluquería y barbería.",
    imageUrl:
      "https://res.cloudinary.com/dnefup5bk/image/upload/v1583967177/barrio-app/peluquer%C3%ADa_yir4iy.jpg",
    mobile: 630201040,
    web: "www.peluquerialasenal.com",
    // owner: "Joaquín Gómez",
    offers: [],
    year: 1987
  },
  {
    neighbourhood: "Centro",
    name: "kiosco TBO",
    sector: "Distribución",
    description: "Prensa, golosinas y expedición de boletos de lotería.",
    imageUrl:
      "https://res.cloudinary.com/dnefup5bk/image/upload/v1583967177/barrio-app/kiosko_hcyf7g.jpg",
    mobile: 645781200,
    web: "www.kioskoTBO.com",
    // owner: "Patricia Llera",
    offers: [],
    year: 2017
  },
  {
    neighbourhood: "Centro",
    name: "Restaurante El Trisquel",
    sector: "Hostelería",
    description: "Alta cocina, chef con estrella Michelin desde 2017.servicio de mediodia y noche bajo reserva.",
    imageUrl:
      "https://res.cloudinary.com/dnefup5bk/image/upload/v1583967178/barrio-app/restaurante_ctoiqm.jpg",
    mobile: 645781200,
    web: "www.restauranteeltrisquel.com",
    // owner: "Salvador Masaveu",
    offers: [],
    year: 2017
  },
  {
    neighbourhood: "Centro",
    name: "Tienda musical SOLFAMIDA",
    sector: "Artesanía",
    description:
      "Instrumentos de viento, cuerda y percusión. Tercera generación de luthiers.",
    imageUrl:
      "https://res.cloudinary.com/dnefup5bk/image/upload/v1583967178/barrio-app/tiendamusical_frueoc.jpg",
    mobile: 678541269,
    web: "www.musicalsolfamida.com",
    // owner: "Claudia Perez",
    offers: [],
    year: 2004
  }
];

let notifications = [
  {
    neighbourhood: "La Almozara",
    commentary:
      "Desde el 20-3-2020: corte al tráfico de las calles Braulio Foz y Pedro I de Aragón por obras de conservación en Palacio de la Aljafería."
  },
  {
    neighbourhood: "La Almozara",
    commentary:
      "Por próximas obras en el negocio, precisamos almacenar parte de nuestra mercancía. Si alguien tiene espacio en su almacén, se gratificará."
  },
  {
    neighbourhood: "Delicias",
    commentary:
      "Una vecina del barrio nos consulta si sabemos de algún negocio que pueda cederle un espación para la realización de taller de caligrafía dos veces al mes."
  },
  {
    neighbourhood: "Delicias",
    commentary:
      "Hemos recibido una notificación del Ayuntamiento avisando de corte circulatorio en calle Antonio Sangenis por cambio de tubería en las próximas fechas."
  },
  {
    neighbourhood: "Centro",
    commentary:
      "La asociación de vecinos nos solicita colaboración económica y organizativa para la I Marcha por la esclerósis múltiple. Se convoca reunión en la sede la Asociación el 08-04-2020."
  },
  {
    neighbourhood: "Centro",
    commentary:
      "Un vecino busca reloj antiguo de muñeca perdido la semana pasada en nuestro barrio."
  }
];
let users = [
  {
    neighbourhood: "Delicias",
    username: "alice",
    password: bcrypt.hashSync("alice", bcrypt.genSaltSync(bcryptSalt)),
    role: "client",
    clientData: {
      comments: ["comment 1", "comment 2"]
    }
  },
  {
    neighbourhood: "Centro",
    username: "bob",
    password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt)),
    role: "owner",
    ownerData: {
      // shopId: shopsCreated[0]._id,
      comments: ["comment 1 dueño", "comment 2 dueño"]
    }
  }
];

let offers = [
  {
    neighbourhood: "Delicias",
    shop: "Taberna Manchega",
    product: "Todos los jueves, con cada consumición, ración de caracoles con tomate.",
    prize: "10.95 euros/Kg",
    offerPrize: "7.95 euros/Kg"
    // image: "http://nohayimagentodavia.jpg"
  },
  {
    neighbourhood: "Delicias",
    shop: "Ternasco y más",
    product: "cuarto de cordero lechal",
    prize: "22.95 euros/Kg",
    offerPrize: "19.95 euros/Kg"
    // image: "http://nohayimagentodavia.jpg"
  },
  {
    neighbourhood: "Centro",
    shop: "Tienda musical SOLFAMIDA",
    product: "Saxofón alto, marca JÚPITER",
    prize: "740 euros",
    offerPrize: "695 euros"
    // image: "http://nohayimagentodavia.jpg"
  },
  {
    neighbourhood: "Centro",
    shop: "Pizzería Portobello",
    product: "Pizza Napolitana mediana, 2x1 local y recoger.",
    prize: "22,50 euros",
    offerPrize: "11,25 euros"
    // image: "http://nohayimagentodavia.jpg"
  },
  {
    neighbourhood: "Delicias",
    shop: "Novedades Eloína",
    product: "Camisa de caballero manga larga",
    prize: "45 euros",
    offerPrize: "39 euros"
    // image: "http://nohayimagentodavia.jpg"
  },
  {
    neighbourhood: "La Almozara",
    shop: "PerfectVision",
    product: "Solución única de lentillas,pack 3 x 330ml.",
    prize: "15 euros",
    offerPrize: "11,95 euros"
    // image: "http://nohayimagentodavia.jpg"
  },
  {
    neighbourhood: "La Almozara",
    shop: "Flor de Lis",
    product: "Saco de 5kg de bulbos de tulipanes holandeses, colores variados.",
    prize: "32,95 euros",
    offerPrize: "26,95 euros"
    // image: "http://nohayimagentodavia.jpg"
  },
  {
    neighbourhood: "Centro",
    shop: "Peluquería La Señal",
    product: "Retoque de barba y depilación de cejas.",
    prize: "25 euros",
    offerPrize: "19.95 euros"
    // image: "http://nohayimagentodavia.jpg"
  }
];

User.deleteMany()
  .then(() => {
    return Shop.deleteMany();
  })
  .then(() => {
    return Offer.deleteMany();
  })
  .then(() => {
    return User.deleteMany();
  })
  .then(() => {
    return Notification.deleteMany();
  })
  .then(() => {
    return User.create(users);
  })
  .then(() => {
    return Notification.create(notifications);
  })
  .then(() => {
    return Shop.create(shops);
  })
  .then(shopsCreated => {
    Offer.create(offers).then(offersCreated => {
      shopsCreated.forEach((shop, idx) => {
        offersCreated.forEach((offer, idx) => {
          if (shop.name === offer.shop) {
            console.log(offer._id);
            console.log(offer.shop);
            Shop.findOneAndUpdate(
              { name: offer.shop },
              { $push: { offers: offer._id } }
            )
              .then(() => console.log("OH YEAH ACTUALIZADO!"))
              .catch(err => console.log(err));
          }
        });
      });
    });
  })
  .then(() => {
    console.log("FUNCIONÓ CRIS!! NO TE PREOCUPES :)");
    // Close properly the connection to Mongoose
    // mongoose.disconnect();
  })
  .catch(err => {
    //mongoose.disconnect();
    throw err;
  });
