const express = require("express");

const app = express();

const newConnection = require("./DBConnection");

app.get("/users", (req, res) => {
	let conn = newConnection();
	conn.connect();

	let response = "";

	conn.query("SELECT username FROM users", 
	(error, res) => {
		if (error) {
			console.log(error)
		}
		else {
			res.send(JSON.stringify(results));
		}
	}	
});

app.post("/insert-new-user", (req, res) => {
	let conn = newConnection();
	conn.connect();

	const username = req.body.username;
	const userPassword = req.body.userPassword;
	const gender = req.body.gender;
	const age = req.body.age;

	conn.query(
		"INSERT INTO users (username, userPassword, gender, age) VALUES (?,?,?,?)",
		[username, userPassword, gender, age],
		(error, result) => {
			if (error) {
				console.log(error);
			} else {
				res.send("New user added");
			}
		}
	);
});

app.listen(3001, () => {
	console.log("Your server is running on port 3001");
});
