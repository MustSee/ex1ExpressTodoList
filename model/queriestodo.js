var mysql = require('mysql');
var connection = require('./../config/db');

class todoQueries {

	static selectAll () {
		connection.query('select * from todolist', function (error, results) {
			if (error) throw error;
			console.log(results);
		})
	}
}

module.exports = todoQueries;
