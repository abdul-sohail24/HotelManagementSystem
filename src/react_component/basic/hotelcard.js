import React from "react";

const Hotelcard = ({ menuData }) => {
	console.log(menuData);
	const myStyle = { color: "blue" };

	return (
		<>
			<section className="main-card--container">
				{menuData.map((curElem) => {
					return (
						<>
							<div className="card-container">
								<div className="card">
									<div className="card-body">
										<span className="card-number card-circle subtle">
											{curElem.id}
										</span>
										<span className="card-author subtle" style={myStyle}>
											{curElem.category}
										</span>
										<h3 className="card-title"> {curElem.name} </h3>
										<span className="card-description subtle">
											{curElem.description}
										</span>
										<div className="card-read"> Read </div>
									</div>
									<img src={curElem.image} alt="" className="card-media" />

									<span className="card-tag subtle">Order Now</span>
								</div>
							</div>
						</>
					);
				})}
			</section>

			{/* <h2>Welcome to my Restaurent</h2> */}
		</>
	);
};

export default Hotelcard;
