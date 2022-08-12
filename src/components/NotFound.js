import React from "react";
import Clock from "./Clock";

const NotFound = () => {
	return (
		<div className="content">
			<h2>Sorry, page not found 😔</h2>
			<p>Check your url for accuracy.</p>
			<Clock />
		</div>
	);
};

export default NotFound;
