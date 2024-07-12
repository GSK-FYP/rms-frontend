// import { useEffect } from "react";
// import { Route, Routes, useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
// import NotFound from "../pages/NotFound";
import AdminDashboard from "../pages/admin/AdminDashboard";
// import PageTitle from "../components/PageTitle";

function RouterConfig() {
	// const { pathname } = useLocation();

	// useEffect(() => {
	// 	window.scrollTo(0, 0);
	// }, [pathname]);

	return (
		<Routes>
			<Route
				index
				element={
					<>
						{/* <PageTitle title="Home | RTMS" /> */}
						<Home />
					</>
				}
			/>
			<Route
				path="/auth/login"
				element={
					<>
						{/* <PageTitle title="Login | TailAdmin - Tailwind CSS Admin Dashboard Template" /> */}
						<Login />
					</>
				}
			/>
			<Route
				path="/auth/register"
				element={
					<>
						{/* <PageTitle title="Register | TailAdmin - Tailwind CSS Admin Dashboard Template" /> */}
						<Register />
					</>
				}
			/>
			<Route
				path="/auth/forgot-password"
				element={
					<>
						{/* <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" /> */}
						<ForgotPassword />
					</>
				}
			/>
			<Route
				path="/admin/dashboard"
				element={
					<>
						{/* <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" /> */}
						<AdminDashboard />
					</>
				}
			/>
		</Routes>
	);
}

export default RouterConfig;
