import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, toggleTask, enterEditMode }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-20">
			{tasks
				.sort((a, b) => b.id - a.id)
				.map((task) => (
					<TaskItem
						key={task.id}
						task={task}
						deleteTask={deleteTask}
						toggleTask={toggleTask}
						enterEditMode={enterEditMode}
					/>
				))}
		</div>
	);
};

export default TaskList;
