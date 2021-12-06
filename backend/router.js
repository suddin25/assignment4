const express = require("express");

const app = express();

const newConnection = require("./DBConnection");

app.get("/users", function (req, res) {
	let conn = newConnection();
	conn.connect();

	conn.query("SELECT * from users", function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify(results));
	});
});
