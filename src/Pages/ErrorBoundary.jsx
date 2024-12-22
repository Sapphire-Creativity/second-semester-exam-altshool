import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
	const error = useRouteError();
	const navigate = useNavigate();

	return (
		<div className="container flex flex-col items-center text-center h-[100vh]">
			<h1 className="text-primary text-6xl mt-[5rem] mb-[5rem]">Oops!</h1>
			<h3 className="text-2xl">An error occurred!</h3>
			<p>{error?.message || "Something went wrong."}</p>
			<button
				onClick={() => navigate("/")}
				className="flex items-center justify-center my-10 w-[20rem] m-auto"
			>
				Go Home
			</button>
		</div>
	);
};

export default ErrorBoundary;
