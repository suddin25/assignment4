import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";

function App() {
	const [username, setUsername] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const [gender, setGender] = useState("");
	const [age, setAge] = useState("");

	//const [usersList, setUsersList] = useState([]);

	/* 	useEffect(() => {
		fetch("/");
		return () => {
			cleanup;
		};
	}, []); */

	const addUser = () => {
		Axios.post("http://localhost:3200/add-user", {
			username: username,
			userPassword: userPassword,
			gender: gender,
			age: age,
		}).then(() => {
			console.log("success");
		});
	};

	const getUsers = () => {
		Axios.get("http://localhost:3200/get-users").then((response) => {
			console.log(response);
		});
	};

	return (
		<div className="App">
			<div className="createUser">
				<label>Username:</label>
				<input
					type="text"
					onChange={(event) => {
						setUsername(event.target.value);
					}}
				/>
				<label>Password:</label>
				<input
					type="text"
					onChange={(event) => {
						setUserPassword(event.target.value);
					}}
				/>
				<label>Gender:</label>
				<input
					type="text"
					onChange={(event) => {
						setGender(event.target.value);
					}}
				/>
				<label>Age:</label>
				<input
					type="number"
					onChange={(event) => {
						setAge(event.target.value);
					}}
				/>
				<button onClick={addUser}>Add Employee</button>
			</div>
			{/* <div className="employees"></div>
			<div className="Login">
				<button
					className="Users"
					onClick={() => {
						fetch("/users");
					}}
				>
					Users
				</button>
			</div>
			<label htmlFor=""></label> */}
		</div>
	);
}

export default App;
