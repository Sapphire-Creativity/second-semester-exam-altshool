import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
const TodoDetails = () => {
	//To use the loader data
	//
	// const { title, id, completed } = todoDetailsdata;

	const { id } = useParams();
	const todoDetailsdata = useLoaderData();

	return (
		<div className="container">
			<h1 className="my-10 text-4xl"> TASK ID: {id}</h1>

			<div className="boxstyle">
				<div>
					<span className="bg-blue-500 text-xs px-4 py-2 text-white rounded-full ">
						UserID: {todoDetailsdata.userId}
					</span>
					<h4 className="text-center text-base font-medium text-gray-700 my-4">
						{todoDetailsdata.title}
					</h4>
					<div className="flex items-center justify-center text-center">
						{todoDetailsdata.completed ? (
							<span className="flex items-center justify-center gap-2  bg-green-500 text-white text-sm py-2 px-4 rounded-full mt-4">
								<FaCheckCircle /> Task Completed
							</span>
						) : (
							<span className="flex items-center justify-center gap-2 bg-red-400 text-white text-sm py-2 px-4 rounded-full mt-4">
								<MdCancel /> Task Incomplete
							</span>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TodoDetails;

export const todoDetailsLoader = async ({ params }) => {
	const { id } = params;
	const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
	if (!res.ok) {
		throw Error("Could not fetch the details!");
	}

	return res.json();
};
