import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const CreateTodo = ({ closePopUp, addTask }) => {
	const [task, setTask] = useState("");

	const handleFormSubmit = (e) => {
		e.preventDefault();
		addTask({
			title: task,
			completed: false,
			id: Date.now(),
		});
		setTask("");
	};

	return (
		<form
			onSubmit={handleFormSubmit}
			className="p-5 sm:p-10 flex flex-col items-center justify-center bg-white w-[20rem] sm:w-[40rem] m-auto rounded-lg"
		>
			<div className="flex items-center justify-between my-2 w-full">
				<h2 className="text-xl font-medium text-primary my-4">Create Todo</h2>
				<IoClose
					onClick={closePopUp}
					className="text-xl hover:text-primary duration-100 cursor-pointer"
				/>
			</div>
			<div className="w-full pt-4">
				<h3 className="mb-2 text-sm font-semibold">Title</h3>
				<input
					type="text"
					placeholder="Enter todo title..."
					value={task}
					onChange={(e) => setTask(e.target.value)}
					required
					autoFocus
					maxLength={200}
					className="w-full border p-2 mb-4 rounded-md"
				/>
			</div>
			<div className="flex justify-between gap-4 my-5">
				<button type="submit" className="medium-button">
					Create
				</button>
				<button type="button" className="medium-button" onClick={closePopUp}>
					Cancel
				</button>
			</div>
		</form>
	);
};

export default CreateTodo;
