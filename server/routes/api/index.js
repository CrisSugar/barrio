const router = require('express').Router()

router.use('/auth', require('./auth'))
router.use('/', require('./allRoutes'))

module.exports = router;