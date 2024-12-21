import React from "react";
import "./Loader.css";
const Loader = () => (
	<div className="flex items-center justify-center h-screen">
		<div className="loader"></div>
		<p className="ml-4 text-gray-600">Loading...</p>
	</div>
);

export default Loader;
