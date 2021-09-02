import React from "react";
import "./style.css";

const Hotel = () => {
	const myStyle = { color: "blue" };

	return (
		<>
			<div className="card-container">
				<div className="card">
					<div className="card-body">
						<span className="card-number card-circle subtle">1</span>
						<span className="card-author subtle" style={myStyle}>
							Breakfast
						</span>
						<h3 className="card-title"> Maggie </h3>
						<span className="card-description subtle">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
							optio repellat veritatis officiis earum quae, tempora dignissimos
							necessitatibus ipsam id incidunt amet, corrupti provident quidem
							vel molestias eaque. Ut, cum.
						</span>
						<div className="card-read"> Read </div>
					</div>
					<img src="{image}" alt="" className="card-media" />

					<span className="card-tag subtle">Order Now</span>
				</div>
			</div>
			{/* <h2>Welcome to my Restaurent</h2> */}
		</>
	);
};

export default Hotel;
