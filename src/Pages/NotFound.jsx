import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
	const navigate = useNavigate();
	return (
		<div className="container flex flex-col items-center">
			<h1 className="text-primary text-6xl  ">Opps! </h1>
			<p className="text-gray-800 text-center my-10 text-lg">
				The page you are searching for does not exist. Don't go away!
			</p>
			<button
				onClick={() => navigate("/")}
				className="flex items-center justify-center my-10 w-[20rem] m-auto"
			>
				Go Home
			</button>
		</div>
	);
};

export default NotFound;
