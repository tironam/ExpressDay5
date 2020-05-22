// Requires the .env package to use your .env file and create local variable/secrets
require('dotenv').config()
const express = require('express')

const app = express()

// The middleware to help link Express
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Brings in the routes needed from the index,js file in routes
app.use(require('/routes'))

// Creates a heroku port and localhost for us to check things out
app.listen(process.env.PORT || 3000, () => console.log('https://localhost:3000'))