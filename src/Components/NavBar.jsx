import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="flex items-center justify-between w-full p-5 sm:px-14 py-7 shadow-softGlow ">
			<div>
				<h3 className="font-semibold text-dark text-xl cursor-pointer">
					Dev.Sa
				</h3>
			</div>

			<ul className="flex items-center gap-6">
				<NavLink to="/" className="text-gray-950">
					<li>Home</li>
				</NavLink>
				<NavLink to="errorboundary" className="text-gray-950">
					<li>Error</li>
				</NavLink>
				<NavLink to="404Page" className="text-gray-950">
					<li>404</li>
				</NavLink>
			</ul>
		</div>
	);
};

export default NavBar;
