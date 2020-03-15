const express = require('express');
const router  = express.Router();

router.use('/api', require('./api/index.js'))

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
