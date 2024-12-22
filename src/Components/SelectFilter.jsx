import React from "react";

const SelectFilter = ({ selectedFilter, onFilterChange }) => {
	return (
		<div className="w-full max-w-xs mx-auto">
			<select
				className="w-full p-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
				value={selectedFilter}
				onChange={(e) => onFilterChange(e.target.value)}
			>
				<option value="all">All</option>
				<option value="completed">Completed</option>
				<option value="notCompleted">Not Completed</option>
			</select>
		</div>
	);
};

export default SelectFilter;
