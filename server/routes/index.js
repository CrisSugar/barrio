const express = require('express');
const router  = express.Router();

routes.use('/api', require('./api'))

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
