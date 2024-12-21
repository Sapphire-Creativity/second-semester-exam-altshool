import React from "react";
import Tasks from "../Components/Tasks";

const SortTask = () => {
	const tasks = [
		{ id: 1, title: "Task 1", completed: true },
		{ id: 2, title: "Task 2", completed: false },
		{ id: 3, title: "Task 3", completed: true },
		{ id: 4, title: "Task 4", completed: false },
	];

	return (
		<div className="flex justify-center gap-4 mb-8">
			<button
				className={`btn ${
					filter === "All" ? "bg-blue-500 text-white" : "bg-gray-200"
				}`}
				onClick={() => setFilter("All")}
			>
				All
			</button>
			<button
				className={`btn ${
					filter === "Completed" ? "bg-blue-500 text-white" : "bg-gray-200"
				}`}
				onClick={() => setFilter("Completed")}
			>
				Completed
			</button>
			<button
				className={`btn ${
					filter === "Not Completed" ? "bg-blue-500 text-white" : "bg-gray-200"
				}`}
				onClick={() => setFilter("Not Completed")}
			>
				Not Completed
			</button>
		</div>
	);
};

export default SortTask;
