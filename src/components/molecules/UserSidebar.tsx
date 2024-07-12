import React, { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

interface UserSidebarProps {
	sidebarOpen: boolean;
	setSidebarOpen: (arg: boolean) => void;
}

const UserSidebar: React.FC<UserSidebarProps> = ({
	sidebarOpen,
	setSidebarOpen,
}) => {
	const location = useLocation();
	const { pathname } = location;

	const trigger = useRef<any>(null);
	const sidebar = useRef<any>(null);

	return (
		<aside
			className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-white duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0`}
		></aside>
	);
};

export default UserSidebar;
