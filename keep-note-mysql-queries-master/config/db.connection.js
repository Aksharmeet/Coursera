const mysql = require('mysql2')

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '12$3ghbcv',
	database: 'notes',
	multipleStatements: true,
})

module.exports = connection
