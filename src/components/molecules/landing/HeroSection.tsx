import React from "react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
	const buttonStyle = [
		{
			id: 1,
			text: "Get Started Today",
			link: "/auth/register",
			style: "bg-black-2 text-white font-semibold hover:bg-primary",
		},
		{
			id: 2,
			text: "Learn More",
			link: "#",
			style: "border space-x-3 hover:border-primary",
		},
	];
	return (
		<section className="px-4 pb-16 pt-20 mb-50 sm:px-6 lg:px-8 lg:pt-32 text-black-2">
			<div className="text-center">
				<h1 className="mx-auto max-w-4xl text-5xl font-semibold leading-[55px] sm:text-7xl sm:leading-[77px]">
					Revolutionizing
					<br className="md:hidden" />{" "}
					<span className="text-primary">Revenue Management</span> for Ghana.
				</h1>
				<p className="mx-auto mt-6 max-w-2xl px-6 text-lg leading-8 text-black-2 sm:mt-7">
					Empowering the nation through transparent, efficient, and
					technologically advanced revenue mobilization. Our system bridges
					local and national levels, ensuring every cedi counts towards Ghana's
					progress.
				</p>
				<div className="mt-10 flex justify-center space-x-5 lg:pt-0.5">
					{buttonStyle.map(({ id, link, text, style }) => (
						<Link
							key={id}
							className={`${style} flex items-center rounded-full px-4 py-2 text-sm tracking-wide`}
							to={link}
						>
							<p>{text}</p>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
