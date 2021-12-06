const express = require("express");
const app = express();
const port = 3200;

const newConnection = require("./DBConnection");
//const cors = require("cors");

//app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/get-users", (req, res) => {
	let conn = newConnection();
	conn.connect();

	conn.query("SELECT username FROM users", (error, result) => {
		if (error) {
			console.log(error);
		} else {
			res.send(result);
		}
	});
});

app.post("/add-user", (req, res) => {
	console.log("got request");
	console.log(req);
	let conn = newConnection();
	conn.connect();

	let username = req.body.username;
	let userPassword = req.body.userPassword;
	let gender = req.body.gender;
	let age = req.body.age;

	conn.query(
		"INSERT INTO users (username, userPassword, gender, age) VALUES (?,?,?,?)",
		[username, userPassword, gender, age],
		(error, result) => {
			if (error) {
				console.log(error);
			} else {
				res.send("New user inserted");
			}
		}
	);
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
