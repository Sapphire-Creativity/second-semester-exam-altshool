import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
//
const EditTodo = ({ closePopUp, editedTask, updateTask, closeEditMode }) => {
	//
	const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);
	//

	useEffect(() => {
		const closeModalIfEscape = (e) => {
			e.key === "Escape" && closeEditMode();
		};

		window.addEventListener("keydown", closeModalIfEscape);

		return () => {
			window.removeEventListener("keydown", closeModalIfEscape);
		};
	}, []);
	//Function to handle submit
	const handleFormSubmit = (e) => {
		e.preventDefault();
		updateTask({ ...editedTask, name: updatedTaskName });
	};

	return (
		<div
			role="dialog"
			onClick={(e) => {
				e.target === e.currentTarget && closeEditMode();
			}}
		>
			{isModalOpen && (
				<div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
					<div className="bg-white p-6 rounded-lg max-w-md w-full">
						<h2 className="text-xl font-bold mb-4">Edit Task</h2>
						<input
							type="text"
							name="title"
							value={currentTask?.title || ""}
							onChange={handleInputChange}
							className="w-full border p-2 mb-4"
						/>
						<div className="flex justify-end space-x-2">
							<button
								onClick={closeModal}
								className="px-4 py-2 bg-gray-500 text-white rounded"
							>
								Cancel
							</button>
							<button
								onClick={handleModalSave}
								className="px-4 py-2 bg-blue-600 text-white rounded"
							>
								Save
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default EditTodo;
