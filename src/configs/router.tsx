// import { useEffect } from "react";
// import { Route, Routes, useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminMapView from "../pages/admin/AdminMapView";
import AdminAllBusinesses from "../pages/admin/AdminAllBusinesses";
import AdminAllProperties from "../pages/admin/AdminAllProperties";
import AdminAllUsers from "../pages/admin/AdminAllUsers";
import AdminTransactions from "../pages/admin/AdminTransactions";
import AdminProfile from "../pages/admin/AdminProfile";
// import NotFound from "../pages/NotFound";
// import PageTitle from "../components/PageTitle";

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
		</Routes>
	);
}

export default RouterConfig;
