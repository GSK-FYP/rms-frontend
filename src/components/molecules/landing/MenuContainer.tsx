import React from "react";
import { Link } from "react-router-dom";

const MenuContainer: React.FC = () => {
	return (
		<div className="absolute left-4 right-4 top-24 z-50 flex flex-col rounded-2xl border border-slate-300/40 bg-white p-6 text-left text-lg shadow-lg">
			<div className="flex flex-col space-y-5 ">
				<Link to="/">Features</Link>
				<Link to="/">Testimonials</Link>
				<Link to="/">How It Works</Link>
				<Link to="#faqs">FAQs</Link>
			</div>
			<hr className="mt-5 border-slate-300/40" />
			<Link className="mt-4" to="">
				Sign in
			</Link>
		</div>
	);
};

export default MenuContainer;
