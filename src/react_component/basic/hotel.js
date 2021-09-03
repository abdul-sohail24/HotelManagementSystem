import React, { useState } from "react";
import "./style.css";
import Items from "./hotelapi";
import Hotelcard from "./hotelcard";

const Hotel = () => {
	// Hooks should always be at Top
	const [menuData, setMenuData] = useState(Items);

	// console.log(menuData);

	return (
		<>
			<Hotelcard menuData={menuData} />
		</>
	);
};

export default Hotel;
