const mysql = require('mysql2');
let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    port: 3306,
    database: 'my_store'
})

conn.connect()
module.exports = conn ;