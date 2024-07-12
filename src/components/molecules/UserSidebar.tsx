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

	// close on click outside
	useEffect(() => {
		const clickHandler = ({ target }: MouseEvent) => {
			if (!sidebar.current || !trigger.current) return;
			if (
				!sidebarOpen ||
				sidebar.current.contains(target) ||
				trigger.current.contains(target)
			)
				return;
			setSidebarOpen(false);
		};
		document.addEventListener("click", clickHandler);
		return () => document.removeEventListener("click", clickHandler);
	});

	// close if the esc key is pressed
	useEffect(() => {
		const keyHandler = ({ keyCode }: KeyboardEvent) => {
			if (!sidebarOpen || keyCode !== 27) return;
			setSidebarOpen(false);
		};
		document.addEventListener("keydown", keyHandler);
		return () => document.removeEventListener("keydown", keyHandler);
	});

	return (
		<aside
			ref={sidebar}
			className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-white duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
				sidebarOpen ? "translate-x-0" : "-translate-x-full"
			}`}
		>
			<div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
				<NavLink to="/user/overview">
					<h1 className="font-bold title-xxl">RTMS</h1>
				</NavLink>
			</div>
		</aside>
	);
};

export default UserSidebar;
