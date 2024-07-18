import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Github from "../../../icons/Github";
import LogoIcon from "../../../icons/LogoIcon";
import Twitter from "../../../icons/Twitter";

const Footer: React.FC = () => {
	const links = [
		{
			id: 1,
			text: "Features",
			sectionId: "FeaturesSection",
		},
		{
			id: 2,
			text: " Testimonials",
			sectionId: "TestimonialsSection",
		},
		{
			id: 3,
			text: "Pricing",
			sectionId: "PlansSection",
		},
	];

	return (
		<footer className="bg-slate-50">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="py-16">
					<div className="flex justify-center">
						<LogoIcon />
					</div>
					<div className="mt-9 flex justify-center space-x-7 text-sm text-slate-700">
						{links.map(({ id, sectionId, text }) => (
							<ScrollLink
								key={id}
								to={sectionId}
								spy={true}
								// exact="true"
								activeClass="active"
								smooth
								className="cursor-pointer rounded-lg px-2 py-1 duration-300 hover:bg-slate-100 hover:text-slate-900"
							>
								{text}
							</ScrollLink>
						))}
					</div>
				</div>
				<div className="flex flex-col border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
					<div className="flex justify-center space-x-6">
						<Link
							to="#"
							className="fill-slate-500 duration-300 hover:fill-slate-700"
						>
							<Twitter />
						</Link>
						<Link
							to="https://github.com/GSK_FYP/"
							className="fill-slate-500 duration-300 hover:fill-slate-700"
							target="_blank"
						>
							<Github />
						</Link>
					</div>
					<div className="mt-6 flex justify-center text-slate-500 sm:mt-0 sm:text-sm">
						<p>Copyright © 2024 RTMS. All rights reserved.</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
