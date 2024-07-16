import React from "react";
import AdminDashboardLayout from "../../components/templates/AdminDashboardLayout";

const AdminProfile: React.FC = () => {
	return (
		<AdminDashboardLayout>
			<div className="grid grid-cols-1  md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
				<h1>Admin Profile Page</h1>;
			</div>
		</AdminDashboardLayout>
	);
};

export default AdminProfile;
