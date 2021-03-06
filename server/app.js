require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');

const { DBURL_HEROKU } = process.env;
mongoose.Promise = Promise;
mongoose
  .connect(`${DBURL_HEROKU}`)
  .then(() => {
    console.log(`Connected to Mongo on ${DBURL_HEROKU}`)
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
var whitelist = [
  'http://localhost:3000', 'https://barrio-app.herokuapp.com/', 'http://barrio-app.herokuapp.com/','https://localhost:3000' 
];
var corsOptions = {
  origin: function(origin, callback){
      var originIsWhitelisted = whitelist.includes(origin);
      callback(null, originIsWhitelisted);
  },
  credentials: true
};
app.use(cors(corsOptions));

// Middleware Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

// app.use(session({
//   secret: 'angular auth passport secret shh',
//   resave: true,
//   saveUninitialized: true,
//   cookie: {
//     httpOnly: true,
//     maxAge: 2419200000
//   },
//   store: new MongoStore({ mongooseConnection: mongoose.connection })
// }));
// require('./passport')(app);


app.use(session({
  secret: 'angular auth passport secret shh',
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 2419200000
  },
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
require('./passport')(app);


app.use(express.static(path.join(__dirname, 'public')));
// app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico'))); 



// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';




app.use("/",require("./routes"))

// app.use('/', require('./routes/file-upload-routes'));

app.use((req,res) => {
  res.sendFile(__dirname + "/public/index.html");
});



module.exports = app;
