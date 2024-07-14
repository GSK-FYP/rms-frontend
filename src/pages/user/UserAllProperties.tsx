import React from "react";
import UserDashboardLayout from "../../components/templates/UserDashboardLayout";

const UserAllProperties: React.FC = () => {
	return (
		<UserDashboardLayout>
			<div className="grid grid-cols-1  md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
				<h1>User All Properties Page</h1>
			</div>
		</UserDashboardLayout>
	);
};

export default UserAllProperties;
