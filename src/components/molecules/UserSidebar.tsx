import React from "react";

const UserSidebar: React.FC = () => {
	return (
		<aside
			className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-white duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0`}
		></aside>
	);
};

export default UserSidebar;
