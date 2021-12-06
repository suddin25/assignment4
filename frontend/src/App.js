import "./App.css";
import { useEffect } from "react";

function App() {
	// useEffect(() => {
	// 	fetch("/");
	// 	return () => {
	// 		cleanup;
	// 	};
	// }, []);

	return (
		<div className="App">
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
			<label htmlFor=""></label>
		</div>
	);
}

export default App;
