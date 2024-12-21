import {
	createBrowserRouter,
	createRoutesFromElements,
	Routes,
	Route,
	RouterProvider,
} from "react-router-dom";
import React, { Suspense } from "react";
import RootLayout from "./Layout/RootLayout";
import ErrorBoundary from "./Pages/ErrorBoundary";
import Loader from "./Components/Loader";
import { todoDetailsLoader } from "./Components/TodoDetails";
import NotFound from "./Pages/NotFound";

// Lazy-loaded components
const Home = React.lazy(() => import("./Pages/Home"));
const TodoDetails = React.lazy(() => import("./Components/TodoDetails"));
// const NotFound = React.lazy(() => import("./Pages/NotFound"));

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout />}>
				<Route
					index
					element={
						<Suspense fallback={<Loader />}>
							<Home />
						</Suspense>
					}
				/>
				<Route
					path=":id"
					element={
						<Suspense fallback={<Loader />}>
							<TodoDetails />
						</Suspense>
					}
					loader={todoDetailsLoader}
					errorElement={<ErrorBoundary />}
				/>
				<Route
					path="errorboundary"
					element={
						<Suspense fallback={<Loader />}>
							<ErrorBoundary />
						</Suspense>
					}
					loader={todoDetailsLoader}
				/>

				<Route path="*" element={<NotFound />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
};

export default App;
