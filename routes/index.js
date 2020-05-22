const router = require('express').router()

// Routes to the api and requires the necessary grocery routes
router.use('/api', require('./groceryRoutes.js'))

module.exports = router