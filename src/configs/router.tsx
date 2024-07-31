// import { useEffect } from "react";
// import { Route, Routes, useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
// import PageTitle from "../components/PageTitle";
import Home from "../pages/landing/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
// import NotFound from "../pages/NotFound";

import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminMapView from "../pages/admin/AdminMapView";
import AdminAllBusinesses from "../pages/admin/AdminAllBusinesses";
import AdminAllProperties from "../pages/admin/AdminAllProperties";
import AdminAllUsers from "../pages/admin/AdminAllUsers";
import AdminTransactions from "../pages/admin/AdminTransactions";
import AdminProfile from "../pages/admin/AdminProfile";

import UserDashboard from "../pages/user/UserDashboard";
import UserMapView from "../pages/user/UserMapView";
import UserAllBusinesses from "../pages/user/UserAllBusinesses";
import UserAllProperties from "../pages/user/UserAllProperties";
import UserTransactions from "../pages/user/UserTransactions";
import UserProfile from "../pages/user/UserProfile";

function RouterConfig() {
	// const { pathname } = useLocation();

	// useEffect(() => {
	// 	window.scrollTo(0, 0);
	// }, [pathname]);

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/auth/login" element={<Login />} />
			<Route path="/auth/register" element={<Register />} />
			<Route path="/auth/forgot-password" element={<ForgotPassword />} />
			{/* <Route path='auth/reset-password/:token' element={<ResetPassword />} />
			<Route exact path='auth/verify/:token' element={<VerifyEmail />} /> */}
			 
			<Route element={<ProtectedRoute />}>
				<Route path="/admin/*">
					<Route path="overview" element={<AdminDashboard />} />
					<Route path="map" element={<AdminMapView />} />
					<Route path="businesses" element={<AdminAllBusinesses />} />
					<Route path="properties" element={<AdminAllProperties />} />
					<Route path="users" element={<AdminAllUsers />} />
					<Route path="transactions" element={<AdminTransactions />} />
					<Route path="profile" element={<AdminProfile />} />
					{/* <Route path="contact-support" element={} /> */}
				</Route>
			</Route>

			<Route path="/user/*">
				<Route path="overview" element={<UserDashboard />} />
				<Route path="map" element={<UserMapView />} />
				<Route path="businesses" element={<UserAllBusinesses />} />
				<Route path="properties" element={<UserAllProperties />} />
				<Route path="transactions" element={<UserTransactions />} />
				<Route path="profile" element={<UserProfile />} />
				{/* <Route path="contact-support" element={} /> */}
			</Route>
		</Routes>
	);
}

export default RouterConfig;
