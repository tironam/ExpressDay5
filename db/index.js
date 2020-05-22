// Requires the mysql2 npm package to help link to workbench
const mysql = require('mysql2')

// Creates a variable to simplify the process and specifies the info workbench will need
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'rootroot',
    database: 'grocery_db'
})

module.exports = db