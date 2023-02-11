const sql = require('./db_connection')

// constructor or model
const Notes = function (notes) {
	;(this.note = notes.name), (this.category = notes.category), (this.reminder = notes.reminder)
}
