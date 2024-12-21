import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const RootLayout = () => {
	return (
		<div className="w-full">
			<NavBar />
			<div>
				<Outlet />
			</div>
		</div>
	);
};

export default RootLayout;
