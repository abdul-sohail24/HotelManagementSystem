import React from "react";

// functional component

// const App() {
// 	return (
// 		<div>
// 			<h3>THE DARK KNIGHT</h3>
// 		</div>
// 	);
// }

// Using const
const App = () => {
	// fat arrow function (=>)
	return (
		<>
			<MyName />
			<h2 className="hello">Christian Bale {2 + 5} </h2>
			{/* Js is written in curly braces */}
			<MyName />
		</>
	);
};

// const keyword
const MyName = () => {
	return <h3>I'm Iron Man</h3>;
};

export default App;
