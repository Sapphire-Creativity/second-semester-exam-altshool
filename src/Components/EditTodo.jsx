import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
//
const EditTodo = ({
	isOpen,
	currentTask,
	setCurrentTask,
	closeModal,
	editTask,
}) => {
	//
	// const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);
	//

	// useEffect(() => {
	// 	const closeModalIfEscape = (e) => {
	// 		e.key === "Escape" && closeEditMode();
	// 	};

	// 	window.addEventListener("keydown", closeModalIfEscape);

	// 	return () => {
	// 		window.removeEventListener("keydown", closeModalIfEscape);
	// 	};
	// }, []);
	//Function to handle submit
	// const handleFormSubmit = (e) => {
	// 	e.preventDefault();
	// 	updateTask({ ...editedTask, name: updatedTaskName });
	// };

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
			<div className="bg-white p-6 rounded-lg max-w-md w-full">
				<h2 className="text-xl font-bold mb-4">Edit Task</h2>
				<input
					type="text"
					name="title"
					value={currentTask?.title || ""}
					onChange={(e) =>
						setCurrentTask({
							...currentTask,
							title: e.target.value,
						})
					}
					className="w-full border p-2 mb-4 rounded-md"
				/>
				<div className="flex justify-end space-x-2">
					<button onClick={closeModal} className="small-button">
						Cancel
					</button>
					<button
						onClick={() => editTask(currentTask.id, currentTask)}
						className="small-button"
					>
						Save
					</button>
				</div>
			</div>
		</div>
	);
};
export default EditTodo;
