import React, { useState, useEffect } from "react";
import axios from "axios";
import { LuSearch } from "react-icons/lu";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import CreateTodo from "../Components/CreateTodo";
import EditTodo from "../Components/EditTodo";
import SelectFilter from "../Components/SelectFilter";

const Home = () => {
	const [tasks, setTasks] = useState([]);
	const [filter, setFilter] = useState("all");
	const [page, setPage] = useState(1);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentTask, setCurrentTask] = useState(null);
	const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
	const navigate = useNavigate();

	//

	//
	// Fetch todos from API

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

	// Function to add task

	const addTask = (newTask) => {
		setTasks((prevTasks) => [newTask, ...prevTasks]); // Add new task at the top
		setIsCreatePopupOpen(false);
	};

	// Function to edit task

	const editTask = (id, updatedTask) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === id ? { ...task, ...updatedTask } : task
			)
		);
		closeModal();
	};

	// Function to delete task

	const deleteTask = (id) => {
		setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
	};

	// Function to open modal

	const openModal = (task) => {
		setCurrentTask(task);
		setIsModalOpen(true);
	};

	// Function to close modal

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

	//

	const handleFilterChange = (filterOption) => {
		setFilter(filterOption);
	};

	const filteredTasks = tasks.filter((task) => {
		if (filter === "completed") return task.completed;
		if (filter === "notCompleted") return !task.completed;
		return true; // "all" or default case
	});

	return (
		<div className="container relative flex-col">
			<h1 className="text-primary text-2xl sm:text-4xl font-bold text-center mb-8">
				TODO LISTS
			</h1>

			{/* Create Todo Button */}

			<button
				onClick={() => setIsCreatePopupOpen(true)}
				className="btn-small mx-auto block mb-10 sm:w-[20rem]"
			>
				Create Todo
			</button>

			{/*  */}
			<div className="">
				{/* Search component */}

				<div className="flex items-center gap-4 bg-slate-200 py-2 px-5 rounded-full">
					<LuSearch className="text-primary text-xl" />
					<input
						type="text"
						placeholder="Search Todos..."
						className=" bg-transparent border-none outline-none p-2"
					/>
				</div>

				{/* Filter component */}
				<div className="my-4">
					<SelectFilter
						selectedFilter={filter}
						onFilterChange={handleFilterChange}
					/>
				</div>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{filteredTasks.map((item) => (
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
											openModal(item);
										}}
									>
										Edit <MdEdit />
									</button>
									<button
										className="small-button flex items-center gap-2"
										onClick={(e) => {
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
			</div>

			{/* Task Items List */}

			<div className="max-w-5xl mx-auto mt-5 py-8">
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
											e.preventDefault();
											e.stopPropagation();
											openModal(item);
										}}
									>
										Edit <MdEdit />
									</button>
									<button
										className="small-button flex items-center gap-2"
										onClick={(e) => {
											e.preventDefault();
											e.stopPropagation();
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

				{/* Pagination Component */}
				<div className="mt-20 flex justify-center gap-5">
					<button
						onClick={() => handlePageChange("prev")}
						className="medium-button"
						disabled={page === 1}
					>
						Previous
					</button>
					<button
						onClick={() => handlePageChange("next")}
						className="medium-button"
					>
						Next
					</button>
				</div>

				{/* Edit Todo Component */}

				<EditTodo
					isOpen={isModalOpen}
					currentTask={currentTask}
					setCurrentTask={setCurrentTask}
					closeModal={closeModal}
					editTask={editTask}
				/>
				{/* Create Todo Component */}
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
