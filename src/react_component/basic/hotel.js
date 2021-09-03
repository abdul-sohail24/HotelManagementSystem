import React, { useState } from "react";
import "./style.css";
import Items from "./hotelapi";
import Hotelcard from "./hotelcard";

const Hotel = () => {
	// Hooks should always be at Top
	const [menuData, setMenuData] = useState(Items);

	const filterItem = (category) => {
		const updatedList = Items.filter((curElem) => {
			return curElem.category === category;
		});
		setMenuData(updatedList);
	};
	// console.log(menuData);

	return (
		<>
			<nav className="navbar">
				<div className="btn-group">
					<button
						className="btn-group__item"
						onClick={() => filterItem("breakfast")}
					>
						Breakfast
					</button>
					<button
						className="btn-group__item"
						onClick={() => filterItem("lunch")}
					>
						Lunch
					</button>
					<button
						className="btn-group__item"
						onClick={() => filterItem("evening")}
					>
						Evening
					</button>
					<button
						className="btn-group__item"
						onClick={() => filterItem("dinner")}
					>
						Dinner
					</button>
					<button
						className="btn-group__item"
						onClick={() => setMenuData(Items)}
					>
						All
					</button>
				</div>
			</nav>
			<Hotelcard menuData={menuData} />
		</>
	);
};

export default Hotel;
