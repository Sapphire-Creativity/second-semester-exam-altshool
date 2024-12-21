import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { Link } from "react-router-dom";
//
const TaskItem = ({
	task,
	deleteTask,
	toggleTask,
	updateTask,
	enterEditMode,
}) => {
	const [isChecked, setIsChecked] = useState(task.checked);

	const handleCheckboxChange = (e) => {
		setIsChecked(!isChecked);
		toggleTask(task.id);
	};
	return (
		<Link className="boxstyle">
			<div key={task.id} className="">
				<p>ID: {task.id}</p>

				<input
					type="checkbox"
					checked={isChecked}
					name={task.name}
					id={task.id}
					onChange={handleCheckboxChange}
				/>

				<label htmlFor={task.id}>{task.name}</label>
			</div>

			<div className="flex justify-center gap-4 mt-6">
				<button
					onClick={() => enterEditMode(task)}
					className="small-button flex items-center justify-center gap-2"
				>
					Edit <MdEdit />
				</button>
				<button
					onClick={() => deleteTask(task.id)}
					className="small-button flex items-center justify-center gap-2 bg-red-950 hover:bg-red-600"
				>
					Delete <RiDeleteBin6Fill />
				</button>
			</div>
		</Link>
	);
};

export default TaskItem;
