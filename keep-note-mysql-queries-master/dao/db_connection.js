const connection = require('../config/db.connection')

// connect to db once app is started
connection.connect((err) => {
	if (err) throw err

	console.log('connected')
})

// ! the below statement will enable queries from file, will implement in the end
//to keep the connection alive, make frequent quries to SQL database
// setInterval(function () {
// 	connection.query('SELECT 1')
// }, 5000)

// make the connection global
global.connection = connection

module.exports = connection
