const router = require('express').Router()

// Routes to the api and requires the necessary grocery routes
router.use('/api', require('./groceryRoutes.js'))

module.exports = router