import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import CreateTodo from "../Components/CreateTodo";

const Home = () => {
	const [tasks, setTasks] = useState([]);
	const [page, setPage] = useState(1);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentTask, setCurrentTask] = useState(null);
	const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		fetchTodos(page);
	}, [page]);

	const fetchTodos = async (currentPage) => {
		try {
			const response = await axios.get(
				`https://jsonplaceholder.typicode.com/todos?_page=${currentPage}&_limit=8`
			);
			setTasks(response.data);
		} catch (error) {
			console.error("Error fetching tasks:", error);
		}
	};

	const addTask = (newTask) => {
		setTasks((prevTasks) => [newTask, ...prevTasks]); // Add new task at the top
		setIsCreatePopupOpen(false);
	};

	const editTask = (id, updatedTask) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === id ? { ...task, ...updatedTask } : task
			)
		);
		closeModal();
	};

	const deleteTask = (id) => {
		setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
	};

	const openModal = (task) => {
		setCurrentTask(task);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setCurrentTask(null);
		setIsModalOpen(false);
	};

	const handlePageChange = (direction) => {
		setPage((prev) =>
			direction === "next" ? prev + 1 : Math.max(1, prev - 1)
		);
	};

	const handleTaskClick = (id) => {
		navigate(`/${id}`); // Navigate to TodoDetails with task ID
	};

	return (
		<div className="container relative">
			<h1 className="text-primary text-2xl sm:text-4xl font-bold text-center mb-8">
				TODO LISTS
			</h1>

			<button
				onClick={() => setIsCreatePopupOpen(true)}
				className="btn-primary mx-auto block mb-10"
			>
				Create Todo
			</button>

			<div className="max-w-5xl mx-auto py-8">
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{tasks.map((item) => (
						<Link
							to={item.id.toString()}
							key={item.id}
							className="boxstyle cursor-pointer"
						>
							<h4 className="text-center text-base font-medium text-gray-700">
								{item.title}
							</h4>
							<div className="flex justify-between mt-6 items-center">
								<div className="flex items-center justify-center gap-5 m-auto">
									<button
										className="small-button  flex items-center gap-2"
										onClick={(e) => {
											// e.stopPropagation();
											openModal(item);
										}}
									>
										Edit <MdEdit />
									</button>
									<button
										className="small-button flex items-center gap-2"
										onClick={(e) => {
											// e.stopPropagation();
											deleteTask(item.id);
										}}
									>
										Delete <RiDeleteBin6Fill />
									</button>
								</div>
							</div>
						</Link>
					))}
				</div>

				{/* PAGINATION */}
				<div className="mt-8 flex justify-center gap-4">
					<button
						onClick={() => handlePageChange("prev")}
						className="small-button"
						disabled={page === 1}
					>
						Previous
					</button>
					<button
						onClick={() => handlePageChange("next")}
						className="small-button"
					>
						Next
					</button>
				</div>

				{/* Edit todo modal */}
				{isModalOpen && (
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
				)}

				{/* Create todo modal */}
				{isCreatePopupOpen && (
					<div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
						<CreateTodo
							closePopUp={() => setIsCreatePopupOpen(false)}
							addTask={addTask}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default Home;
