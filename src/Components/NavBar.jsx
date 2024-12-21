import React from "react";
import { NavLink } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
const NavBar = () => {
	return (
		<div className="flex items-center justify-between w-full px-14 py-7 shadow-softGlow ">
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
			</ul>

			<div className="flex items-center gap-4 bg-slate-50 py-2 px-5 rounded-full">
				<LuSearch className="text-primary text-xl" />
				<input
					type="text"
					placeholder="Search Todos..."
					className=" bg-slate-50 border-none outline-none p-2"
				/>
			</div>
		</div>
	);
};

export default NavBar;
